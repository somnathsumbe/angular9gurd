import { Injectable } from "@angular/core";
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChildGuard implements CanActivateChild {
  constructor(private _router:Router) {}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isloginIn = false;
    if (!isloginIn) {
      alert("only for Athorised person i am navigating you on Home page ");
      this._router.navigate(['home']);
    }
    return true;
  }
}
