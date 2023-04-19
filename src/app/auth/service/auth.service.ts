import { Injectable } from '@angular/core';

interface userInterface {
  name?:string,
  password?:string,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private dataUser: userInterface = {
    name:'',
    password:''
  };

  get dataUserCopy() {
    return structuredClone(this.dataUser);
  }

  login(data: any) {
    this.dataUser = data;
    return true;
  }

  signUp(data: any) {
    this.dataUser = data;
    return true;
  }
}
