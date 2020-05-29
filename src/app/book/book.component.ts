import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
myAllBooks:Book[]=[];
  constructor(private _BookService:BookService) { }

  ngOnInit(): void {
    this.getMyallBooks()
  }

  getMyallBooks(){
   return this._BookService.getBooks().subscribe(res => this.myAllBooks=res);
  }
}
