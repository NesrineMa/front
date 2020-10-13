import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttptextilesService {
  url="http://localhost/jsgrid/textiles/";
  constructor(private http: HttpClient) { }
  getList(){
  return this.http.get(this.url);
  }
}
