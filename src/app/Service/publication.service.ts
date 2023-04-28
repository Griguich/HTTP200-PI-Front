import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../Models/publication';
import { map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseUrl = 'http://localhost:8080/api/publications';

  constructor(private http: HttpClient) { }

  addPublication(publication: Publication, userId: number): Observable<Publication> {
    return this.http.post<Publication>(`${this.baseUrl}/AddPublication/${userId}`, publication);
  }

  updatePublication(idPub: number, publication: Publication): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdatePublication/${idPub}`, publication, { responseType: 'text' });
  }

  getPublicationById(idPub: number): Observable<Publication> {
    return this.http.get<Publication>(`${this.baseUrl}/GetPublicationByID/${idPub}`);
  }

  getAllPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.baseUrl}/GetAllPublication`);
  }

  deletePublication(idPub: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeletePublication/${idPub}`, { responseType: 'text' });
  }

  getPublicationsByUserId(userId: number): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.baseUrl}/RetrievePublicationUserById/${userId}`);
  }

  
}
