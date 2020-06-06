import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {
mydata;
  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(satticdatafromroute=> {
    console.log(satticdatafromroute);
    this.mydata=satticdatafromroute;
    console.log(this.mydata);
    } )
  }

}
