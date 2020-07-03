import { EditstudentDialogComponent } from './editstudent-dialog/editstudent-dialog.component';
import { User } from './../models/user.model';




import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentService } from './../student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddstudentDialogComponent } from './addstudent-dialog/addstudent-dialog.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  displayedColumns = [ 'name', 'email', 'contact','editsymbol'];
  
  listdata : MatTableDataSource<any>;
  @ViewChild(MatSort ,null) sort :MatSort;
 
  constructor(private service: StudentService,
    public dialog:MatDialog) {
      this.service.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshList();
      })
      
    }
    
  ngOnInit(){  this.refreshList();}

  refreshList(){
  
   this.service.getlink().subscribe(data =>{
    this.listdata =new MatTableDataSource(data);
    this.listdata.sort = this.sort;
  });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listdata.filter = filterValue.trim().toLowerCase();
  }
  
 openAddStudent(){
  const dialogConfig =new MatDialogConfig();
  dialogConfig.disableClose =true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "70%";
  dialogConfig.height = "90%";
   this.dialog.open(AddstudentDialogComponent,dialogConfig)
 }

onDelete(id:number){
  if (confirm ('are you sure to delete??')){
    this.service.deleteStudent(id).subscribe(res=>{
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
    this.dialog.open(EditstudentDialogComponent,dialogConfig);
  }
}
