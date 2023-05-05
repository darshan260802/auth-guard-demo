import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userActions } from 'src/store/user.action';
import { User } from 'src/store/user.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<{ user: User }>) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const localUser:User = JSON.parse(localStorage.getItem('user') ?? '{}');
    const sessionUser:Partial<User> = JSON.parse(sessionStorage.getItem('user') ?? "{}");
    if(localUser.uid === sessionUser.uid &&  localUser.email === sessionUser.email){
      this.store.dispatch(userActions.updateUser(localUser));
    }
    const user:User = await new Promise((resolve, reject) => {
      this.store.select('user').subscribe((user:User) => {
        resolve(user);
      })
    })
    

    if(!(user.uid).length){
      if(state.url.includes('login')){
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }
    
    
    if(state.url.includes('login')){
      this.router.navigate(['video']);
      return false;
    }
    return true;
  }
}
