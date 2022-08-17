import { Component, OnInit } from '@angular/core';
import { SgbdService } from '../services/sgbd.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email : string = '';
  password : string = '';
  constructor( private auth: SgbdService) { }

  ngOnInit(): void {
  }
  login() {
    if(this.email == '' && this.password == '') {
     alert('please enter your informations');
     return
    }
  
    this.auth.Login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
