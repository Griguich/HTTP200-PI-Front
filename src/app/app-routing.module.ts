import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { ReservationComponent } from './FrontOffice/reservation/reservation.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponentComponent } from './profile-list-component/profile-list-component.component';
import { ProfileFrontComponent } from './profile-front/profile-front.component';

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
    {path : 'profile/add-profile',
    component : ProfileComponent}, 
    ]
  },
  {
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      {path : 'profile/update-profile',
      component : ProfileListComponentComponent}, 
      ]
  },
  {
  path: 'user',
  component: AllTemplateUserComponent,
  children: [
    {path : 'profile/display',
    component : ProfileFrontComponent}, 
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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
