import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../Models/Feedback';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { } 
  private endpoint = 'http://localhost:8080/api';

getProfiles(): Observable<any> {
  const url = `${this.endpoint}/Profiles`;
  return this.http.get(url);
}

addProfile(profile: any): Observable<any> {
  const url = `${this.endpoint}/addProfile`;
  return this.http.post(url, profile);
}
updateProfile(profile: any): Observable<any> {
  const url = `${this.endpoint}/updateProfile`;
  return this.http.put(url, profile);
}

deleteProfile(id: number): Observable<any> {
  const url = `${this.endpoint}/deleteProfile/${id}`;
  return this.http.delete(url);
}
deleteFeedback(id: number): Observable<any> {
  const url = `${this.endpoint}/deleteFeedback/${id}`;
  return this.http.delete(url);
}

updateFeedback(feedback: Feedback): Observable<any> {
  const url = `${this.endpoint}/updateFeedback`;
  return this.http.put(url, feedback);
}

}
