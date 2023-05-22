import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminFeedbackDataItem } from '@app/admin/models';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';

const FEEDBACK_API_PATH = `${environment.apiEndpointTemplate}/feedback`
  .replace('{{api-gateway}}', environment.feedbackApiGateway)
  .replace('{{aws-region}}', environment.awsRegion);

const FEEDBACK_ALLTEKBYTE_CACHE_KEY = 'com.tekcapsule.feedback.allfeedback';

@Injectable({
  providedIn: 'root',
})
export class FeedbackApiService {
  constructor(private httpClient: HttpClient) {}

  getFeedbackApiPath(): string {
    return FEEDBACK_API_PATH;
  }

  createFeedback(feedback: any): Observable<any> {
    return this.httpClient.post(`${FEEDBACK_API_PATH}/create`, feedback);
  }

  getAllFeedback(): Observable<AdminFeedbackDataItem[]> {
    return this.httpClient.post<AdminFeedbackDataItem[]>(
      `${FEEDBACK_API_PATH}/getAll`,
      {},
      {
        params: {
          cache: 'yes',
          ckey: FEEDBACK_ALLTEKBYTE_CACHE_KEY,
        }
      }
    );
  }
}
