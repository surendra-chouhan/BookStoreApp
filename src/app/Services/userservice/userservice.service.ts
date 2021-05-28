import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../../Services/httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService: HttpserviceService) { }

  token = localStorage.getItem('access');

  options = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json',
      'accept': 'application/json'
    })
  }

  signup(data : any){
    return this.httpService.post('registration', data, '');
  }

  login(data : any){
    return this.httpService.post('login', data, '');
  }

  addBookToCart(id : any, data : any){
    return this.httpService.post('add_cart_item/' + id, data, this.options);
  }

  getBookFromCart(){
    return this.httpService.get('get_cart_items', this.options);
  }

  addBookToWishlist(id : any, data : any){
    return this.httpService.post('add_wish_list/' + id, data, this.options);
  }
}
