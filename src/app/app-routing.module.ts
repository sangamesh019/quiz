import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginRegComponent } from './component/login-reg/login-reg.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CourcesComponent } from './component/cources/cources.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { MaterialComponent } from './component/material/material.component';
import { QuizComponent } from './component/quiz/quiz.component';

const routes: Routes = [
  { 
    path: '**', 
  component:  HomeComponent
  },
  { 
    path: 'login', 
    component:  LoginRegComponent
  },
  { 
    path: 'home', 
    component:  
    ContactUsComponent},
  { 
    path: 'home', 
    component:  CourcesComponent
  },
  { 
    path: 'home', 
    component:  FeedbackComponent
  },
  { 
    path: 'home', 
    component:  MaterialComponent
  },
  { 
    path: 'home', 
    component:  QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
