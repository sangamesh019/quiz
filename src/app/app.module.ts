import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { LoginRegComponent } from './component/login-reg/login-reg.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { MaterialComponent } from './component/material/material.component';
import { CourcesComponent } from './component/cources/cources.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    LoginRegComponent,
    ContactUsComponent,
    FeedbackComponent,
    MaterialComponent,
    CourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
