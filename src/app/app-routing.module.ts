import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MainArticlesComponent}  from './components/main-articles/main-articles.component';
import { CommentsComponent } from './components/comments/comments.component';
const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'main-articles', component:MainArticlesComponent },
  {path: 'comments', component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
