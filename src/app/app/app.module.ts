import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { FooterAdminComponent } from './BackOffice/footer-admin/footer-admin.component';
import { ListOrderComponent } from './BackOffice/list-order/list-order.component';
import { NavBarAdminComponent } from './BackOffice/nav-bar-admin/nav-bar-admin.component';
import { SideBarComponent } from './BackOffice/side-bar/side-bar.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { FooterUserComponent } from './FrontOffice/footer-user/footer-user.component';
import { HeaderUserComponent } from './FrontOffice/header-user/header-user.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { OrdersComponent } from './BackOffice/components/order.component';
import { OrderService } from './FrontOffice/Service/order.service';
import { ProductViewDtoComponent } from './product-view-dto/product-view-dto.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Order1Component } from './FrontOffice/Components1/order/orders.component1';
import { AppComponent } from './app.component';
import { loadStripe } from '@stripe/stripe-js';

import { MatMenuModule } from '@angular/material/menu';


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
    ListOrderComponent,
    OrdersComponent,
    ProductViewDtoComponent,
    Order1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule, MatMenuModule,
    CommonModule,


  ],
  providers: [OrderService, CurrencyPipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
