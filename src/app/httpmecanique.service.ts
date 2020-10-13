import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpmecaniqueService {
url="http://localhost/jsgrid/mecanique/";
  constructor(private http: HttpClient) { }
  getList(){
  return this.http.get(this.url);
  }
}
