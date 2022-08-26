import { SgbdService } from './../services/sgbd.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Person } from './../interface.modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  Person : Person = {
    Nom : '',
    Prenom : '',
    CIN : '',
    Tel : '',
    Adresse : '',
    Role : '',
    Num_bureau : '',
    image : '',
  }
  Name = 'aymen';

  user : any //dont delete this line
  constructor( private router: ActivatedRoute, private save : AngularFirestore, private sgbd : SgbdService) {
    this.user = sgbd.getuser();
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.sgbd.updateUser(form.value).
      then(() => {
        form.reset()
        console.log('user added')
      })
      .catch(error => {
        console.log(error)
      })
  }

  saveprofile(): void{
    this.save.collection("users").doc(this.user).set({
      Nom : this.Person.Nom,
      Prenom : this.Person.Prenom,
      CIN : this.Person.CIN,
      Tel : this.Person.Tel,
      Adresse : this.Person.Adresse,
      uid : this.user,
      Num_bureau : this.Person.Num_bureau,
    }).then(() => {
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }


}
