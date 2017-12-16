import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-sr-nav',
  templateUrl: './sr-nav.component.html',
  styleUrls: ['./sr-nav.component.css']
})
export class SrNavComponent implements OnInit {
  blog_id: number;
 
 
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    let blogNumber;
    this.route.params.subscribe(
      params => {
        this.blog_id = params['id'];
      });
  }


  getLink(id:number) {
    if (this.blog_id > 0) {
      return '../'+id;
    } else {
      return '../../'+ id;
    }


  }

}
