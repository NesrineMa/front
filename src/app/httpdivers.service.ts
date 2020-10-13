import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpdiversService {
url="http://localhost/jsgrid/divers/";
  constructor(private http: HttpClient) { }
  getList(){
  return this.http.get(this.url);
  }
}
