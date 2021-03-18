import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootuserService {

  readonly baseURL = 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.baseURL+"/root/getlist");
  }
  promoteUser(item){
    return this.http.post(this.baseURL+'/root/promote',item);
  }
  demoteUser(item){
    return this.http.post(this.baseURL+'/root/demote',item);
  }

}
