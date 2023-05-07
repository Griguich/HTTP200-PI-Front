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
import { ResComponent } from './FrontOffice/res/res.component';
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


import { HttpClientModule,HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AddPublicationComponent } from './add-publication/add-publication.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';

import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



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
    ListOrderComponent,
    OrdersComponent,
    ProductViewDtoComponent,
    Order1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule, MatMenuModule,
    CommonModule,


  ],
  providers: [OrderService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

