import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { ReservationComponent } from './FrontOffice/reservation/reservation.component';
import { AllresComponent } from './BackOffice/allres/allres.component';
import { ChatComponent } from './FrontOffice/chat-message/chat-message.component';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AllnotComponent } from './BackOffice/allnot/allnot.component';


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
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
    {path : 'chat',
    component : ChatComponent},
    ]
  },
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
    {path : 'not',
    component : NotificationPopupComponent},
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
  },

  {
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      {path : 'allnot',
    component : AllnotComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule,
    ToastrModule.forRoot()],
    providers: [ToastrService],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppRoutingModule { }
