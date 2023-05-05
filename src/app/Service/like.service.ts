import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Like } from '../Models/like';
import { Observable } from 'rxjs';
import { LikeType } from '../Models/likeType';


@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private baseUrl = 'http://localhost:8080/api/likes';

  constructor(private http: HttpClient) { }

  toggleLikesP(idPub: number, likeType: LikeType, idUser: number): Observable<Like> {
    return this.http.post<Like>(`${this.baseUrl}/ToggleLikesP/${idPub}/${idUser}?likeType=${likeType}`, null);
  }
  
  toggleLikesC(idComm: number, likeType: LikeType, idUser: number): Observable<Like> {
    return this.http.post<Like>(`${this.baseUrl}/ToggleLikesC/${idComm}/${idUser}?likeType=${likeType}`, null);
  }
  
}
