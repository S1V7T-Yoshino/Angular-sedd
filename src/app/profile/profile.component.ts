import { SgbdService } from './../services/sgbd.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

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
  Name = 'aymen';

  user : any
  constructor( private router: ActivatedRoute, private save : AngularFirestore, private sgbd : SgbdService) {
    this.user = sgbd.getuser();
  }

  // data : any
// 

// 
  ngOnInit(): void {
    this.save.collection("users").snapshotChanges().pipe(
      map(data => data.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(id, data);
        console.log("111");
        return { id, data };
      }))
    )
    
  }
  
  show(){
    this.save.collection("users").snapshotChanges().pipe(
      map(data => data.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(id, data);
        console.log("111");
        return { id, data };
      }))
    )
  }
  // uid : any = localStorage.getItem('user');
  // user : string = this.uid;
  
  // id = localStorage.getItem('user');
  saveprofile(){
    this.save.collection("users").doc(this.user).set(
    {
      name : this.Person.Nom,
      Prenom: this.Person.Prenom,
      CIN: this.Person.CIN,
      Tel: this.Person.Tel,
      Adresse: this.Person.Adresse,
      uid: this.user,              // JSON.parse(localStorage.getItem('customtoken'))
      Num_bureau: this.Num_bureau}
    ).then(
      // () => {
      //   alert('successfull');
      // }
    )
    .catch(error => {
      alert(error);
    });
      
    console.log(this.Person);
  }


}
