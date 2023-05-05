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
import { ResComponent } from './FrontOffice/res/res.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AddPublicationComponent } from './add-publication/add-publication.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';


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
    ResComponent,
    AddPublicationComponent,
    AddCommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
