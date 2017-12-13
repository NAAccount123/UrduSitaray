import { Component, OnInit } from '@angular/core';
import { StoreContentService } from './services/store-content.service';
import { BlogModel } from './model/blog-model';
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgModelComponent } from "../Common/ng-model/ng-model.component";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import { ArticleModel } from './model/article-model';
import { ArticleService } from './add-artcle/article.service';
@Component({
  selector: 'app-sr-add-content',
  templateUrl: './sr-add-content.component.html',
  styleUrls: ['./sr-add-content.component.css']
})
export class SrAddContentComponent implements OnInit {
  private blog_id: number;
  private blogs: Array<BlogModel> = [];
  private currentBlog: BlogModel;
  private articles: Array<ArticleModel> = [];
  private ModelMessage: string;
  private ModelHeader: string;
  private IsNewBlog:boolean=true;
  Alert_M(header: string, message: string) {
    this.ModelHeader = header;
    this.ModelMessage = message;
  }

  ngOnInit() {
  }


  constructor(
    private Aservice: ArticleService,
    private Bservice: StoreContentService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal) {
    this.currentBlog = new BlogModel();




    this.route.params.subscribe(
      params => {
        this.blog_id = params['id'];
      });
 if(this.blog_id==undefined||this.blog_id==null)
 {
   this.IsNewBlog=true;
 }else{
   this.IsNewBlog=false;
 }
 console.log(this.IsNewBlog);


    this.GetBlogs();

  }
  GetBlogs() {
    this.blogs = [];
    this.Bservice.GetBlogs().subscribe(
      response => {
        for (let i in response) {
          this.blogs.push(response[i]);
          if (response[i].Id == this.blog_id) {
            this.currentBlog = response[i];
          }
        }
      }
    );
    this.GetArticles();
  }
  GetArticles() {
    if (this.blog_id != undefined || this.blog_id != null) {
      this.articles = [];
      this.Aservice.GetArticles(this.blog_id).subscribe(
        response => {
          for (let i in response) {
            this.articles.push(response[i]);
          }
        },error=>{
          alert("Can not get Articles, See error in console");
          console.log(error);
        }
      );
    }
  }
  OnDropDownClick(Id: number) {

    this.blog_id = Id;
    this.GetArticles();
    for (let i in this.blogs) {
      if (this.blogs[i].Id == Id) {
        this.currentBlog = this.blogs[i];
        console.log(this.currentBlog.Title);
      }
    }
    this.router.navigate(['/admin/', Id], { replaceUrl: true });
  }

  OnBlogSubmit(form: NgForm) {
    let BlogModelObj: BlogModel = new BlogModel();
    const value = form.value;
    BlogModelObj.Title = value.Title;
    BlogModelObj.Description = value.Description;
    BlogModelObj.Author = value.Author;
    this.Bservice.SaveBlog(BlogModelObj).subscribe(
      result => {
        alert("Successfully Saved Blog");
        this.GetBlogs();
        this.router.navigate(['/admin/', result.Id], { replaceUrl: true });
      }, error => {
        alert("Can not save blog, see console for error");
        console.log(error);
      }
    );
  }

  OnBlogDelete(Id) {
    this.Bservice.DeleteBlog(Id);
      this.router.navigate(['../admin'],{replaceUrl:true});    
      this.GetBlogs();
  }
  alerto() {
    const modalRef = this.modalService.open(NgModelComponent);
    modalRef.componentInstance.name = 'World';
  }


}