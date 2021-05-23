import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog/dialog.component';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private matdialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.matdialog.open(DialogComponent);
  }
}
