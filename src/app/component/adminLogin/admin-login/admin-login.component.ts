import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminserviceService } from '../../../Services/adminservice/adminservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public hide = true;
  form: FormGroup;

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   if(this.password.hasError('required')){
  //     return 'You must enter a value';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  constructor(private formBuilder: FormBuilder, private adminService: AdminserviceService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });  
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);

      let reqObj = {
        email : "bookstore@admin.com",
        password : "Xyz@123"
      }

    this.adminService.login(reqObj).subscribe((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    })
  }
  }

  // login(data:any){
  //   return this.httpService.post('admin/login',data);
  // }

  ngOnInit(): void {
  }

}
