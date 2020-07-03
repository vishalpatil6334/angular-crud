import { BookService } from './../../book.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css']
})
export class AddBookDialogComponent implements OnInit {
  constructor( public service:BookService,
    public dialogbox : MatDialogRef<AddBookDialogComponent>,) { }

  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
    this.service.initilizeFormGroup();
    
  }
  onClose(){
    this.service.form.reset();
    this.service.initilizeFormGroup();
    this.dialogbox.close();
    this.service.filter('register click')
  
   }

   onSubmit(){
     if (this.service.form.valid){
       this.service.createBook(this.service.form.value).subscribe(data=>
        {
          console.log(data);
      
       this.service.form.reset();
       alert("Added success fully");
       this.service.initilizeFormGroup();
       this.onClose(); 
        });
     }
   }
}
