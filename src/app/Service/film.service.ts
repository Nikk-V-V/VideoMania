import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Film, Genre} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films: Array<Film>
  isPopular: Array<Film>
  film;

  constructor(private http: HttpClient) {
  }

  async getAll() {
    await this.http.get<Film[]>('assets/Data/Film.json')
      .subscribe(res => {
        this.films = res
      })
  }

  async getPopular() {
    await this.http.get<Film[]>('assets/Data/Film.json')
      .subscribe(res => {
        this.isPopular = res.filter(x => x.rating > 3)
      })
  }

  getId(): Observable<Film[]> {
    return  this.http.get<Film[]>('assets/Data/Film.json')
  }

}
