import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
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
import { ObservablesComponent } from './observables/observables.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Testdata } from './observables/testdata';

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
    Compo2Component,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Testdata)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
