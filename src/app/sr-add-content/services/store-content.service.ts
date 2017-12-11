import { Injectable } from '@angular/core';
import { BlogModel } from '../model/blog-model';
import { Http } from "@angular/http";
@Injectable()
export class StoreContentService {
url:string = 'https://sitarayproject.firebaseio.com/sitarayproject.json';
  constructor(private http: Http) { }
  SaveBlog(blog:BlogModel)
  {

  this.http.post(this.url,blog).subscribe(

result=>{
console.log(result);

});


  }
}
