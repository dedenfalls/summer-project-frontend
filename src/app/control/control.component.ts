import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  

  constructor(private author : AuthService) {
    this.author=author;

   }

 ngOnInit() {
    localStorage.clear();
    localStorage.setItem("admin","false")
  }
  loginUser(event){
    localStorage.setItem("isLogged", "false")
    event.preventDefault()
    const target = event.target
    const username =target.querySelector("#username").value
    const password =target.querySelector("#password").value
    target.querySelector("#username").value = ""
    target.querySelector("#password").value = ""
    if(password.indexOf(" ")!=-1 || username.indexOf(" ")!=-1){
      alert("Username and Password can not include whitespace!")
    }
    else{
      this.author.getUsPass(username,password)
      

    }

  
   
  }
  
   

  
}
