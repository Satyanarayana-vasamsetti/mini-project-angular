import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { StrechingComponent } from './streching/streching.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';
import { FlexibilityComponent } from './flexibility/flexibility.component';
import { MeditationComponent } from './meditation/meditation.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:WelcomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'profile',component:ProfileComponent},
  {path:'streching',component:StrechingComponent},
  {path:'flexibility',component:FlexibilityComponent},
  {path:'meditation',component:MeditationComponent},
  {path:'**',component:PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
