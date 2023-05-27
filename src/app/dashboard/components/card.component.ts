import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HelperService } from '@app/core/services/common/helper.service';
import { Card } from '@app/shared/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: Card;
  
  constructor(private router: Router, private helperService: HelperService) {}

  ngOnInit(): void {
    this.helperService.getCount(this.card.uniqueId).subscribe(count => {
      this.card.count = count;
    })
  }

  ngOnDestroy(): void {
  }

  onCardClick(): void {
    this.router.navigateByUrl(this.card.navUrl);
  }
}
