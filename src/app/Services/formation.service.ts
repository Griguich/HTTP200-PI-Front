import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Formation } from '../Models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private baseUrl = 'http://localhost:8080/api/formation/';
  constructor(private http: HttpClient) { }
  

  addFormation(formation: Formation): Observable<any> {
    const url = `${this.baseUrl}addFormation`;
    return this.http.post(url, formation);
  }
  updateFormation(formation: Formation): Observable<any> {
    const url = `${this.baseUrl}updateFormation`;
    const headers = { 'Content-Type': 'application/json' };

    return this.http.put(url, formation, { headers });
  }

  getAllFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.baseUrl}listFormation`);
  }

  deleteFormation(idFormation: number): Observable<any> {
    const url = `${this.baseUrl}deleteFormation/${idFormation}`;
    return this.http.delete(url);
  }

  
}
