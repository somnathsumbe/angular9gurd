import { Injectable } from "@angular/core";
import { Book } from "./book";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root",
})
export class BookService {
  private BOOK: Book[] = [
    { id: 101, name: "Anular9", price: 7999, description: "sohasoft" },
    { id: 102, name: "Core JavaScript", price: 4999, description: "sohasoft" },
    {
      id: 103,
      name: "Advance JavaScript",
      price: 5999,
      description: "sohasoft",
    },
    { id: 104, name: "Es6", price: 2999, description: "sohasoft" },
    { id: 105, name: "Reactjs", price: 6999, description: "sohasoft" },
  ];
  constructor() {}

  getBooks(): Observable<Book[]> {
    debugger;
    return Observable.of(this.BOOK);
  }

  getbook(id: number): Observable<Book> {
    return this.getBooks().map((books) => books.find((book) => book.id == id));
  }
}
