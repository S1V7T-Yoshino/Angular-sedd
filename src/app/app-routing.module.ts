import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { PageComponent } from './page/page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'signin', component:SigninComponent},
  {path:'profile/:id/:name', component:ProfileComponent},
  {path:'page', component:PageComponent},
  {path:'signup', component:SignupComponent},
  // {path:'contact', redirectTo:''},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
