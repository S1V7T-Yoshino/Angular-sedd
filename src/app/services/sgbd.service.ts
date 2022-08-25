import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import * as fire from 'firebase/compat/app';

import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';

import { Firestore, collectionData, docData } from '@angular/fire/firestore';

interface Person {
  Nom : '',
  Prenom : '',
  CIN : '',
  Tel : '',
  Adresse : '',
  uid : '',
}

@Injectable({
  providedIn: 'root'
})

export class SgbdService {
    // if(localStorage.getItem('token') != null) {
  nom='yoshino kitsune';

  user : Observable<firebase.User | null>;

  private Collection: CollectionReference<DocumentData> | undefined;


  constructor( private auth : AngularFireAuth, private route : Router, private readonly firestore: Firestore) {
    this.user = this.auth.authState;

    this.Collection = collection(this.firestore, 'users');

  }

  get(id: string) {
    const DocumentReference = doc(this.firestore, `users/${id}`);
    return docData(DocumentReference, { idField: 'id' });
  }

  delete(id: string) {
    const DocumentReference = doc(this.firestore, `users/${id}`);
    return deleteDoc(DocumentReference);
  }


  getuser() {
    return fire.default.auth().currentUser?.uid;
  }
  
  Login(email : string , password : string) {
    this.auth.signInWithEmailAndPassword(email, password).then(
      (data) => {
        console.log(data.user?.uid + ' ' + data.user?.email);
        // localStorage.setItem('user', JSON.stringify( data.user?.uid));
        localStorage.setItem('token', 'true');
        this.route.navigate(['/']);
      }
    ).catch(
      (error) => {
        alert(error);
        this.route.navigate(['/signin']);
      }
    );
  }

  register(email : string , password : string) {
    this.auth.createUserWithEmailAndPassword(email, password).then(
      (data) => {
        alert('successfull');
        this.route.navigate(['/']);
      }
    ).catch(
      (error) => {
        alert(error);
        this.route.navigate(['/register']);
      }
    );
  }

  signout() {
    this.auth.signOut().then( 
    () => {
      localStorage.removeItem('token');
      this.route.navigate(['/signin']);
      }
    ).catch(
      (error) => {
      alert(error);
      }
    );
  }
}
