import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MarchentComponent } from './marchent/marchent.component';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { BookComponent } from './book/book.component';
import { DetailsComponent } from './book/details/details.component';
import { MaincompComponent } from './datapassing/maincomp/maincomp.component';
import { Compo2Component } from './datapassing/compo2/compo2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MarchentComponent,
    CustomerComponent,
    AddcustomerComponent,
    EditcustomerComponent,
    BookComponent,
    DetailsComponent,
    MaincompComponent,
    Compo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
