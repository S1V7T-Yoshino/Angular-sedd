import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import * as fire from 'firebase/compat/app';

import {
  Firestore, addDoc, collection, collectionData,CollectionReference,
  DocumentData, doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

import { Person } from './../interface.modal';

@Injectable({
  providedIn: 'root'
})

export class SgbdService {
    // if(localStorage.getItem('token') != null) {
  // nom='yoshino kitsune';

  user : Observable<firebase.User | null>;

  // private Collection: CollectionReference<DocumentData> | undefined;

  constructor( private auth : AngularFireAuth, private route : Router, private firestore : Firestore) {
    this.user = this.auth.authState;
  }

  addUser(Person : Person) {
    const datas = collection(this.firestore, 'users'); 
    return addDoc(datas, Person);
  }// will only add

  updateUser(Person : Person) {
    const datas = doc(this.firestore, `users/${fire.default.auth().currentUser?.uid}`);
    return setDoc(datas, Person);
  }// will add or update

  // getAll(){
  //   return collectionData(this.Collection, {
  //     idField: 'id',
  //   }) as Observable<Person[]>;
  // }

  get(id: string) {
    const DocumentReference = doc(this.firestore, `users/${id}`);
    return docData(DocumentReference, { idField: 'id' });
  }
  getBooks(): Observable<Person[]> {
    const datas = collection(this.firestore, 'users');
    return collectionData(datas, { idField: 'id' }) as Observable<Person[]>;
  }

  delete(id: string) {
    const DocumentReference = doc(this.firestore, `users/${id}`);
    return deleteDoc(DocumentReference);
  }

//better not touch this section // sign in/up section

  getuser() {
    return fire.default.auth().currentUser?.uid;
  }


  Login(email : string , password : string) {
    this.auth.signInWithEmailAndPassword(email, password).then(
      (data) => {
        console.log(data.user?.uid + ' ' + data.user?.email);
        // localStorage.setItem('user', JSON.stringify( data.user?.uid));
        localStorage.setItem('token', 'true');
        this.route.navigate(['/profile']);
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
