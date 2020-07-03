import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from './models/teacher.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  URL='http://localhost:3000/teacher';

  form:FormGroup=new FormGroup({
    id:new FormControl(null),
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    contact:new FormControl('',[Validators.required,Validators.minLength(8)]),
    subject:new FormControl('',Validators.required),
  })
  
  initilizeFormGroup(){
    this.form.setValue({
      id:null,
      name:'',
      email:'',
      contact:'',
      subject:'',
    })
  }

  constructor(private http : HttpClient) { }

  getlink():Observable<Teacher[]>{
    return this.http.get<Teacher[]>('http://localhost:3000/teacher');
  }

  httpOptions ={
    headers:new HttpHeaders({'Content-Type' :'application/json'})
  };

  getUserById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(this.URL +"/" + id);
  }

  
  createTeacher(_teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.URL, _teacher, this.httpOptions);
  };

  updateTeacher(_teacher: Teacher): Observable<number> {
    return this.http.put<number>(this.URL + '/' + _teacher.id, _teacher, this.httpOptions);
  }

  deleteTeacher(id:number):Observable<Teacher>{
    return this.http.delete<Teacher>(this.URL+'/'+id,this.httpOptions);
  }

    
  private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy:String){
 this._listners.next(filterBy);
  }

  populateform(teacher){
    this.form.setValue(teacher);
  }


  }
