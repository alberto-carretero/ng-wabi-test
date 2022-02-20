import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmI } from 'src/app/interfaces/film';
import { StarWarsInfoService } from 'src/app/services/star-wars-info.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  // Array of films
  public films: FilmI[] = [];
  // Boolean to display the spinner while the API request is finished
  public loading: boolean = true;
  // Object with the info of the current character (name and url)
  public infoCharacter: any;
  // Array of subscriptions
  private subscriptions: Subscription = new Subscription();
  constructor(private starWarsInfoService: StarWarsInfoService, private location: Location) {}

  // Request to get the films of the current character
  ngOnInit(): void {
    this.subscriptions.add(
      this.starWarsInfoService.getFilms().subscribe((films) => {
        this.infoCharacter = this.location.getState();
        this.films = this.getFilmsByCharacter(films, this.infoCharacter);
        this.loading = false;
      })
    );
  }

  // Unsubscription of all subscriptions added to the "subscriptions" array
  OnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // Get the films of the current character
  private getFilmsByCharacter(films: FilmI[], infoCharacter: any): any {
    const filmsCharacters: FilmI[] = [];

    films.map((film) => {
      if (film.characters.includes(infoCharacter.url)) {
        filmsCharacters.push(film);
      }
    });

    return filmsCharacters;
  }
}
