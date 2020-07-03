import { TeacherService } from './../../teacher.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<EditDialogComponent>,
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
         this.service.updateTeacher(this.service.form.value).subscribe(data=>
          {
            console.log(data);
            this.service.form.reset();
            this.service.initilizeFormGroup();
            this.onClose();
          
          });
        
     
       }
     }
 
}
