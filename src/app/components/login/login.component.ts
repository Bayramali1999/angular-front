import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myLogin :string ="";
  public  myPassword:string="";
  constructor(private userService: UserService,
               private router: Router,
               private dataService: DataService) { }

  public getUserByLogin(event:any){
    event.preventDefault();

    this.userService.getUserByLogin(this.myLogin).subscribe(
      (response) =>{
            if (this.myPassword===response.password) {
              this.router.navigate(['/main-articles']);
              localStorage.removeItem('user');
              localStorage.setItem('user',JSON.stringify(response));
            }else{
              alert("passwor is incorrect");
            }
        },
      (err) =>{alert("User not found")}
    )
  }

  ngOnInit(): void {
  }

}
