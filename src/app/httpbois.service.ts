import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpboisService {
url="http://localhost/jsgrid/profil/";
  constructor(private http: HttpClient) { }
  getList(){
  return this.http.get(this.url);
  }
}
