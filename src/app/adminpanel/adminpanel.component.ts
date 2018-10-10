import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Http } from '@angular/http';


@Component({
  selector:  'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  clicked=false
  temp:any;
  clickupdate=false;
  users :any[];
  tut=false;

  constructor(private author:AuthService,private http:Http) { 
    
  }
  ngOnInit(){
    this.bisey();
  }

  bisey(){

    this.http.get('http://localhost:8080/all')
    .subscribe(response=>{this.users=response.json()})
    this.clicked=true;
  }
  sil(user){
    if(user.is_admin==true){
      alert("This is an admin user you can not delete it")
    }
    else{
      this.author.delbyid(user.id)
      var tut=this.users.indexOf(user.id) 
      this.users.splice(tut,1);
      alert("user deleted")
    }
  }
  update(user){
    this.clickupdate=!this.clickupdate;
    this.temp=user.id
  }
  
  upUser(event,user){
    event.preventDefault()
    const target = event.target
    const username:String = target.querySelector("#username").value
    const password:string =target.querySelector("#password").value
    target.querySelector("#username").value=""
    target.querySelector("#password").value = ""

      if(password.indexOf(" ")!=-1 || username.indexOf(" ")!=-1){

        alert("Username and Password can not include whitespace!")
      }
      else{
        let tutucu =user.username;
        this.author.update(tutucu,password,username)
        this.users[this.users.indexOf(user)].username=username
        this.users[this.users.indexOf(user)].password=password
        
      }

  }

}
