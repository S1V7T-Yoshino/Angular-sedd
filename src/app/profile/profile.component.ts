import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit {
  name:any;
  id : any;
  constructor( private router: ActivatedRoute) {
    this.router.params.subscribe( params => {
      this.id = params['id'];
      this.name = params['name'];
      console.log("Name : " + params['name'] + " id : " + params['id']);
    } );
   }

  ngOnInit(): void {
  }

}
