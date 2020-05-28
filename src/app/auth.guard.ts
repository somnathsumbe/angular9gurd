import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TestService } from './test.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  islogin:boolean;
  constructor(private _router:Router, private _test:TestService){
 
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
debugger;
     this.islogin= this._test.islogin;
    if(!this.islogin){
      alert("No Authontical User  ");
      this._router.navigate(['home']);

    }
    else{
      
    }
  

    return true;
  }
  
}
