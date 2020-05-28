import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private _test:TestService) { }

  ngOnInit(): void {

  }

}
