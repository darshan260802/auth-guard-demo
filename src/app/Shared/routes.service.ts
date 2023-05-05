import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  private disabledRoutes:string[] = [];

  constructor() { }

  getDisabledRoutes():string[]{
    return this.disabledRoutes;
  }

  disableRoute(route:string):void{
    if(this.disabledRoutes.findIndex((item) => item === route) !== -1) return;
    this.disabledRoutes.push(route);
    console.log(this.disabledRoutes, 'hi');
    
  }
  
  activateRoute(route:string):void{
    const index = this.disabledRoutes.findIndex(item => item === route);
    if(index === -1) return;
    this.disabledRoutes.splice(index, 1);
  }
}
