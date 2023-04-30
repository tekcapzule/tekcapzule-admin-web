import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from '@app/shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { CapsulesComponent } from './components/capsules/capsules.component';
import { TekByteComponent } from './components/tekbyte/tekbyte.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CreateCapsuleComponent } from './components/create-capsule/create-capsule.component';
import { CreateTekByteComponent } from './components/create-tekbyte/create-tekbyte.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AdminPageComponent,
    CapsulesComponent,
    TekByteComponent,
    FeedbackComponent,
    CreateCapsuleComponent,
    CreateTekByteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,
    SharedModule,
    AdminRoutingModule
  ],
  providers: [
    MessageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AdminModule {}
