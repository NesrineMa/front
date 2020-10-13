import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpcuirService {
url="http://localhost/jsgrid/cuir/";
  constructor(private http: HttpClient) { }
  getList(){
  return this.http.get(this.url);
  }
}
