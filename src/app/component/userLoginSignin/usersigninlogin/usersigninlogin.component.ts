import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../../../Services/userservice/userservice.service';


@Component({
  selector: 'app-usersigninlogin',
  templateUrl: './usersigninlogin.component.html',
  styleUrls: ['./usersigninlogin.component.css']
})
export class UsersigninloginComponent implements OnInit {
  hide = true;
  form : FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserserviceService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });  
  }

  ngOnInit(): void {
  }

  register(){
    if(this.form.valid){
      console.log(this.form.value);

      let reqObj = {
        fullName : this.form.value.fullName,
        email : this.form.value.email,
        password : this.form.value.password,
        phone : this.form.value.phoneNumber
      }

      this.userService.signup(reqObj).subscribe((res) => {
        console.log(res);

        this.router.navigate(['./usersigninlogin']);
      }, (error) => {
        console.log(error);
      })
    }
  }

  login(){
    if(this.form.valid){
      console.log(this.form.value);
    }
      let reqObj = {
        email : this.form.value.email,
        password : this.form.value.password
      }

      this.userService.login(reqObj).subscribe((res) => {
        console.log(res);

        this.router.navigate(['/userdashboard']);
      }, (error) => {
        console.log(error);
      })
    
  }

}
