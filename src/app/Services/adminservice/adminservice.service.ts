import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../../Services/httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpService: HttpserviceService) { }

  token = localStorage.getItem('access');

  options = {
    headers: new HttpHeaders({
      'x-access-token': this.token ?? "",
      'Content-Type': 'application/json',
      'accept': 'application/json'
    })
  }

  login(data:any){
    return this.httpService.post('admin/login',data, '');
  }

  addBook(data : any){
    return this.httpService.post('admin/add/book',data,this.options);
  }

  getBooks(){
    return this.httpService.get('get/book',this.options);
  }
  
  deletebook(id :any){
    return this.httpService.delete('admin/delete/book/'+id,this.options);
  }
}
