import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../../Services/httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService: HttpserviceService) { }

  signup(data : any){
    return this.httpService.post('registration', data, '');
  }

  login(data : any){
    return this.httpService.post('login', data, '');
  }
}
