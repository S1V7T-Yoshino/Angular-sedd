import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit {
  Person = {
    Nom : '',
    Prenom : '',
    CIN : '',
    Tel : '',
    Adresse : '',
    uid : '',
  }
  Num_bureau = '';


  constructor( private router: ActivatedRoute, private save : AngularFirestore) {
    this.router.params.subscribe( params => {
      // this.Person.uid = params.this.Person.uid;
    } );
  }

  ngOnInit(): void {
  }
  
  uid : any = localStorage.getItem('user');
  user : string = this.uid;
  
  id = localStorage.getItem('user');
  saveprofile(){
    this.save.collection("users").doc(this.user).set(
    {
      name : this.Person.Nom,
      Prenom: this.Person.Prenom,
      CIN: this.Person.CIN,
      Tel: this.Person.Tel,
      Adresse: this.Person.Adresse,
      uid: this.user,// JSON.parse(localStorage.getItem('customtoken'))
      Num_bureau: this.Num_bureau}
    ).then(() => {
      alert('successfull');
    })
    .catch(error => {
      alert(error);
    });
      
    console.log(this.Person);
  }


}
