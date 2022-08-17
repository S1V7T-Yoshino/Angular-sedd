import { SgbdService } from './../services/sgbd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titre;
  constructor( private db: SgbdService) {
    //  console.log("name : " + this.db.getnom());
    this.titre = "Bienvenue sur le site de " + this.db.getnom();
  }
  
  ngOnInit(): void {
  }

}
