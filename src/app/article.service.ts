import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './models/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
private apiServiceUrl = environment.baseUrl;
  constructor(private http:HttpClient) {
   }
   public getAllArticles(): Observable<Article[]> {
     return this.http.get<Article[]>(`${this.apiServiceUrl}/article/all`);
   }

   public addArticle(article:Article): Observable<Article>{
     return this.http.post<Article>(`${this.apiServiceUrl}/article/add`, article);
   }

   public updateArticle(article:Article): Observable<Article> {
     return this.http.put<Article>(`${this.apiServiceUrl}/article/update`, article);
   }

   public deleteArticle(artId:number): Observable<void>{
     return this.http.delete<void>(`${this.apiServiceUrl}/article/delete/${artId}`);
   }
}
