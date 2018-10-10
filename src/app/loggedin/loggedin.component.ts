import { Component } from '@angular/core';
import { Router, CanActivate } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent {
  user = localStorage.getItem("uname")
  admin=localStorage.getItem("admin")
  constructor(private router:Router) {
   }

  onclick(){
    localStorage.clear()
    this.router.navigate(["/"])
    
  }

  

}
