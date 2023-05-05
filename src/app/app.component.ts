import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userActions } from 'src/store/user.action';
import { User } from 'src/store/user.reducer';
import { RoutesService } from './Shared/routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user!: User;
  url: string = '';
  test: string = '';
  routes: { name: string; path: string }[] = [
    {
      name: 'Video',
      path: 'video',
    },
    {
      name: 'File Upload',
      path: 'file-upload',
    },
    {
      name: 'Enc Dec',
      path: 'enc-dec',
    },
  ];

  constructor(
    private store: Store<{ user: User }>,
    private router: Router,
    private routeSer: RoutesService
  ) {}

  ngOnInit(): void {
    this.store.select('user').subscribe((user: User) => {
      this.user = user;
    });

    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      this.url = location.pathname;
    });
  }
  logout(): void {
    this.store.dispatch(userActions.removeUser());
    sessionStorage.removeItem('user');
    this.navigate('login');
  }

  navigate(...path: string[]): void {
    this.router.navigate(path);
  }

  handleRoute(mode: boolean): void {
    
    if (mode) {
      this.routeSer.activateRoute(this.test);
    } else {
      this.routeSer.disableRoute(this.test);
    }
  }
}
