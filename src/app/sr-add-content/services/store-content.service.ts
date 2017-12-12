import { Injectable } from '@angular/core';
import { BlogModel } from '../model/blog-model';
import { Http, Response, RequestOptions, Headers, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Subscriber } from "rxjs/Subscriber";


@Injectable()
export class StoreContentService {
url:string = 'https://sitarayproject.firebaseio.com/sitarayproject.json';

blogsTemp:Array<BlogModel>=[];

  constructor(private http: Http) {

let b1:BlogModel =new BlogModel();
b1.Id=1;
b1.Author="BA1";
b1.Description="BD1";
b1.Title="BT1";

let b2:BlogModel =new BlogModel();
b2.Id=2;
b2.Author="BA2";
b2.Description="BD2";
b2.Title="BT2";

let b3:BlogModel =new BlogModel();
b1.Id=3;
b1.Author="BA3";
b1.Description="BD3";
b1.Title="BT3";

let b4:BlogModel =new BlogModel();
b4.Id=4;
b4.Author="BA4";
b4.Description="BD4";
b4.Title="BT4";

this.blogsTemp.push(b1);
this.blogsTemp.push(b2);
this.blogsTemp.push(b3);
this.blogsTemp.push(b4);

   }
  SaveBlog(blog:BlogModel)
  {

//   this.http.post(this.url,blog).subscribe(

// result=>{
// console.log(result);

// });

this.blogsTemp.push(blog);

  }



    GetBlogs(): Observable<Array<BlogModel>> {

        let requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: this.url
        });

return Observable.create((observer: Subscriber<any>) => {
    observer.next(this.blogsTemp);
    observer.complete();
});
        // return this.http.get(this.url)
        //     .map((response: Response) => response.json() as Array<BlogModel>);


        // return this.http.request(new Request(requestoptions))
        //     .map((response: Response) => response.json() as BlogModel[]);
    }

    DeleteBlog(id:number): Observable<BlogModel> {
        let index:number = 0; 
        for(let i of this.blogsTemp){
        index+=1;
        if(i.Id==id){
            break;
        }

        }
        this.blogsTemp.slice(index);
        return this.http.delete(this.url)
            .map((response: Response) => response.json() as BlogModel);
    }


}
