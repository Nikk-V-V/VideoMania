import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Film, Genre} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genres: Array<Genre> = [];

  constructor(private http: HttpClient) { }

  async getAll() {
    await this.http.get<Genre[]>('assets/Data/Genre.json')
      .subscribe(res => {
        this.genres = res
      })
  }

}
