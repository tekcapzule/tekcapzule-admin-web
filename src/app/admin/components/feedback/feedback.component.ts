import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnDef } from '@app/shared/models';
import { AdminFeedbackDataItem } from '@app/admin/models';
import { DataTableComponent } from '@app/shared/components/data-table/data-table.component';

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

  feedbackData: AdminFeedbackDataItem[] = [
    {
      firstName: 'Akhil',
      lastName: 'PB',
      email: 'akhilpb@apache.org',
      subject: 'Tekcapsule Team',
    },
    {
      firstName: 'Linjith',
      lastName: 'Kunnon',
      email: 'linjithkunnon@gmail.com',
      subject: 'Tekcapsule Team',
    },
  ];

  @ViewChild('feedbackTable') feedbackTable: DataTableComponent;

  constructor() {}

  ngOnInit(): void {}

  actionCallback(row: AdminFeedbackDataItem): void {
    // console.log('actionCallback: ', row);
  }

  onSearch(event) {
    this.feedbackTable.onSearch(event.currentTarget.value);
  }
}
