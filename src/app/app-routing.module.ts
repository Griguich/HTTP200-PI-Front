import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { BoardUserComponent } from './FrontOffice/board-user/board-user.component';
import { BoardWorkerComponent } from './FrontOffice/board-worker/board-worker.component';
import { BoardAdminComponent } from './BackOffice/board-admin/board-admin.component';
import { ProfileComponent } from './BackOffice/profile/profile.component';
import { UserDisplayComponent } from './BackOffice/userCrud/user-display/user-display.component';
import { UserCreateComponent } from './BackOffice/userCrud/user-create/user-create.component';
import { UserUpdateComponent } from './BackOffice/userCrud/user-update/user-update.component';
import { ForgetPasswordComponent } from './FrontOffice/forget-password/forget-password.component';
import { NotFoundComponentComponent } from './FrontOffice/not-found-component/not-found-component.component';
const routes: Routes = [  
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      {
        path: 'home',
        component: BodyUserComponent,
      }, 
      {
        path: 'UpdateAccount',
        component: UserUpdateComponent,
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
  },
  { path: 'login', component: LoginComponent,},
  { path: 'register', component: RegisterComponent,},
  { path: '', redirectTo: 'user/home', pathMatch: 'full' },
  // { path: 'logout', component: ProfileComponent },
  { path: 'home', component: HomeComponent }, // added
  { path: '', redirectTo: 'user/home', pathMatch:'full' },
  { path: 'login', component: LoginComponent,},
  { path: 'register', component: RegisterComponent,},
  { path: 'logout', redirectTo: 'user/home' },
//  { path: 'home', component: HomeComponent }, // added
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardWorkerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'usersList', component: UserDisplayComponent},
  { path: 'usersCreate', component: UserCreateComponent},
  { path: 'usersUpdate', component: UserUpdateComponent}, // To check double user udpate comp
  { path: 'ForgotPassword', component: ForgetPasswordComponent},
  { path: 'UpdateAccount', component: UserUpdateComponent},
  { path: '**', component: NotFoundComponentComponent },

  // to add 404 not found // unauthorized 403 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
