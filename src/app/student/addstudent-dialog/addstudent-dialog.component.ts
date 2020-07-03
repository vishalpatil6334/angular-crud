import { StudentService } from './../../student.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addstudent-dialog',
  templateUrl: './addstudent-dialog.component.html',
  styleUrls: ['./addstudent-dialog.component.css']
})
export class AddstudentDialogComponent implements OnInit {

  constructor( public service:StudentService,
    public dialogbox : MatDialogRef<AddstudentDialogComponent>,) { }

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
       this.service.createstudent(this.service.form.value).subscribe(data=>
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
