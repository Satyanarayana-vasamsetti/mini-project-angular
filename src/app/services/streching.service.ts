import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StrechingService {
  private baseurl = "assets/streching.json";
  constructor(private http:HttpClient) { }
  onSubmit():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`);
  }
}
