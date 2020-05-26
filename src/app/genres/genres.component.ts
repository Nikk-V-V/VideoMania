import { Component, OnInit } from '@angular/core';
import {FilmService} from "../Service/film.service";
import {ActivatedRoute} from "@angular/router";
import {GenreService} from "../Service/genre.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  films = []

  constructor(private route: ActivatedRoute, public film: FilmService) { }

  ngOnInit() {
    this.route.params.subscribe((res) => {
        this.film.films.forEach(x => {
          x.genre.map(y => y == res['id'] ? this.films.push(x) : null)
        })
      }
    )
  }

}
