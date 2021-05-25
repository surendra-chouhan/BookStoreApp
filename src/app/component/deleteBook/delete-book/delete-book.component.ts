import { Component, Input, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/Services/adminservice/adminservice.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private adminService: AdminserviceService) { }

  @Input() bookArray = [] as any;

  deleteBook( ) {
    console.log(this.bookArray);
    let id = this.bookArray._id;
    this.adminService.deletebook(id).subscribe((res)=>{
      console.log(res);
      
    },(error)=> {
      console.log(error)
    })
  }
  ngOnInit(): void {
  }

}
