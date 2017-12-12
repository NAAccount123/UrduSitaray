import { Component, OnInit,  Injectable } from '@angular/core';
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
  private blog_id:number;
    constructor(private service:ArticleService,private route: ActivatedRoute,private router: Router) { 
       
               this.route.params.subscribe(
        params=>{
          this.blog_id=params['id'];
        });
  
       
  
  
    }
  
 
  
  
    ngOnInit() {

    }
    OnArticleSubmit(form:NgForm)
    {
    console.log(form);
    let ArticleModelObj:ArticleModel=new ArticleModel();
    const value=form.value;
    ArticleModelObj.Title=value.Title;
    ArticleModelObj.Description=value.Description;
    ArticleModelObj.Alt=value.Alt;
    console.log(ArticleModelObj)
    this.service.SaveArticle(ArticleModelObj);

  }
  OnBlogDelete(Id)
  {
    this.service.DeleteArticle(Id);
  }
}
