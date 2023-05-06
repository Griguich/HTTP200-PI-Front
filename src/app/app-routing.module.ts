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
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { AllnotComponent } from './BackOffice/allnot/allnot.component';
import { AllresComponent } from './BackOffice/allres/allres.component';
import { ChatComponent } from './FrontOffice/chat-message/chat-message.component';
import { EventListComponent } from './FrontOffice/event-list/event-list.component';
import { FormationComponent } from './FrontOffice/formation/formation.component';
import { FormationListComponent } from './FrontOffice/formation-list/formation-list.component';
import { EvenementComponent } from './FrontOffice/evenement/evenement.component';
import { EvenementBackendComponent } from './FrontOffice/evenement-backend/evenement-backend.component';
import { FormationBackComponent } from './FrontOffice/formation-back/formation-back.component';

const routes: Routes = [
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      { path: 'home', component: BodyUserComponent },
      { path: 'profile/add-profile', component: ProfileComponent },
      { path: 'profile/display', component: ProfileFrontComponent },
      { path: 'reservation', component: ReservationComponent },
      { path: 'not', component: NotificationPopupComponent },
      { path: 'chat', component: ChatComponent },
      { path : 'eventlist', component : EventListComponent},
      { path : 'formationAdd', component : FormationComponent},
      {path : 'formationlist', component : FormationListComponent  },
      {path : 'evenement', component : EvenementComponent},



    ]
  },
  {
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      { path: 'profile/update-profile', component: ProfileListComponentComponent },
      { path: 'home', component: BodyAdminComponent },
      { path: 'allnot', component: AllnotComponent },
      { path: 'allres', component: AllresComponent },
      { path : 'evenementbackend', component : EvenementBackendComponent},
      { path : 'formationbackend',   component : FormationBackComponent}
    ]
  }  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
