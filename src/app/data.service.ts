import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Article } from './models/article';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subjectUser = new Subject<User>();
  private subjectArticle = new Subject<Article>();

  constructor() { }

  public saveUser(user:User): void {
    this.subjectUser.next(user);
  }
  public getUser() : Observable<User> {
    return this.subjectUser.asObservable();
  }

  public saveArticle(article:Article): void {
    this.subjectArticle.next(article);
  }

  public getArticle(): Observable<Article> {
    return this.subjectArticle.asObservable();
  }
}
