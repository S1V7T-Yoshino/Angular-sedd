import { SgbdService } from './../services/sgbd.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../interface.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  Persons : Person[] = [];

  constructor( private db: SgbdService) {
    


  }
  
  ngOnInit(): void {
    this.db.getUser().subscribe((res: Person[]) => {
      this.Persons = res;
      console.log(this.Persons);
    })
  }

}
