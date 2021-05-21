import { Injectable } from '@angular/core';
import { HttpserviceService } from '../../Services/httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpService: HttpserviceService) { }

  login(data:any){
    return this.httpService.post('admin/login',data);
  }
}
