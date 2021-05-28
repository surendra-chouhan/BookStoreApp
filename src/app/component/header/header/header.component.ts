import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersigninloginComponent } from '../../userLoginSignin/usersigninlogin/usersigninlogin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog : MatDialog, private router : Router) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(UsersigninloginComponent);
  }

  routeToDashboard(){
    this.router.navigate(['/userdashboard']);
  }

  routeToCart(){
    this.router.navigate(['/orderdetails']);
  }

}
