import { Injectable } from '@angular/core';
import { BlogModel } from '../model/blog-model';
import { Http, Response, RequestOptions, Headers, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ArticleModel } from '../model/article-model';


@Injectable()
export class ArticleService {
url:string = 'https://sitarayproject.firebaseio.com/sitarayproject.json';
  constructor(private http: Http) { }
  SaveArticle(article:ArticleModel)
  {

  this.http.post(this.url,article).subscribe(

result=>{
console.log(result);

});
  }



    GetArticles(): Observable<Array<ArticleModel>> {

        let requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: this.url
        });

        return this.http.get(this.url)
            .map((response: Response) => response.json() as Array<ArticleModel>);


       
    }

    DeleteArticle(id:number): Observable<ArticleModel> {
        return this.http.delete(this.url)
            .map((response: Response) => response.json() as ArticleModel);
    }


}
