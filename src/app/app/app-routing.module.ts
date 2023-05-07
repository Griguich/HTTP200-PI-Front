import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { OrdersComponent } from './BackOffice/components/order.component';
import { HttpClientModule } from '@angular/common/http';
import { Order1Component } from './FrontOffice/Components1/order/orders.component1';
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
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      {path : 'home',
    component : BodyAdminComponent}
    ]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    children: [
      {path : 'home',
    component : BodyUserComponent},
    ]
    
  },
  {
    path: 'client',
    component: Order1Component,
    children: [
      {path : 'home',
    component : BodyUserComponent}
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
