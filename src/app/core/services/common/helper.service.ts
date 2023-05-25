import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { URLService } from './url.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HelperService {
  
  constructor(private router:Router,
    private urlService:URLService,
    private httpClient: HttpClient,
    private messageService: MessageService) {
  }

  showSuccess(messageService, msg) {
    messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: msg });
  }

  showError(messageService) {
    messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Oops! Something went wrong!' });
  }

  getCount(uniquId: string): Observable<any> {
    console.log('this.urlService.getURLByCardName(uniquId)', this.urlService.getURLByCardName(uniquId));
    return this.httpClient.post<any>(this.urlService.getURLByCardName(uniquId) + '/getCount', {});
  }

}
