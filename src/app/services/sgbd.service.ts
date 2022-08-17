import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SgbdService {
  nom='yoshino kitsune';
  
  constructor( private auth : AngularFireAuth, private route : Router ) {
    // this.auth.signInWithEmailAndPassword();
   }
  getnom() { return this.nom; }
  Login(email : string , password : string) {
    this.auth.signInWithEmailAndPassword(email, password).then(
      (data) => {
        localStorage.setItem('token', 'true');
        this.route.navigate(['/']);
      }
    ).catch(
      (error) => {
        alert(error);
        this.route.navigate(['/login']);
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
      this.route.navigate(['/login']);
      }
    ).catch(
      (error) => {
      alert(error);
      }
    );
  }
}
