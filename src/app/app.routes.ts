import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to 'home'
  { path: 'home', component: HomeComponent }, // Home page
  { path: 'about', component: AboutComponent }, // About page
  { path: 'contact', component: ContactComponent }, // Contact page
  { path: 'login', component: LoginComponent }, // Login/Signup page
  { path: '**', redirectTo: 'home' } // Redirect unknown routes to home
];
