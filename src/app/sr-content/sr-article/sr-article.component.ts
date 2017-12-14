import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sr-article',
  templateUrl: './sr-article.component.html',
  styleUrls: ['./sr-article.component.css']
})
export class SrArticleComponent implements OnInit {

  constructor() { }
//  
@Input() title:string;
@Input() imageName:string;
@Input() description:string;

  ngOnInit() {
  }

}
