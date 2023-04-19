import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MaterialModule } from '../material/material.module';
import { RandomPipe } from './pipe/random.pipe';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    SignUpComponent,
    RandomPipe
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
