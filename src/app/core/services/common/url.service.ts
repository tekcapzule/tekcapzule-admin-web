import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { MessageService } from 'primeng/api';



const API_PATH =  `${environment.apiEndpointTemplate}`
.replace('{{aws-region}}', environment.awsRegion);

@Injectable({
  providedIn: 'root',
})
export class URLService {

  constructor() {
  }

  getURLByCardName(uniqueId: string): string {
    let path = '';
    if(uniqueId === 'user') {
      path = `${API_PATH}/user`.replace('{{api-gateway}}', environment.userApiGateway);
    } else if(uniqueId === 'subscription') {
      path = `${API_PATH}/subscription`.replace('{{api-gateway}}', environment.subscriptionApiGateway);
    }  else if(uniqueId === 'feedback') {
      path = `${API_PATH}/feedback`.replace('{{api-gateway}}', environment.feedbackApiGateway);
    }  else if(uniqueId === 'capsule') {
      path = `${API_PATH}/capsule`.replace('{{api-gateway}}', environment.capsuleApiGateway);
    } else if(uniqueId === 'course') {
      path = `${API_PATH}/course`.replace('{{api-gateway}}', environment.feedbackApiGateway);
    } else if(uniqueId === 'tekByte') {
      path = `${API_PATH}/tekbyte`.replace('{{api-gateway}}', environment.tekByteApiGateway);
    } else if(uniqueId === 'product') {
      path =  `${API_PATH}/product`.replace('{{api-gateway}}', environment.feedbackApiGateway);
    } else if(uniqueId === 'digest'){
      path =  `${API_PATH}/digest`.replace('{{api-gateway}}', environment.feedbackApiGateway);
    }
    return path;
  }
}
