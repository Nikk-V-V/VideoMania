import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import {AppRoutingModule} from "./app-routing.module";
import { FilmComponent } from './film/film.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, GenresComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
