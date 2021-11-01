import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainArticlesComponent } from './components/main-articles/main-articles.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ArticleService } from './article.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { CommentService } from './comment.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainArticlesComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticleService, UserService,DataService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
