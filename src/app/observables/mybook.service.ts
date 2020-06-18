import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class MybookService {

  private apiUrl = "/api/mybooks"
  constructor(private _httpclient: HttpClient) { }

  getBook(): Observable<Books[]> {
    return this._httpclient.get<Books[]>(this.apiUrl);
  }
}
