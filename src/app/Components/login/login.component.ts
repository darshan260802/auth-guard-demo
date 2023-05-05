import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userActions } from 'src/store/user.action';
import { User } from 'src/store/user.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userCred: Partial<User> = {
    name: 'Darshan Patel',
    email: '123@user.com',
    password: '123',
  };

  constructor(private store: Store<{ user: User }>, private router: Router) {}

  login(): void {
    if (
      this.email !== this.userCred.email ||
      this.password !== this.userCred.password
    ) {
      alert('Invalid Creds!');
      return;
    }

    const uid = new Date().getTime().toString();
    const time = JSON.parse(localStorage.getItem('user') ?? '{}');
    const user: User = {
      name: this.userCred.name ?? '',
      email: this.email,
      password: this.password,
      uid,
      videoTime: 'videoTime' in time ? time.videoTime : 0,
    };
    sessionStorage.setItem('user', JSON.stringify({ email: this.email, uid }));
    localStorage.setItem('user', JSON.stringify(user));
    this.store.dispatch(userActions.updateUser(user));
    this.router.navigate(['video']);
  }
}
