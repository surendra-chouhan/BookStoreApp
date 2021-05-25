import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../../Services/adminservice/adminservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public hide = true;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminService: AdminserviceService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });  
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);

      let reqObj = {
        email : this.form.value.email,
        password : this.form.value.password
      }

      let arr= [] as any;
      this.adminService.login(reqObj).subscribe((res)=>{
      console.log(res);
      arr = res;
      localStorage.setItem('access', arr.result.accessToken);
      this.router.navigate(['./dashboard']);
    },(error)=>{
      console.log(error)
    })
  }
  }

  ngOnInit(): void {
  }

}
