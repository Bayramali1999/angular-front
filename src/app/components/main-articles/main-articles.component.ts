import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/article.service';
import { DataService } from 'src/app/data.service';
import { Article } from 'src/app/models/article';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-main-articles',
  templateUrl: './main-articles.component.html',
  styleUrls: ['./main-articles.component.css']
})
export class MainArticlesComponent implements OnInit {
  public articles:Article[];
  public myText:string ="";
  public myDescr:string = "";
  public user:User = new User();


  constructor(private articleService:ArticleService,
               private router:Router,
               private dataService:DataService){

                }

  public getAllArticlesForUi():void{
      this.articleService.getAllArticles().subscribe(
        (response:Article[]) => {this.articles = response},
        (error:HttpErrorResponse) => console.log(error.message)
      )
  }

  //works connect create new article btn {this.article} get data
   public createArticle(event:any):void {
      event.preventDefault();
     let article:Article = {
        "id":1,
        "text":this.myText,
        "descr":this.myDescr,
        "userName":this.user.name,
        "userCode":this.user.userCode,
        "code":""
      };
      this.articleService.addArticle(article).subscribe(
        (response:Article) => {
          console.log(response);
          this.getAllArticlesForUi();
          this.myText="";
          this.myDescr="";
        },
        (error:HttpErrorResponse) => alert("something goes wrong: "+error.message)
    )
  }

  // (get user code and)
  public openComments(article:Article):void {
      this.router.navigate(['/comments'])
      localStorage.removeItem("article")
      localStorage.setItem("article", JSON.stringify(article))

      localStorage.removeItem("article_user")
      localStorage.setItem("article_user", JSON.stringify(this.user))
  }

  ngOnInit(): void {
    // this.dataService.getUser().subscribe(
    //   mUser => {
    //     this.user = mUser;
    //     console.log(this.user);
    //   },
    //   (err) => {console.log(err.message);})
     let data  = localStorage.getItem('user')
     this.user = JSON.parse(data!!);

   this.getAllArticlesForUi();
  }

}
