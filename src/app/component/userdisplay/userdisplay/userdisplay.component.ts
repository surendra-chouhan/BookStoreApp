import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/Services/adminservice/adminservice.service';
import { UserserviceService } from 'src/app/Services/userservice/userservice.service';

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

  constructor(private admin: AdminserviceService, private user: UserserviceService) { }


  sort: Sort[] = [
    { value: 'Low-To-High', viewValue: 'Price: Low to High' },
    { value: 'High-To-Low', viewValue: 'Price: High to Low' },
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

  addToCart(data){
    console.log(data);
    let bookID = data._id;

    let reqObj = {
    }
    console.log(bookID);

    this.user.addBookToCart(bookID,reqObj).subscribe((res) => {
      console.log(res);
    },(error) => {
      console.log(error);
    })
  }

  addToWishlist(data){
    console.log(data);
    let bookID = data._id;

    let reqObj = {
    }
    console.log(bookID);

    this.user.addBookToWishlist(bookID,reqObj).subscribe((res) => {
      console.log(res);
    },(error) => {
      console.log(error);
    })
  }
}
