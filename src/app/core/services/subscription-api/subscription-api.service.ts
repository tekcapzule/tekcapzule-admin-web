import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { TopicItem } from '@app/shared/models';
import { cacheManager, Constants } from '@app/shared/utils';
import { AuthService } from '@app/core/services/auth/auth.service';
import { UserApiService } from '@app/core/services/user-api/user-api.service';
import { TekByteItem } from '@app/shared/models/tekbyte-item.model';
import { SubscriptionDataItem } from '@app/admin/models';

const SUBSCRIPTION_API_PATH = `${environment.apiEndpointTemplate}/subscription`
  .replace('{{api-gateway}}', environment.subscriptionApiGateway)
  .replace('{{aws-region}}', environment.awsRegion);

const SUBSCRIPTION_ALLTEKBYTE_CACHE_KEY = 'com.tekcapsule.subscription.allsubscription';
const SUBSCRIPTION_GETTEKBYTE_CACHE_KEY = 'com.tekcapsule.subscription.getsubscription.<code>';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionApiService {

  constructor( private httpClient: HttpClient ) {
  }

  getAllSubscription(): Observable<SubscriptionDataItem[]> {
    return this.httpClient.post<SubscriptionDataItem[]>(
      `${SUBSCRIPTION_API_PATH}/getAll`,
      {},
      {
        params: {
          cache: 'yes',
          ckey: SUBSCRIPTION_ALLTEKBYTE_CACHE_KEY,
        }
      }
    );
  }
}
