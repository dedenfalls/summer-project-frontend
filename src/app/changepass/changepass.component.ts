import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent {
  tut=false;
  flag=1;
  constructor(private author : AuthService,private router: Router) {this.author=author; }


  signupUser(event){
    event.preventDefault()
    const target = event.target
    const current:String = target.querySelector("#currentpassword").value
    const password:string =target.querySelector("#password").value
    const again: String = target.querySelector("#again").value
    target.querySelector("#currentpassword").value=""
    target.querySelector("#password").value = ""
    target.querySelector("#again").value=""
    if(again!=password){
      this.tut=true;
      this.flag=0;
      alert("Your passwords does not match")
    }
    if(password.indexOf(" ")!=-1 || again.indexOf(" ")!=-1){
      this.flag=0;
      alert("Username and Password can not include whitespace!")
    }
    else if(current!=localStorage.getItem("pass")){
      this.flag=0;      
      console.log(current)
      console.log(localStorage.getItem("pass"))
      alert("Current password is wrong")
    }
    if(current==password){
      alert("Current password and new password can not be same")
    }
    else{
      if(this.flag){
        let tut =localStorage.getItem("uname");
        this.author.update(tut,password,tut)
        localStorage.setItem("pass",password)
        alert("new password is " + password);
  
        this.router.navigate(["/loggedin"])
        
      }
      else{
        this.flag=1;
      }
    }
    
    

  }

}
