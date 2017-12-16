import { Component, OnInit } from '@angular/core';
import { ArticleModel } from "../sr-add-content/model/article-model";
import { ArticleService } from "../sr-add-content/add-artcle/article.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-sr-content',
  templateUrl: './sr-content.component.html',
  styleUrls: ['./sr-content.component.css']
})
export class SrContentComponent implements OnInit {
  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    route.params.subscribe(
      params => {
        let id = params["id"];
        if (id != undefined) {
          this.GetArticles(id);
        }else{
          this.router.navigate(['../13']);
        }
      }
    );
  }
  articles: Array<ArticleModel>;
  blog_id: number;
  ngOnInit() {

    console.log("int");
    let blogNumber: number;
    this.route.params.subscribe(
      params => {
        this.blog_id = params['id'];
      });
    if (this.blog_id > 0) {
      blogNumber = this.blog_id;
    } else {
      blogNumber = -1;
    }
    this.GetArticles(blogNumber);
  }

  GetArticles(blogNumber) {
    this.articleService.GetArticles(blogNumber).subscribe(
      result => {
        this.articles = result;
      }, error => {
        alert("Unable to retreive data");
      });
  }

}
