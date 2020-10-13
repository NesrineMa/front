import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpceramicService {
url="http://localhost/jsgrid/ceramic/";
  constructor(private http: HttpClient) { }
  getList(){
  return this.http.get(this.url);
  }
}
