import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'app-sr-article',
  templateUrl: './sr-article.component.html',
  styleUrls: ['./sr-article.component.css']
})
export class SrArticleComponent implements OnInit {

  constructor
    (
    private router: Router

    ) {



  }
  //  
  @Input() title: string;
  @Input() imageName: string;
  @Input() description: string;
  @Input() BlogNumber: number;
  @Input() Link: string;


  IsLinkEnabled: boolean = false;

  CurrentLink: string = null;
  ngOnInit() {

    if (this.Link != null || this.BlogNumber > 0) {
      this.IsLinkEnabled = true;
    }
  }


  ChangeRouteToNext() {

     if (this.BlogNumber > 0) {
      this.CurrentLink = "../" + this.BlogNumber;
      this.router.navigate(['../'+this.BlogNumber]);
      window.location.reload();
    }else{
      this.CurrentLink = this.Link;
      window.location.href=this.Link;
    }
  }

}
