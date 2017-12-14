import { Injectable } from '@angular/core';
import { BlogModel } from '../model/blog-model';
import { Http, Response, RequestOptions, Headers, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { ArticleModel } from '../model/article-model';
import { Subscriber } from "rxjs/Subscriber";


@Injectable()
export class ArticleService {
  url: string = 'https://sitarayproject.firebaseio.com/sitarayproject.json';
  url2: string = 'http://localhost:43657/api/articles';

  constructor(private http: Http) {


    let a1: ArticleModel = new ArticleModel();
    a1.Id = 1;
    a1.BlogId = 1;
    a1.Alt = "alt1";
    a1.Title = "a1";
    a1.Description = "ad1";
    a1.PictureName = "p1";


    let a2: ArticleModel = new ArticleModel();
    a2.Id = 2;
    a2.BlogId = 2;
    a2.Alt = "alt2";
    a2.Title = "a2";
    a2.Description = "ad2";
    a2.PictureName = "p2";

    let a3: ArticleModel = new ArticleModel();
    a3.Id = 3;
    a3.BlogId = 3;
    a3.Title = "a3";
    a3.Alt = "alt3";
    a3.Description = "ad3";
    a3.PictureName = "p3";

    let a4: ArticleModel = new ArticleModel();
    a4.Id = 4;
    a4.BlogId = 4;
    a4.Alt = "alt4";
    a4.Title = "a4";
    a4.Description = "ad4";
    a4.PictureName = "p4";


    this.articlesTemp.push(a1);
    this.articlesTemp.push(a2);
    this.articlesTemp.push(a3);
    this.articlesTemp.push(a4);

  }

  articlesTemp: Array<ArticleModel> = [];





  SaveArticle(article: ArticleModel,picture:File): Observable<ArticleModel> {

        let headers = new Headers();
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');

    let requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      headers:headers
        });



    let formData: FormData = new FormData();
    if (picture != null || picture != undefined) {
      formData.append('files', picture, picture.name);
    }
   formData.append("article",JSON.stringify(article));

    return this.http.post(this.url2,formData,requestoptions)
      .map((response: Response) => response.json() as ArticleModel);
  }

  GetArticles(blog_id: number): Observable<Array<ArticleModel>> {
    if (blog_id == undefined || blog_id == null) {
      alert("Can not get articles because blog_id is undefined");
      return;
    }

    let params: URLSearchParams = new URLSearchParams();
    params.set('blog_id', blog_id.toString());

    let url = this.url2 + "?blog_id=" + blog_id;

    let requestoptions = new RequestOptions({
      method: RequestMethod.Get,
      search: params
    });
    return this.http.get(url)
      .map((response: Response) => response.json() as Array<ArticleModel>);
  }

  DeleteArticle(id: number) {

    if (id == undefined || id == null) {
      alert("Id of current Article is null so can't delete it");
      return;
    }
    // let params: URLSearchParams = new URLSearchParams();
    // params.set('id', id.toString());

    let requestoptions = new RequestOptions({
      method: RequestMethod.Delete
      // search: params
    });
      let url=this.url2+"?id="+id;

   return this.http.delete(url);
   
  }



  // DeleteArticle(id:number){

  //     let index:number = 0; 
  //     for(let i of this.articlesTemp){
  //     index+=1;
  //     if(i.Id==id){
  //         break;
  //     }
  //     }
  //     this.articlesTemp.slice(index);
  //     alert("Successfully sliced one result");
  // }




  // SaveArticle(article:ArticleModel):Observable<ArticleModel>
  // {
  // this.http.post(this.url,article).subscribe(
  //   result=>{
  //          console.log(result);
  //   });
  // }

  //     GetArticles(blog_id:number): Observable<Array<ArticleModel>> {
  //         let Temp:Array<ArticleModel>=[];
  //         for(let i of this.articlesTemp){
  //         if(i.Blog_id==blog_id)
  //         {
  //           Temp.push(i);    
  //         }
  //       }

  // return Observable.create((observer: Subscriber<any>) => {
  //     observer.next(Temp);
  //     observer.complete();
  //      });
  //     }


}
