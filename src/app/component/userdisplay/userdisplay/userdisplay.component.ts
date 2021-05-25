import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/Services/adminservice/adminservice.service';

interface Sort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
  bookArray = [] as any;
  message = "done";

  constructor(private admin: AdminserviceService) { }


  sort: Sort[] = [
    { value: 'Low-To-High', viewValue: 'Price: Low to High' },
    { value: 'High-To-Low', viewValue: 'Price: Low to High' },
    { value: 'New', viewValue: 'Newest Arrivals' }
  ];


  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    let arr = [] as any;
    this.admin.getBooks().subscribe((res) => {
      console.log(res);
      arr = res;
      console.log(arr.result);
      this.bookArray = arr.result;
    }, (error) => {
      console.log(error);
    })
  }
}
