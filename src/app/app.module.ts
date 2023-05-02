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
import { LoginComponent } from './FrontOffice/login/login.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './FrontOffice/_helpers/http.interceptor';
import { BoardAdminComponent } from './BackOffice/board-admin/board-admin.component';
import { ProfileComponent } from './BackOffice/profile/profile.component';
import { BoardUserComponent } from './FrontOffice/board-user/board-user.component';
import { BoardWorkerComponent } from './FrontOffice/board-worker/board-worker.component';
import { ForgetPasswordComponent } from './FrontOffice/forget-password/forget-password.component';
import { UserCreateComponent } from './BackOffice/userCrud/user-create/user-create.component';
import { UserDisplayComponent } from './BackOffice/userCrud/user-display/user-display.component';
import { UserUpdateComponent } from './BackOffice/userCrud/user-update/user-update.component';

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
    LoginComponent,
    RegisterComponent,
    BoardAdminComponent,
    ProfileComponent,
    BoardUserComponent,
    BoardWorkerComponent,
    ForgetPasswordComponent,
    UserCreateComponent,
    UserDisplayComponent,
    UserUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
