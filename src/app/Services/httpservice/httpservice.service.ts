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

  post(url:any,data:any,token:any){
    console.log(url, " http service");
    return this.http.post(this.baseurl+url,data,token);
  }

  get(url:any,token:any){
    return this.http.get(this.baseurl+url,token);  
  }

  delete(url:any,token:any){
    return this.http.delete(this.baseurl+url,token);
  }
}
