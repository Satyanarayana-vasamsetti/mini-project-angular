import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { StrechingComponent } from './streching/streching.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'streching',component:StrechingComponent},
  {path:'**',component:PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
