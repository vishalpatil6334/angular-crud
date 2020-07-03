import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-book-dialog',
  templateUrl: './edit-book-dialog.component.html',
  styleUrls: ['./edit-book-dialog.component.css']
})
export class EditBookDialogComponent implements OnInit {

  constructor( public service:BookService,
    public dialogbox : MatDialogRef<EditBookDialogComponent>,) { }

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
       this.service.updateBook(this.service.form.value).subscribe(data=>
        {
          console.log(data);
          this.service.form.reset();
          this.service.initilizeFormGroup();
          this.onClose();
        
        });
      
   
     }
   }
}
