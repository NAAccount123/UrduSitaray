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
url:string = 'https://sitarayproject.firebaseio.com/sitarayproject.json';
  constructor(private http: Http) { 
let a1:ArticleModel=new ArticleModel();
a1.Id=1;
a1.Blog_id=1;
a1.Alt="alt1";
a1.Title="a1";
a1.Description="ad1";
a1.PictureName="p1";


let a2:ArticleModel=new ArticleModel();
a2.Id=2;
a2.Blog_id=2;
a2.Alt="alt2";
a2.Title="a2";
a2.Description="ad2";
a2.PictureName="p2";

let a3:ArticleModel=new ArticleModel();
a3.Id=3;
a3.Blog_id=3;
a3.Title="a3";
a3.Alt="alt3";
a3.Description="ad3";
a3.PictureName="p3";

let a4:ArticleModel=new ArticleModel();
a4.Id=4;
a4.Blog_id=4;
a4.Alt="alt4";
a4.Title="a4";
a4.Description="ad4";
a4.PictureName="p4";


this.articlesTemp.push(a1);
this.articlesTemp.push(a2);
this.articlesTemp.push(a3);
this.articlesTemp.push(a4);

  }

articlesTemp:Array<ArticleModel>=[];



  SaveArticle(article:ArticleModel)
  {
 this.articlesTemp.push(article);
  this.http.post(this.url,article).subscribe(

result=>{
console.log(result);

});
  }



    GetArticles(blog_id:number): Observable<Array<ArticleModel>> {
        let Temp:Array<ArticleModel>=[];
        for(let i of this.articlesTemp){
        if(i.Blog_id==blog_id)
        {
          Temp.push(i);    
        }
        }
    
        let requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: this.url
        });

        // return this.http.get(this.url)
        //     .map((response: Response) => response.json() as Array<ArticleModel>);

return Observable.create((observer: Subscriber<any>) => {
    observer.next(Temp);
    observer.complete();
});

    }

    DeleteArticle(id:number): Observable<ArticleModel> {
        return this.http.delete(this.url)
            .map((response: Response) => response.json() as ArticleModel);
    }


}
