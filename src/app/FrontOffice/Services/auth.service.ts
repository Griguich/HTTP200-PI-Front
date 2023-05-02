import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

 //Cruds
 public getAllUsers(): Observable<any>{
  return this.http.get(`${AUTH_API}allUsers`)
}

editUser(user: any){
  return this.http.put(`${AUTH_API}updateUser/`,user)
}
deleteUser(idUser: any){
  return this.http.delete(`${AUTH_API}delUser/${idUser}`)
}

public addUser(user :User):Observable<any>{
  return this.http.post<any>("http://localhost:8080/api/auth/addUser",user)

}
public lockUser(user: any):Observable<any>{
  return this.http.put(`${AUTH_API}/activateUser/`,user)

} 
updatePassword(email: string, password: string) {
  return this.http.put('http://localhost:8090/user/updatepassword/' + email + '/' + password , { responseType: 'text' });
}
forgotPassword(email: string) {
  return this.http.get('http://localhost:8090/user/sendme/' + email);
}

}