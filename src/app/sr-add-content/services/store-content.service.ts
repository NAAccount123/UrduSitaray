import { Injectable } from '@angular/core';
import { BlogModel } from '../model/blog-model';
import { Http, Response, RequestOptions, Headers, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


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



    GetBlogs(): Observable<Array<BlogModel>> {

        let requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: this.url
        });

        return this.http.get(this.url)
            .map((response: Response) => response.json() as Array<BlogModel>);


        // return this.http.request(new Request(requestoptions))
        //     .map((response: Response) => response.json() as BlogModel[]);
    }

    DeleteBlog(id:number): Observable<BlogModel> {
        return this.http.delete(this.url)
            .map((response: Response) => response.json() as BlogModel);
    }


}
