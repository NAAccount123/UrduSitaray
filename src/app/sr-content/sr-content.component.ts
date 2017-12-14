import { Component, OnInit } from '@angular/core';
import { ArticleModel } from "../sr-add-content/model/article-model";
import { ArticleService } from "../sr-add-content/add-artcle/article.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-sr-content',
  templateUrl: './sr-content.component.html',
  styleUrls: ['./sr-content.component.css']
})
export class SrContentComponent implements OnInit {
  constructor(private articleService: ArticleService,
   private route: ActivatedRoute) { }
  articles: Array<ArticleModel>;
  blog_id:number;
  ngOnInit() {
  let blogNumber:number; 
    this.route.params.subscribe(
      params => {
        this.blog_id = params['id'];
      });
      if(this.blog_id>0)
      {
        blogNumber=this.blog_id;
      }else{
        blogNumber=-1;
      }
    this.articleService.GetArticles(blogNumber).subscribe(
      result => {
        this.articles = result;
      }, error => {
        alert("Unable to retreive data");
      });
  }
}
