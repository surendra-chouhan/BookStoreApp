import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/Services/userservice/userservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  form : FormGroup;
  expand = 1;
  expand1 = 0;
  expand2 = 1;

  constructor(private formBuilder: FormBuilder, private userService : UserserviceService, private snackbar : MatSnackBar, private router : Router) {
    this.form = this.formBuilder.group({

      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      pin: ['', [Validators.required]],
      locality: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
   }

  bookArray = [] as any;
  size_of_cartItems;

  ngOnInit(): void {
    this.displayCartItems();
  }

  collapse(num){
    this.expand += num;
  }

  // collapse2(){
  //   this.expand1 += this.expand;
  //   this.expand2 -= 1;
  // }

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

  deleteBookFromCart(data : any){
    console.log(data);
    let id = data._id;

    this.userService.deleteItemFromCart(id).subscribe((res : any) => {
      console.log(res);
      this.displayCartItems();
      this.snackbar.open(res.message, "Close");
    }, (error) => {
      console.log(error);
    })
  }

  editOrderDetails(){
    this.expand1 += this.expand;
    this.expand2 -= 1;

    if (this.form.valid) {
      console.log(this.form.value);

      let reqObj = {
        addressType: this.form.value.type,
        fullAddress: this.form.value.address,
        city: this.form.value.city,
        state: this.form.value.state
      }

      console.log(reqObj);
      this.userService.editDetails(reqObj).subscribe((res) => {
        console.log(res);
      }, (error) =>  {
        console.log(error);
      })
    }  
  }

  ordersummary(){
    for(let cart of this.bookArray){
      let reqObject = {
        orders: [
          {
            product_id: cart._id,
            product_name: cart.bookName,
            product_quantity: cart.quantity,
            product_price: cart.price
          }
        ]
      }

      console.log(reqObject)
      this.userService.addOrder(reqObject).subscribe((res) => {
        console.log(res)
        this.router.navigate(['/orderplaced'])
      },(error) => {
        console.log(error)
      })
    }

  }
}
