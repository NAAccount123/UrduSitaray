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
    url: string = 'https://sitarayproject.firebaseio.com/sitarayproject.json';
    url2: string = 'http://localhost:43657/api/Blogs';
    blogsTemp: Array<BlogModel> = [];

    constructor(private http: Http) {

        let b1: BlogModel = new BlogModel();
        b1.Id = 1;
        b1.Author = "BA1";
        b1.Description = "BD1";
        b1.Title = "BT1";

        let b2: BlogModel = new BlogModel();
        b2.Id = 2;
        b2.Author = "BA2";
        b2.Description = "BD2";
        b2.Title = "BT2";

        let b3: BlogModel = new BlogModel();
        b1.Id = 3;
        b1.Author = "BA3";
        b1.Description = "BD3";
        b1.Title = "BT3";

        let b4: BlogModel = new BlogModel();
        b4.Id = 4;
        b4.Author = "BA4";
        b4.Description = "BD4";
        b4.Title = "BT4";

        this.blogsTemp.push(b1);
        this.blogsTemp.push(b2);
        this.blogsTemp.push(b3);
        this.blogsTemp.push(b4);

    }
    SaveBlog(blog: BlogModel): Observable<BlogModel> {

        return this.http.post(this.url2, blog)
            .map((response: Response) => response.json() as BlogModel);
    }


    GetBlogs(): Observable<Array<BlogModel>> {

        let requestoptions = new RequestOptions({
            method: RequestMethod.Get,
        });
        return this.http.get(this.url2)
            .map((response: Response) => response.json() as Array<BlogModel>);
    }

    DeleteBlog(id: number):boolean {
        let url=this.url2+"?id="+id;
        this.http.delete(url).subscribe(
            result => {
                alert("Successfully deleted Blog");
                return true;
            }, error => {
                alert("Can not delete blog, See error in console");
                console.log(error);
                return false;
            }
        );
      return false;
    }



    // SaveBlog(blog:BlogModel):Observable<BlogModel>
    //   {
    //     this.blogsTemp=13;
    //     this.blogsTemp.push(blog);
    //     return Observable.create((observer: Subscriber<any>) => {
    //     observer.next(blog);
    //     observer.complete();
    //   });
    //   }



    //     GetBlogs(): Observable<Array<BlogModel>> {


    // return Observable.create((observer: Subscriber<any>) => {
    //     observer.next(this.blogsTemp);
    //     observer.complete();
    // });
    //     }




    // DeleteBlog(id:number){
    //     let index:number = 0; 
    //     for(let i of this.blogsTemp){
    //     index+=1;
    //     if(i.Id==id){
    //         break;
    //     }

    //     }
    //     this.blogsTemp.slice(index);
    //     alert("Successfully sliced blog");
    // }


}
