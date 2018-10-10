import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  constructor(private author : AuthService,private router: Router) {
    this.author=author;

   }


  signupUser(event){
    event.preventDefault()
    const target = event.target
    const username:String =target.querySelector("#username").value
    const password:String =target.querySelector("#password").value
    const again: String = target.querySelector("#again").value
    target.querySelector("#username").value = ""
    target.querySelector("#password").value = ""
    target.querySelector("#again").value=""

    if(again!=password){
      alert("Your passwords does not match")
      if(password.indexOf(" ")!=-1 || username.indexOf(" ")!=-1){
        alert("Username and Password can not include whitespace!")
      }
    }
    else if(password.indexOf(" ")!=-1 || username.indexOf(" ")!=-1){
      alert("Username and Password can not include whitespace!")
    }
    
    else{
      this.author.getPass(username,password)
      this.router.navigate(["/"])
      
    }
    

  }

}
