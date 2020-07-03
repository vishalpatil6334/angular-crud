import { Observable, Subject } from 'rxjs';
import { Book } from './models/book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
export class BookService {
   URL='http://localhost:3000/books'

  form:FormGroup=new FormGroup({
    id:new FormControl(null),
    subject:new FormControl('',Validators.required),
    auther:new FormControl('',Validators.required),
    
  })
  
  initilizeFormGroup(){
    this.form.setValue({
      id:null,
      subject:'',
      auther:'',
      
    })
  }
   
  constructor(private http : HttpClient) { }

  getlink():Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  httpOptions ={
    headers:new HttpHeaders({'Content-Type' :'application/json'})
  };

  getUserById(id: number): Observable<Book> {
    return this.http.get<Book>(this.URL +"/" + id);
  }

  
  createBook(_book: Book): Observable<Book> {
    return this.http.post<Book>(this.URL, _book, this.httpOptions);
  };

  updateBook(_book: Book): Observable<number> {
    return this.http.put<number>(this.URL + '/' + _book.id, _book, this.httpOptions);
  }

  deleteBook(id:number):Observable<Book>{
    return this.http.delete<Book>(this.URL+'/'+id,this.httpOptions);
  }


//bellow part of code is for refresh the data table or refresh the grid
private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy:String){
 this._listners.next(filterBy);
  }

populateform(user){
  this.form.setValue(user);
}

}

