import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { Teacher } from './../models/teacher.model';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherService } from '../teacher.service';
import {MatTableModule} from '@angular/material/table';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  listdata : MatTableDataSource<any>;
  displayedColumns : string[]=['id', 'name', 'email','subject','options'];
  @ViewChild(MatSort ,null) sort :MatSort; 
 
  constructor( private service:TeacherService,
               public dialog:MatDialog) {
                 this.service.listen().subscribe((m:any)=>{
                   console.log(m);
                   this.refreshList();
                 })
               }
  ngOnInit() { this.refreshList();}
   
  refreshList(){
    
this.service.getlink().subscribe(data =>{
  this.listdata =new MatTableDataSource(data);
  this.listdata.sort = this.sort;

})
  }

  applyFilter(filtervalue:string){
    this.listdata.filter=filtervalue.trim().toLocaleLowerCase();
  }

onEdit(row){ 
  this.service.populateform(row);
   const dialogConfig =new MatDialogConfig();
   dialogConfig.disableClose =true;
   dialogConfig.autoFocus = true;
   dialogConfig.width = "70%";
   this.dialog.open(EditDialogComponent,dialogConfig);

}

onDelete(id:number){
  if (confirm ('are you sure to delete??')){
    this.service.deleteTeacher(id).subscribe(res=>{
      this.refreshList();
      alert('teacher deleted successfuly');
    });
  }
  }
  
onAdd(){
  const dialogConfig =new MatDialogConfig();
  dialogConfig.disableClose =true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "70%";
  dialogConfig.height = "90%";
  this.dialog.open(AddDialogComponent,dialogConfig);
}

  }