import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { ReservationComponent } from './FrontOffice/reservation/reservation.component';
import { AllresComponent } from './BackOffice/all-template-admin/allres/allres.component';

const routes: Routes = [
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
    {path : 'home',
    component : BodyUserComponent},
    ]
  },
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
    {path : 'reservation',
    component : ReservationComponent},
    ]
  },
  {
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      {path : 'home',
    component : BodyAdminComponent}
    ]
  },
  {
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      {path : 'allres',
    component : AllresComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
