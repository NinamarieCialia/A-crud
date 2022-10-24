import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: '',
component:HomeComponent},
  { path: 'view', 
  component: ViewComponent
},
{
  path: '**',
  component:PagenotfoundComponent
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
