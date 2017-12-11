import { Component, OnInit } from '@angular/core';
import { StoreContentService } from './services/store-content.service';
import { BlogModel } from './model/blog-model';

@Component({
  selector: 'app-sr-add-content',
  templateUrl: './sr-add-content.component.html',
  styleUrls: ['./sr-add-content.component.css']
})
export class SrAddContentComponent implements OnInit {

  constructor(private service:StoreContentService) { }
  public OnBlockSubmit(){

  let x:BlogModel=new BlogModel();
  x.Author="Abbas";
  x.Description="Noman",
  x.Title="Dussa"


    this.service.SaveBlog(x);
  }
  ngOnInit() {
  }

}
