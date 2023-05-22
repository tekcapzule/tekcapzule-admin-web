import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EventChannelService } from '@app/core';
import { Card } from '@app/shared/models/card.model';
import { Constants } from '@app/shared/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  cards: Card[] = Constants.Cards;

  constructor() {}

  ngOnInit(): void {
  }
}
