import { TeacherService } from './../../teacher.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<AddDialogComponent>,
           public service :TeacherService) { }


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
               this.service.createTeacher(this.service.form.value).subscribe(data=>
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
