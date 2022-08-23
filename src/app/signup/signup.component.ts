import { Component, OnInit } from '@angular/core';
import { SgbdService } from '../services/sgbd.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email : any
  password : any
  confpwd : any

  constructor( private auth : SgbdService) { }

  login() {
    if(this.email == '' && this.password == '') {
     alert('please enter your informations');
     return
    }

    this.auth.Login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  register() {
    if(this.email == '' && this.password == '') {
     alert('please enter your informations');
     return
    }

    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

}
