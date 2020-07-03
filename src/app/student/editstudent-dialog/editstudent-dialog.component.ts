import { StudentService } from './../../student.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-editstudent-dialog',
  templateUrl: './editstudent-dialog.component.html',
  styleUrls: ['./editstudent-dialog.component.css']
})
export class EditstudentDialogComponent implements OnInit {

  constructor( public service:StudentService,
    public dialogbox : MatDialogRef<EditstudentDialogComponent>,) { }

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
       this.service.updateStudent(this.service.form.value).subscribe(data=>
        {
          console.log(data);
          this.service.form.reset();
          this.service.initilizeFormGroup();
          this.onClose();
        
        });
      
   
     }
   }
}

