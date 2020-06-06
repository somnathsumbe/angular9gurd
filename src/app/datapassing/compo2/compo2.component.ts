import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {

  constructor(private router: Router, private location: Location) {
    //1 method
    //restiction we have used in constructor
    this.router.getCurrentNavigation().extras.state;
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
    //2 method
    // console.log(history.state);

    //3 method
    // console.log(this.location.getState());
  }

}
