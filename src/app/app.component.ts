import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myClass:string="active";
  title = 'gurd';
  constructor(private _router:Router){

  }

  gotodynamic(){
this._router.navigateByUrl("datapass2",{state:{empcode:103, empname:"somnath sumbe"}})
  }

getclass()
{
  return this.myClass;
}
}


