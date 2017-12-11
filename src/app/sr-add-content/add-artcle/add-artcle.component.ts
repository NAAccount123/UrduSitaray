import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-artcle',
  templateUrl: './add-artcle.component.html',
  styleUrls: ['./add-artcle.component.css']
})


export class AddArtcleComponent implements OnInit {
private blog_id:number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        alert(params['id'])
      }

    );
  }

}
