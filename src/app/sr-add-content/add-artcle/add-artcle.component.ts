import { Component, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from './article.service';
import { NgForm } from '@angular/forms';
import { ArticleModel } from '../model/article-model';
@Injectable()
@Component({
  selector: 'app-add-artcle',
  templateUrl: './add-artcle.component.html',
  styleUrls: ['./add-artcle.component.css']
})


export class AddArtcleComponent implements OnInit {
  private blog_id: number;
  private Picture:File;
  ngOnInit() {
  }

  constructor(private service: ArticleService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      params => {
        this.blog_id = params['id'];
      });
  }
  OnArticleSubmit(form: NgForm) {    
    let ArticleModelObj: ArticleModel = new ArticleModel();
    const value = form.value;
    ArticleModelObj.BlogId=this.blog_id;
    ArticleModelObj.Title = value.Title;
    ArticleModelObj.Description = value.Description;
    ArticleModelObj.LinkedToBlog = value.LinkedToBlog;
    ArticleModelObj.Link = value.Link;
    ArticleModelObj.Category = value.Category;
    ArticleModelObj.Alt = value.Alt;
    

    this.service.SaveArticle(ArticleModelObj,this.Picture).subscribe(
      result => {
        alert("Successfully Saved Article");
            this.router.navigate(['../admin/',this.blog_id]);
      }, error => {
        alert("Problem occured while Saving Article,See console for errors");
        console.log(error);
      }
    );
  }
onChange(event) {
    this.Picture = event.srcElement.files[0];
  }
// fileChange(event) {
//     let fileList: FileList = event.target.files;
//     if(fileList.length > 0) {
//         let file: File = fileList[0];
//         let formData:FormData = new FormData();
//         formData.append('uploadFile', file, file.name);
//         let headers = new Headers();
//         /** No need to include Content-Type in Angular 4 */
//         headers.append('Content-Type', 'multipart/form-data');
//         headers.append('Accept', 'application/json');
//         let options = new RequestOptions({ headers: headers });
//         this.http.post(`${this.apiEndPoint}`, formData, options)
//             .map(res => res.json())
//             .catch(error => Observable.throw(error))
//             .subscribe(
//                 data => console.log('success'),
//                 error => console.log(error)
//             )
//     }
// }



}
