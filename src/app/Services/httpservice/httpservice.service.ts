import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseurl=environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  post(url:any,data:any){
    return this.http.post(this.baseurl+url,data);
    
  }
}
