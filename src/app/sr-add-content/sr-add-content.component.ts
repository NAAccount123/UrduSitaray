import { Component, OnInit } from '@angular/core';
import { StoreContentService } from './services/store-content.service';
import { BlogModel } from './model/blog-model';
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-sr-add-content',
  templateUrl: './sr-add-content.component.html',
  styleUrls: ['./sr-add-content.component.css']
})
export class SrAddContentComponent implements OnInit {
private blog_id:number;
private blogs:Array<BlogModel>=[];
private currentBlog:BlogModel;

private ModelMessage:string;
private ModelHeader:string;

Alert_M(header:string,message:string)
{
 this.ModelHeader=header;
 this.ModelMessage=message;
}



  constructor(private service:StoreContentService,private route: ActivatedRoute,private router: Router) { 
     this.currentBlog=new BlogModel();
             this.route.params.subscribe(
      params=>{
        this.blog_id=params['id'];
      });

      this.service.GetBlogs().subscribe(
        response=>{
        for(let i in response)
          {
              this.blogs.push(response[i]);  
              if(response[i].Id==this.blog_id)
              {
                this.currentBlog=response[i];
              }
          }  
        }
      );
  


  }

OnDropDownClick(Id:number)
{
  this.blog_id=Id;
        for(let i in this.blogs)
          {
              if(this.blogs[i].Id==Id)
              {
                this.currentBlog=this.blogs[i];
                console.log(this.currentBlog.Title);
              }
          }  
  this.router.navigate(['/admin/',Id], { replaceUrl: true });
}

  ngOnInit() {
  }
  OnBlogSubmit(form:NgForm)
  {
  let BlogModelObj:BlogModel=new BlogModel();
  const value=form.value;
  BlogModelObj.Title=value.Title;
  BlogModelObj.Description=value.Description;
  BlogModelObj.Author=value.Author;
  this.service.SaveBlog(BlogModelObj);
}

OnBlogDelete(Id)
{
  this.service.DeleteBlog(Id);
}



}