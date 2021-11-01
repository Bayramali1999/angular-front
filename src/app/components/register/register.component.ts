import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public myConfPass:string ="";
  public myPass:string ="";
  public myLogin:string ="";
  public myName:string ="";


  constructor(private userService: UserService,
               private router: Router,
               private dataService: DataService) { }


  //save response this is user we need save it
  public creteUserForArticle(event:any):void {
    event.preventDefault();
    let user:User = {
      "id":1,
      "name":this.myName,
      "login":this.myLogin,
      "password":this.myPass,
      "userCode":""
    };
  let hasUser = false;

    if (this.myPass===this.myConfPass && this.myPass!=="" && this.myName!=="" && this.myLogin!=="") {
      this.userService.getUserByLogin(this.myLogin).subscribe(
        (res)=>{alert("User already exists");},
        (err)=>{
          this.userService.creteUser(user).subscribe(
            (response:User) => {
              this.router.navigate(['/main-articles']);
              localStorage.removeItem('user');
              localStorage.setItem('user',JSON.stringify(response));
              this.dataService.saveUser(response);
          },
            (error)=>{alert("Something went wrong "+error.message);}
          )
        }
      )
    }else{
      alert("Chesck inputs")
    }

  }

  ngOnInit(): void {

  }

}
