import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { ChannelEvent, EventChannelService } from '@app/core';
import { NavTab } from '@app/shared/models';
import { Router } from '@angular/router';
import { Card } from '@app/shared/models/card.model';
import { Constants } from '@app/shared/utils';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit, OnDestroy {
  crumbs: NavTab[] = [Constants.DashboardCard];
  cards: Card[] = Constants.Cards;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.crumbs.push(this.cards.find(c => this.router.url.includes(c.navUrl)));
  }

  ngOnDestroy(): void {
  }

  navigateToCapsulePage(url: string): void {
    this.router.navigate([url]);
  }
}
