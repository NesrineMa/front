import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpchimiqueService {
url="http://localhost/jsgrid/chimique/";
  constructor(private http: HttpClient) { }
  getList(){
  return this.http.get(this.url);
  }
}
