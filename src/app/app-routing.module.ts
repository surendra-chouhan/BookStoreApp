import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './component/adminLogin/admin-login/admin-login.component';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "login",
  //   pathMatch: "full"
  // },
  {
    path: 'login',
    component: AdminLoginComponent
  }
  // {
  //   path: "**",
  //   redirectTo: "reset-password",
  //   pathMatch: "full"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
