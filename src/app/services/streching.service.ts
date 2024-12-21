import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Streching } from '../model/streching';

@Injectable({
  providedIn: 'root'
})
export class StrechingService {
  private baseurl = "assets/streching.json";
  private url ="https://sheetdb.io/api/v1/26un9pc321bow";
  constructor(private http:HttpClient) { }
  onSubmit():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}`);
  }
  getAll():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}`);
  }
  getByEmail(email:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/search?email=${email}`);
  }
  addUser(records:Streching):Observable<any>{
    return this.http.post<any>(this.url,{data:records});
  }
  deleteUser(id:number):Observable<any[]>{
    return this.http.delete<any[]>(`${this.url}/id/${id}`)
  }
  updateUser(id:number,record:StrechingService):Observable<any[]>{
    return this.http.put<any[]>(`${this.url}/id/${id}`,{data:record})
  }
  loginUser(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.url}/search?email=${email}&password=${password}`);
  }
  
}
