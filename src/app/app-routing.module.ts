import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '',  component: HomeComponent, },
  { path: 'about',  component: AboutComponent, },
  { path: 'work', component: WorksComponent, },
  { path: 'contact', component: ContactComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
