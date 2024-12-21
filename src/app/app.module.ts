import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { SliderComponent } from './slider/slider.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { StrechingComponent } from './streching/streching.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';
import { FlexibilityComponent } from './flexibility/flexibility.component';
import { MeditationComponent } from './meditation/meditation.component';
import {HttpClientModule} from '@angular/common/http';
import { TrainingcourseComponent } from './trainingcourse/trainingcourse.component';
import { KidscourseComponent } from './kidscourse/kidscourse.component';
import { YinyangComponent } from './yinyang/yinyang.component';
import { PranayamaComponent } from './pranayama/pranayama.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    BannerComponent,
    CardsComponent,
    SliderComponent,
    FaqsComponent,
    FooterComponent,
    ContactComponent,
    StrechingComponent,
    AboutusComponent,
    ProfileComponent,
    FlexibilityComponent,
    MeditationComponent,
    TrainingcourseComponent,
    KidscourseComponent,
    YinyangComponent,
    PranayamaComponent,
    LoginComponent,
    ContactUsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
