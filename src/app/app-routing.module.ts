import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './component/adminLogin/admin-login/admin-login.component';
import { HeaderComponent } from './component/header/header/header.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { AdminDashboardComponent } from './component/adminDashboard/admin-dashboard/admin-dashboard.component'
import { UserdashboardComponent } from './component/userdashboard/userdashboard/userdashboard.component';
import { OrderplacedComponent } from './component/orderPlaced/orderplaced/orderplaced.component';
import { OrderdetailsComponent } from './component/orderDetails/orderdetails/orderdetails.component';
import { UsersigninloginComponent } from './component/userLoginSignin/usersigninlogin/usersigninlogin.component';

const routes: Routes = [
  {
    path : "",
    redirectTo: "userdashboard",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: AdminLoginComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'userdashboard',
    component: UserdashboardComponent
  },
  {
    path: 'orderplaced',
    component: OrderplacedComponent
  },
  {
    path: 'orderdetails',
    component: OrderdetailsComponent
  },
  {
    path: 'usersigninlogin',
    component: UsersigninloginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
