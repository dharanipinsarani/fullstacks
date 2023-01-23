import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { ReferenceComponent } from './reference/reference.component';

const routes: Routes = [{
  path : '',
  component:HomeComponent
  
 },
{
  path : 'about',
  component:AboutComponent

 },
{
  path : 'reference',
  component:ReferenceComponent
 },
{
  path : 'client',
  component:ClientComponent

 },
{
  path : 'contact',
  component:ContactComponent

 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
