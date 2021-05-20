import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AdminLoginComponent } from './component/adminLogin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './component/adminDashboard/admin-dashboard/admin-dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './component/header/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './component/footer/footer/footer.component';
import { AddbookComponent } from './component/addBook/addbook/addbook.component';
import { DeleteBookComponent } from './component/deleteBook/delete-book/delete-book.component';
import { DisplayComponent } from './component/display/display/display.component';
import { UpdateBookComponent } from './component/updateBook/update-book/update-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddbookComponent,
    DeleteBookComponent,
    DisplayComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
