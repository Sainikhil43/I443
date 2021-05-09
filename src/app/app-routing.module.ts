import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MultipackagesComponent } from './multipackages/multipackages.component';
import { PackagesComponent } from './packages/packages.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"packages",component:PackagesComponent},
  {path:"multi-packages",component:MultipackagesComponent},
  {path:"profile",component:ProfileComponent,
children:[
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent}
]},
{path: '**',component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
