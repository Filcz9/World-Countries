import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContinentsListComponent } from './continents-list/continents-list.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Authentication } from './authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsListComponent,
    CountriesListComponent,
    CountryDetailsComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [Authentication],
  bootstrap: [AppComponent]
})
export class AppModule { }
