import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { DistrictPagesComponent } from './pages/district-pages/district-pages.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SignupPagesComponent } from './pages/signup-pages/signup-pages.component';

const routes: Routes = [
  {
    path:'Home',component: HomePagesComponent
  },
{
    path:'Contact',component:ContactPagesComponent
  },
{
    path:'Signup',component:SignupPagesComponent
  },
  {
    path:'District',component:DistrictPagesComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
