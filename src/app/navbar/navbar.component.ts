import { Component, OnInit } from '@angular/core';
import { SgbdService } from '../services/sgbd.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser : any
  constructor( private auth : SgbdService) {
    this.isUser = auth.user.subscribe(log =>{
      this.isUser = log;
    })
   }

  ngOnInit(): void {
  }
  token = localStorage.getItem('token');
  signout() {
    this.auth.signout();
    this.token = '';
  }

}
