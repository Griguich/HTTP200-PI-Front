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
import { PublicationComponent } from './publication/publication.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


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
    PublicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
