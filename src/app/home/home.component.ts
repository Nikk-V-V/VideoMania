import { Component, OnInit } from '@angular/core';
import {GenreService} from "../Service/genre.service";
import {FilmService} from "../Service/film.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  right = -480;

  constructor(public ganre: GenreService, public film: FilmService) { }

  ngOnInit(): void {
  }


  arrow(num) {
    let road = document.getElementById('road')
    this.right += num
    if (this.right === -960) {
      this.right = -480
      return false
    }
    if (this.right === 480)  {
      this.right = 0
      return false
    }



    road.style.right = `${this.right}px`
  }


}
