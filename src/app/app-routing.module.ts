import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { ReservationComponent } from './Models/reservation/reservation.component';
import { ResComponent } from './FrontOffice/res/res.component';

const routes: Routes = [
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      {
        path: 'home',
        component: BodyUserComponent,
        children: [
          {
            path: 'reservation',
            component: ResComponent
          }
        ]
      }
    ]
  },
  {
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      {path : 'home',
    component : BodyAdminComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
