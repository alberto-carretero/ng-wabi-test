import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CharacterI } from '../interfaces/character';
import { FilmI } from '../interfaces/film';
import { GenericI } from '../interfaces/generic';

@Injectable({
  providedIn: 'root',
})
export class StarWarsInfoService {
  // Total of characters to manage the pagination actions (next and previous)
  public totalCharacters: number = 0;

  // URL to web api. If this base url ('https://swapi.dev/api/') does not work, you can use 'https://swapi.py4e.com/api/' or the mock /assets/mocks/characters.json' or /assets/mocks/films.json'
  private baseUrl = 'https://swapi.py4e.com/api/';

  constructor(private http: HttpClient) {}

  // Request to web api to get the characters
  getCharacters(page: number): Observable<CharacterI[]> {
    return this.http.get<GenericI>(this.baseUrl + `people/?page=${page}`).pipe(
      tap((response) => this.setTotalCharacters(response.count)),
      map((data) => data.results as CharacterI[])
    );
  }

  // Request to web api to get the films
  getFilms(): Observable<FilmI[]> {
    return this.http.get<GenericI>(this.baseUrl + 'films').pipe(map((response) => response.results as FilmI[]));
  }

  /**
   *
   * @returns total of characters to manage the pagination actions (next and previous)
   */
  getTotalCharacters(): number {
    return this.totalCharacters;
  }

  /**
   * Set the total of characters to manage the pagination actions (next and previous)
   * @param count Total of characters
   */
  private setTotalCharacters(count: number): void {
    this.totalCharacters = count;
  }
}
