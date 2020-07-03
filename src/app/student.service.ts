import { FormGroup, Validators, FormControl } from '@angular/forms';


import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User} from './models/user.model';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  URL='http://localhost:3000/posts';

 form:FormGroup=new FormGroup({
   id:new FormControl(null),
   name:new FormControl('',Validators.required),
   email:new FormControl('',Validators.email),
   contact:new FormControl('',[Validators.required,Validators.minLength(8)])
 })
 
 initilizeFormGroup(){
   this.form.setValue({
     id:null,
     name:'',
     email:'',
     contact:''
   })
 }
  

  constructor(private http : HttpClient) { }

  getlink():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/posts');
  }

  httpOptions ={
    headers:new HttpHeaders({'Content-Type' :'application/json'})
  };

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.URL +"/" + id);
  }

  
  createstudent(_user: User): Observable<User> {
    return this.http.post<User>(this.URL, _user, this.httpOptions);
  };

  updateStudent(_user: User): Observable<number> {
    return this.http.put<number>(this.URL + '/' + _user.id, _user, this.httpOptions);
  }

  deleteStudent(id:number):Observable<User>{
    return this.http.delete<User>(this.URL+'/'+id,this.httpOptions);
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
