import { Component, OnInit } from '@angular/core';
import { StoreContentService } from './services/store-content.service';
import { BlogModel } from './model/blog-model';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-sr-add-content',
  templateUrl: './sr-add-content.component.html',
  styleUrls: ['./sr-add-content.component.css']
})
export class SrAddContentComponent implements OnInit {
private blog_id:number;
private blogs:Array<BlogModel>=[];

  constructor(private service:StoreContentService,private route: ActivatedRoute) { }

  ngOnInit() {
        this.route.params.subscribe(
      params=>{
        this.blog_id=params['id'];
      });

      this.service.GetBlogs().subscribe(
        response=>{
      
      
          for(let i in response)
          {
              this.blogs.push(response[i]);  
          }
        }
      );
  

  }
  OnAddBlog(form:NgForm)
  {
  let BlogModelObj:BlogModel=new BlogModel();
  const value=form.value;
  BlogModelObj.Title=value.Title;
  BlogModelObj.Description=value.Description;
  BlogModelObj.Author=value.Author;
  this.service.SaveBlog(BlogModelObj);
  }

}
