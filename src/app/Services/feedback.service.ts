import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { } 
  private endpoint = 'http://localhost:8080/api';

getFeedbacks(): Observable<any> {
  const url = `${this.endpoint}/Feedbacks`;
  return this.http.get(url);
}

addFeedback(Feedback: any): Observable<any> {
  const url = `${this.endpoint}/addFeedback`;
  return this.http.post(url, Feedback);
}
updateFeedback(feedback: any): Observable<any> {
  const url = `${this.endpoint}/updateFeedback`;
  return this.http.put(url, feedback);
}

deleteFeedback(id: number): Observable<any> {
  const url = `${this.endpoint}/deleteFeedback/${id}`;
  return this.http.delete(url);
}
}
