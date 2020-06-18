import { Component, OnInit } from '@angular/core';
import { MybookService } from './mybook.service';
import { Books } from './books';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  mybook: Books[];
  constructor(private _MybookService: MybookService) { }

  ngOnInit(): void {
    debugger;
    this._MybookService.getBook().subscribe(obj => {
      debugger;
      this.mybook = obj;
      console.log(this.mybook);
    })

    this._MybookService.getBook().subscribe(obj => {
      debugger;
      this.mybook = obj;
      console.log(this.mybook);
    })

    this._MybookService.getBook().subscribe(obj => {
      debugger;
      this.mybook = obj;
      console.log(this.mybook);
    })
  }

  getbookdata() {

  }

}
