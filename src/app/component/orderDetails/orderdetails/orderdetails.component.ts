import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  expand = 1;
  expand1 = 0;
  expand2 = 1;

  constructor() { }

  ngOnInit(): void {
  }

  collapse(num){
    this.expand += num;
  }

  collapse2(){
    this.expand1 += this.expand;
    this.expand2 -= 1;
  }
}
