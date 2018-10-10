import { Injectable } from '@angular/core';
import { CanActivate, Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(){
    if(localStorage.getItem("admin")=="true"){
      
      return true;
    }
    alert("You are not an admin")
    this.router.navigate(["loggedin"])
    return false;
  }
}

