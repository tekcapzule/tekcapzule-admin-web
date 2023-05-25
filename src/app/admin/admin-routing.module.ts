import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './admin-page.component';
import { CapsulesComponent } from './components/capsules/capsules.component';
import { CreateCapsuleComponent } from './components/create-capsule/create-capsule.component';
//import { CreateQuestionsComponent } from './components/create-questions/create-questions.component';
import { CreateTekByteComponent } from './components/create-tekbyte/create-tekbyte.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TekByteComponent } from './components/tekbyte/tekbyte.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      {
        path: 'capsules',
        component: CapsulesComponent,
      },
      {
        path: 'tekbyte',
        component: TekByteComponent,
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
      },
      {
        path: 'capsule/createcapsule',
        component: CreateCapsuleComponent,
      },
      {
        path: 'capsule/editcapsule',
        component: CreateCapsuleComponent,
      },
      {
        path: 'subscription',
        component: SubscriptionComponent,
      },
      {
        path: 'tekbyte/createtekbyte',
        component: CreateTekByteComponent,
      },
      {
        path: 'tekbyte/edittekbyte',
        component: CreateTekByteComponent,
      },
      {
        path: '',
        redirectTo: 'capsules',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'capsules',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
