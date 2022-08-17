import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  name: any
  id: any

  constructor( private route: ActivatedRoute) {
    this.route.queryParams.subscribe(data => {
      console.log(data['id']);
      console.log(data['name']);
      this.id = data['id'];
      this.name = data['name'];
    } );
   }

  ngOnInit(): void {
  }

}
