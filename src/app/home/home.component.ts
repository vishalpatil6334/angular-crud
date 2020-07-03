import { BookService } from './../book.service';
import { TeacherService } from './../teacher.service';
import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listdata : MatTableDataSource<any>;
  studentsize: number;
  teachersize: number;
  booksize:number;
  teacherlistdata: MatTableDataSource<import("d:/angularprojects/practice/src/app/models/teacher.model").Teacher>;
  booklistdata: MatTableDataSource<import("d:/angularprojects/practice/src/app/models/book.model").Book>;
  constructor( private service:StudentService,
            private teacherservice:TeacherService,
            private bookservice:BookService) { }

  ngOnInit(): void {  this.refreshStudentList();
    this.refreshTeacherList();
    this.refreshBookList();}
  
  refreshStudentList(){
  
    this.service.getlink().subscribe(data =>{
     this.listdata =new MatTableDataSource(data);
     this.studentsize= data.length;
   });
   }

   refreshTeacherList(){
    
    this.teacherservice.getlink().subscribe(data =>{
      this.teacherlistdata =new MatTableDataSource(data);
      this.teachersize= data.length;
     
    
    })
      }

      refreshBookList(){
    
        this.bookservice.getlink().subscribe(data =>{
          this.booklistdata =new MatTableDataSource(data);
          this.booksize= data.length;
         
        
        })
          }

}
