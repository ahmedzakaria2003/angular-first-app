import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PortofilioComponent } from './portofilio/portofilio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [  {path:'',redirectTo:'home',pathMatch:'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path:'portfolio',component: PortofilioComponent, title: 'Portfolio'},
    {path:'contact',component: ContactComponent, title: 'Contact'},
    {path:'**', component:NotFoundComponent, title: 'Not Found'},];
