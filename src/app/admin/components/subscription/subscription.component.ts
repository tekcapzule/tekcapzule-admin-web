import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnDef } from '@app/shared/models';
import { AdminFeedbackDataItem, SubscriptionDataItem } from '@app/admin/models';
import { DataTableComponent } from '@app/shared/components/data-table/data-table.component';
import { AppSpinnerService } from '@app/core';
import { SubscriptionApiService } from '@app/core/services/subscription-api/subscription-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  subscriptionColumns: ColumnDef[] = [
    {
      columnId: 'emailId',
      columnName: 'Email',
    },
    {
      columnId: 'active',
      columnName: 'Status',
      columnFormatter: (status: boolean) => {
        if (status) {
          return 'Active';
        } else {
          return 'Not Ative';
        }
      },
    },
    {
      columnId: 'activeSince',
      columnName: 'Active Since',
      columnFormatter: (dateStr: string) => {
        if (dateStr) {
          return moment(dateStr).format('DD/MM/YYYY');
        }
      }
    },
  ];

  subscriptionData: SubscriptionDataItem[] = [];

  @ViewChild('subscriptionTable') subscriptionTable: DataTableComponent;

  constructor(private spinner: AppSpinnerService, private subscriptionService: SubscriptionApiService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.subscriptionService.getAllSubscription().subscribe(data => {
      if(data) {
        this.subscriptionData = data;
        this.spinner.hide();
      }
    }, error => {
      this.spinner.hide();
    });
  }

  actionCallback(row: AdminFeedbackDataItem): void {
    // console.log('actionCallback: ', row);
  }

  onSearch(event) {
    this.subscriptionTable.onSearch(event.currentTarget.value);
  }
}
