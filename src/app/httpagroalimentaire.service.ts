import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpagroalimentaireService {
url="http://localhost/jsgrid/agroalimentaire/";
  constructor(private http: HttpClient) { }
  getList(){
  return this.http.get(this.url);
  }
}
