import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SubscriptionApiService } from './subscription-api.service';

describe('SubscriptionApiService', () => {
  let service: SubscriptionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SubscriptionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
