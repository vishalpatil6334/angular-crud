import { AddBookDialogComponent } from './../add-book-dialog/add-book-dialog.component';
import { Book } from './../../models/book.model';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from './../../book.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditBookDialogComponent } from '../edit-book-dialog/edit-book-dialog.component';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
listdata:MatTableDataSource<any>;
displayedColumns : string[]=[ 'subject', 'auther','options'];

  constructor(private service:BookService,
    public dialog:MatDialog) {
      this.service.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshList();
      })
      
    }

  ngOnInit(): void { this.refreshList();
  }
refreshList(){
  this.service.getlink().subscribe(data=>{
    this.listdata=new MatTableDataSource(data);
    
  });
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.listdata.filter = filterValue.trim().toLowerCase();
}

openAddbook(){
  const dialogConfig =new MatDialogConfig();
  dialogConfig.disableClose =true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "70%";
  dialogConfig.height = "90%";
   this.dialog.open(AddBookDialogComponent,dialogConfig)
}

onDelete(id:number){
  if (confirm ('are you sure to delete??')){
    this.service.deleteBook(id).subscribe(res=>{
      this.refreshList();
      alert('teacher deleted successfuly');
    });
  }
  }

  onEdit(row){
    this.service.populateform(row);
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "90%";
    this.dialog.open(EditBookDialogComponent,dialogConfig);
  }
}
