import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterAdminComponent } from './BackOffice/footer-admin/footer-admin.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { SideBarComponent } from './BackOffice/side-bar/side-bar.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { HeaderUserComponent } from './FrontOffice/header-user/header-user.component';
import { FooterUserComponent } from './FrontOffice/footer-user/footer-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { NavBarAdminComponent } from './BackOffice/nav-bar-admin/nav-bar-admin.component';
import { ReservationComponent } from './FrontOffice/reservation/reservation.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileListComponentComponent } from './profile-list-component/profile-list-component.component';
import { ProfileFrontComponent } from './profile-front/profile-front.component';
import { FeedbackBackComponent } from './feedback-back/feedback-back.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { Validators, FormGroup } from '@angular/forms';
import { AllnotComponent } from './BackOffice/allnot/allnot.component';
import { AllresComponent } from './BackOffice/allres/allres.component';
import { EventListComponent } from './FrontOffice/event-list/event-list.component';
import { EvenementBackendComponent } from './FrontOffice/evenement-backend/evenement-backend.component';
import { FormationBackComponent } from './FrontOffice/formation-back/formation-back.component';
import { FormationListComponent } from './FrontOffice/formation-list/formation-list.component';
import { FormationComponent } from './FrontOffice/formation/formation.component';
import { EvenementComponent } from './FrontOffice/evenement/evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterAdminComponent,
    AllTemplateAdminComponent,
    SideBarComponent,
    BodyAdminComponent,
    HeaderUserComponent,
    FooterUserComponent,
    BodyUserComponent,
    AllTemplateUserComponent,
    HomeComponent,
    NavBarAdminComponent,
    SideBarComponent,
    AllTemplateAdminComponent,
    NavBarAdminComponent,
    SideBarComponent,
    BodyAdminComponent,
    FooterAdminComponent,  
    ProfileComponent,
    ProfileListComponentComponent,
    ProfileFrontComponent,
    FeedbackBackComponent,
    StarRatingComponent,
    AllnotComponent,
    AllresComponent,
    ReservationComponent,
    FormationComponent,
    EvenementComponent,
    EventListComponent,
    EvenementBackendComponent,
    FormationBackComponent,
    FormationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
