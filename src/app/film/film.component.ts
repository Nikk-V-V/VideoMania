import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FilmService} from "../Service/film.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  filme;

  constructor(private film: FilmService, private route: ActivatedRoute) { }

   ngOnInit() {
      this.route.params.subscribe((res) => {
        this.film.getId()
          .subscribe(x => {
            x.find(y => y.id == res['id'] ? this.filme = y : null)
            console.log(this.filme)
          })
      }
    )
  }

}
