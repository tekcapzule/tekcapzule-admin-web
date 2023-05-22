import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EventChannelService } from '@app/core';
import { Card } from '@app/shared/models/card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  cards: Card[] = [
    { uniqueId: 'user', navUrl: 'admin/users', displayName: 'Users' },
    { uniqueId: 'subscription', navUrl: 'admin/subscription', displayName: 'Subscriptions' },
    { uniqueId: 'feedback', navUrl: 'admin/feedback', displayName: 'Feedback' },
    { uniqueId: 'capsule', navUrl: 'admin/capsule', displayName: 'Capsule' },
    { uniqueId: 'course', navUrl: 'admin/course', displayName: 'Courses' },
    { uniqueId: 'tekByte', navUrl: 'admin/tekByte', displayName: 'TekByte' },
    { uniqueId: 'product', navUrl: 'admin/product', displayName: 'Products (Mkt Place)' },
    { uniqueId: 'digest', navUrl: 'admin/digest', displayName: 'Digests' },
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
