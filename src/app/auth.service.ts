import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Router, CanActivate } from '../../node_modules/@angular/router';

import {Observable, observable} from 'rxjs';
import {Http} from "@angular/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private http:HttpClient,private router:Router,private httpg:Http) { }
  
  addUser(username,password){
    return this.http.get("http://localhost:8080/add",
  {
    params:{
      name:username,
      pass:password
    }
  }).subscribe(Response=>{

    }, 
    error=>{
      if(error.status===500){
        alert('Username or Password is occupied.')
      }
      else{
        alert('An unexpected error occured');
      }
      console.log(error);
    })
  }

  getPass(username,password){
    this.http.get('http://localhost:8080/finduname',
    {
      params: {
        name: username
      }
    })
  .subscribe(Response=>{
    if(Response==null){
      this.addUser(username,password)
      alert("Your account created successfully.")
      this.router.navigate(["/"])
    }
    else{
      alert("This username has already been taken.")
    }
    }
  )}


  getUsPass(username, password){
    return this.http.get('http://localhost:8080/find',
      {
        params: {
          name: username,
          pass: password
        }
      })
    .subscribe(Response =>{
      
      if(Response==null){
        localStorage.setItem("isLogged", "false")
        alert("Wrong Username or Password")
      }
      else{
        localStorage.setItem("admin",Response["is_admin"])
        localStorage.setItem("isLogged","true")
        localStorage.setItem("uname",username )
        localStorage.setItem("pass",password)
        this.router.navigate(["/loggedin"])
      }
    }, 
    error=>{
      if(error.status===404){
        alert('Username or Password is Wrong.')
      }
      else{
        alert('An unexpected error occured');
      }
      console.log(error);
    })

    
  }


  update(username,pass,newone){
    return this.http.get('http://localhost:8080/update',
    {
      params: {
        name: username,
        password: pass,
        yeni: newone
      }
    })
    .subscribe(Response=>{
    }
  )}

  getAll(){
 
    return this.httpg.get('http://localhost:8080/all')
    .subscribe(Response=>{
      Response=Response.json();
      console.log(Response)
    })
  }

  delbyid(userid){
    return this.http.get('http://localhost:8080/del_id',
    {
      params: {
        id: userid
 
      }
    })
    .subscribe(Response=>{    }
  )
  }


  canActivate(){
    if(localStorage.getItem("isLogged")=="true"){
      return true;
    }
    alert("Please enter your username and password")
    this.router.navigate(["/"]);
    return false;
  }
  
}
