import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  nameUser: any = '';
  constructor(private authService: AuthService, private router: Router) {
    if (authService.dataUserCopy.name != '') {
      this.nameUser = authService.dataUserCopy.name;
    }
  }
  ngOnInit(): void {
    if (!this.nameUser) {
      this.router.navigate(['auth/login']);
    }
  }
}
