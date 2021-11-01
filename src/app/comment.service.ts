import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getAllComments(): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${this.baseUrl}/comment/all`);
  }

  public postComment(comment: Comment): Observable<Comment>{
    return this.httpClient.post<Comment>(`${this.baseUrl}/comment/add`, comment);
  }

  public deleteComment(id:number): Observable<Comment>{
    return this.httpClient.delete<Comment>(`${this.baseUrl}/comment/delete/${id}`);
  }

}
