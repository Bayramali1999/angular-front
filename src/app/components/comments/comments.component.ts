import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/comment.service';
import { Article } from 'src/app/models/article';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public commentary:string = '';
  public article:Article;
  public user:User = new User();
  public myComments:Comment[];
  constructor(private commentsService: CommentService) {
    this.article = JSON.parse(localStorage.getItem("article")!!);
    this.user = JSON.parse(localStorage.getItem("article_user")!!);
  }

  public loadAllComments(): void {
    let comList:Comment[] = [];
    this.commentsService.getAllComments().subscribe(
      (response:Comment[])=>{
        this.commentary ="";
        let com:Comment;
        response.forEach((c=>{
            if (c.articleCode === this.article.code) {
              if (c.userCode ===this.user.userCode) {
               com =
                  {
                    "id":c.id,
                    "text":c.text,
                    "userName":c.userName,
                    "userCode":c.userCode,
                    "articleCode":c.articleCode,
                    "delete": false
                  }
              }else{
                com =
                {
                  "id":c.id,
                  "text":c.text,
                  "userName":c.userName,
                  "userCode":c.userCode,
                  "articleCode":c.articleCode,
                  "delete": true
                }
              }

              comList.push(com);
            }
        }))
       },
      err=>{alert(err.message);});
    this.myComments = comList!!;
    }

  public addCommentary(){
    let commen:Comment ={
      "id":1,
      "text":this.commentary,
      "userName":this.user.name,
      "userCode":this.user.userCode,
      "articleCode":this.article.code,
      "delete": true
    };
    this.commentsService.postComment(commen).subscribe(
    (res) =>{this.loadAllComments();},
    (err) =>{console.log(err.message);}
    )
  }

  public deleteComment(id:number) {
    console.log(id);

    this.commentsService.deleteComment(id).subscribe(
      (res) =>{this.loadAllComments();},
      (err) =>{alert(err.message);}
    )
  }


  ngOnInit(){
    this.loadAllComments();
  }
}
