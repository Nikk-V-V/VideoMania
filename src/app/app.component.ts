import {Component, OnInit} from '@angular/core';
import {GenreService} from "./Service/genre.service";
import {FilmService} from "./Service/film.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private ganre: GenreService, private film: FilmService) {
    this.ganre.getAll()
    this.film.getAll()
    this.film.getPopular()
  }

  ngOnInit(): void {
  }

}
