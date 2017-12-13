import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from './article.service';
import { NgForm } from '@angular/forms';
import { ArticleModel } from '../model/article-model';
@Injectable()
@Component({
  selector: 'app-add-artcle',
  templateUrl: './add-artcle.component.html',
  styleUrls: ['./add-artcle.component.css']
})


export class AddArtcleComponent implements OnInit {
  private blog_id: number;

  ngOnInit() {
  }

  constructor(private service: ArticleService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(
      params => {
        this.blog_id = params['id'];
      });
  }
  OnArticleSubmit(form: NgForm) {    
    let ArticleModelObj: ArticleModel = new ArticleModel();
    const value = form.value;
    ArticleModelObj.BlogId=this.blog_id;
    ArticleModelObj.Title = value.Title;
    ArticleModelObj.Description = value.Description;
    ArticleModelObj.Alt = value.Alt;
    this.service.SaveArticle(ArticleModelObj).subscribe(
      result => {
        alert("Successfully Saved Article");
            this.router.navigate(['../admin/',this.blog_id]);
      }, error => {
        alert("Problem occured while Saving Article,See console for errors");
        console.log(error);
      }
    );
  }
}
