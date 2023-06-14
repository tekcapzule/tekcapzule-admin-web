import { Component, OnDestroy, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';
import { NavTab } from '@app/shared/models';
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
  pageLoaded: NavTab;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateBreadCrumb();
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.updateBreadCrumb();
      }
    });
  }

  updateBreadCrumb() {
    this.crumbs = [Constants.DashboardCard];
    this.pageLoaded = Constants.Pages.find(c => this.router.url.includes(c.navUrl));
    if(this.pageLoaded) {
      this.crumbs[0] = this.cards.find(c => c.uniqueId === this.pageLoaded.navUrl.split('/')[1]);
      this.crumbs.push(this.pageLoaded);
    } else {
      this.crumbs.push(this.cards.find(c => this.router.url.includes(c.navUrl)));
    }
  }

  ngOnDestroy(): void {
  }


  navigateToCapsulePage(url: string): void {
    this.router.navigate([url]);
  }
}
