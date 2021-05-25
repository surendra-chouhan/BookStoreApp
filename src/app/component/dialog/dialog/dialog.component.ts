import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'src/app/Services/adminservice/adminservice.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private adminService: AdminserviceService) {

    this.form = this.formBuilder.group({

      bookName: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discount: ['', [Validators.required]]
    });
  }

  addBook() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
    let reqObj = {
      bookName: this.form.value.bookName,
      author: this.form.value.author,
      description: this.form.value.description,
      quantity: this.form.value.quantity,
      price: this.form.value.price,
      discountPrice: this.form.value.discount
    }

    console.log(reqObj)
    this.adminService.addBook(reqObj).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }
  ngOnInit(): void {
  }

}
