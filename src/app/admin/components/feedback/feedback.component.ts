import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnDef } from '@app/shared/models';
import { AdminFeedbackDataItem } from '@app/admin/models';
import { DataTableComponent } from '@app/shared/components/data-table/data-table.component';
import { AppSpinnerService, FeedbackApiService } from '@app/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  feedbackColumns: ColumnDef[] = [
    {
      columnId: 'firstName',
      columnName: 'First Name',
      clazz: ['title-column'],
    },
    {
      columnId: 'lastName',
      columnName: 'Last Name',
      clazz: ['title-column'],
    },
    {
      columnId: 'email',
      columnName: 'Email',
    },
    {
      columnId: 'subject',
      columnName: 'Subject',
    },
    {
      columnId: 'action',
      columnName: 'Action',
      clazz: ['action-column'],
      actionItems: [
        {
          actionId: 'email',
          iconUrl: '/assets/images/mail.svg',
          actionCallback: this.actionCallback,
        },
      ],
    },
  ];

  feedbackData: AdminFeedbackDataItem[] = [];

  @ViewChild('feedbackTable') feedbackTable: DataTableComponent;

  constructor(private spinner: AppSpinnerService, private feedbackService: FeedbackApiService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.feedbackService.getAllFeedback().subscribe(data => {
      if(data) {
        this.feedbackData = data;
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
    this.feedbackTable.onSearch(event.currentTarget.value);
  }
}
