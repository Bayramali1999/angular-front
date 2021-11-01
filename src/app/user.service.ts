import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string = `${environment.baseUrl}/user`

  constructor(private httpCilent: HttpClient) { }

  public getUserByLogin(mLogin: string):Observable<User> {
    return this.httpCilent.get<User>(`${this.userUrl}/login/${mLogin}`)
  }

  public creteUser(user: User): Observable<User> {
    return this.httpCilent.post<User>(`${this.userUrl}/create`, user);
  }

  public deleteUser(id:number): Observable<void>{
    return this.httpCilent.delete<void>(`${this.userUrl}/delete/${id}`);
  }

}
