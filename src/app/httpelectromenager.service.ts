import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpelectromenagerService {
url="http://localhost/jsgrid/electromenager/";
  constructor(private http: HttpClient) { }
  getList(){
  return this.http.get(this.url);
  }
}
