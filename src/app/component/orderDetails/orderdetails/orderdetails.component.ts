import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/Services/userservice/userservice.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  expand = 1;
  expand1 = 0;
  expand2 = 1;

  constructor(private userService : UserserviceService) { }

  bookArray = [] as any;
  size_of_cartItems;

  ngOnInit(): void {
    this.displayCartItems();
  }

  collapse(num){
    this.expand += num;
  }

  collapse2(){
    this.expand1 += this.expand;
    this.expand2 -= 1;
  }

  displayCartItems(){
    let arr = [] as any;
    this.userService.getBookFromCart().subscribe((res) => {
      console.log(res);
      arr = res;
      console.log(arr.result);
      this.bookArray = arr.result;
      this.size_of_cartItems = arr.result.length;
    }, (error) => {
      console.log(error);
    })
  }
}
