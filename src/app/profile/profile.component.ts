import { SgbdService } from './../services/sgbd.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, getDoc } from 'firebase/firestore';

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

  // Product_collection: any;
  dataArray : any;
  user : any
  constructor( private router: ActivatedRoute, private save : AngularFirestore, private sgbd : SgbdService) {
    this.user = sgbd.getuser();
  }
  ngOnInit(): void {
    this.save.collection("users").doc(this.user).get().subscribe(
      (doc : any) => {
        this.item = doc.data();
        console.log(this.item);
      }
    );
  }
  item : any;
  getDocument(){
    
  }
//   async ngOnInit(): Promise<void> {
//     this.save.collection('user').snapshotChanges().subscribe((data: any[]) => {
//       this.dataArray = data.map(element => {
//         const data = element.payload.doc.data();
//         const id = element.payload.doc.id;
//         return { id, ...data };
//       });
//     });
//     this.dataArray.array.forEach((element: { name: string; Prenom: string;
//       CIN: string; Tel: string; Adresse: string; uid: string; Num_bureau : string; }) => {
//       this.Person.Nom = element.name;
//       this.Person.Prenom = element.Prenom;
//       this.Person.CIN = element.CIN;
//       this.Person.Tel = element.Tel;
//       this.Person.Adresse = element.Adresse;
//       this.Person.uid = element.uid;
//       this.Num_bureau = element.Num_bureau;
//   });
//   console.log(this.Person);
//   console.log("jdaoidn");

//   const docref = doc(this.save , "users", this.user)
// //   if (!doc.exists) {
// //     console.log('No such document!');
// //   } else {
// //     console.log('Document data:', doc.data());
// // }
//   }
  // uid : any = localStorage.getItem('user');
  // user : string = this.uid;
  
  // id = localStorage.getItem('user');
  saveprofile(): void{
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
