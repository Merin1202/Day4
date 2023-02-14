import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { DistrictPagesComponent } from './pages/district-pages/district-pages.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { SignupPagesComponent } from './pages/signup-pages/signup-pages.component';
import { NavbarComponent } from './utilities/navbar/navbar.component';
import { FooterComponent } from './utilities/footer/footer.component';
import { SinglePagesComponent } from './pages/single-pages/single-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    DistrictPagesComponent,
    ContactPagesComponent,
    SignupPagesComponent,
    NavbarComponent,
    FooterComponent,
    SinglePagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
