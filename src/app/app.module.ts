import { StudentService } from './student.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatListModule} from '@angular/material/list';
;
import {MaterialModule}  from './material/material.module';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { AddDialogComponent } from './teacher/add-dialog/add-dialog.component';
import { EditDialogComponent } from './teacher/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './teacher/delete-dialog/delete-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LibraryComponent } from './library/library.component';

import { BooklistComponent } from './library/booklist/booklist.component';
import { AddstudentDialogComponent } from './student/addstudent-dialog/addstudent-dialog.component';
import { EditstudentDialogComponent } from './student/editstudent-dialog/editstudent-dialog.component';
import { AddBookDialogComponent } from './library/add-book-dialog/add-book-dialog.component';
import { EditBookDialogComponent } from './library/edit-book-dialog/edit-book-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    TeacherComponent,
    StudentComponent,
    NavComponent,
    
  
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    LibraryComponent,
    
    
    
    BooklistComponent,
    
    AddstudentDialogComponent,
    
    EditstudentDialogComponent,
    
    AddBookDialogComponent,
    
    EditBookDialogComponent,
  ],
  imports: [
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    LayoutModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSortModule,
    
    
    
    
  ],
  providers: [ StudentService],
  bootstrap: [AppComponent],
  entryComponents: [AddDialogComponent,DeleteDialogComponent,
    AddstudentDialogComponent,EditDialogComponent,EditstudentDialogComponent,
    AddBookDialogComponent,EditBookDialogComponent]

})
export class AppModule { }
