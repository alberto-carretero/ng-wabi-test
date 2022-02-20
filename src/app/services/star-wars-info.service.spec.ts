import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StarWarsInfoService } from './star-wars-info.service';
import { CharacterI } from '../interfaces/character';
import { FilmI } from '../interfaces/film';

describe('StarWarsInfoService', () => {
  let service: StarWarsInfoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StarWarsInfoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('#getCharancters should return value from observable', (done: DoneFn) => {
  //   const dummyCharacters: CharacterI[] = [
  //     {
  //       birth_year: '15111985',
  //       created: '20022022',
  //       edited: '20022022',
  //       eye_color: 'brown',
  //       films: ['film-1', 'film-7'],
  //       gender: 'male',
  //       hair_color: 'brown',
  //       height: '183',
  //       homeworld: 'Spain',
  //       mass: '82',
  //       name: 'Test Name 1',
  //       skin_color: 'black',
  //       species: [],
  //       starships: [],
  //       url: 'Test url 1',
  //       vehicles: ['VW Golf'],
  //     },
  //     {
  //       birth_year: '14062014',
  //       created: '20022022',
  //       edited: '20022022',
  //       eye_color: 'brown',
  //       films: ['film-1', 'film-2'],
  //       gender: 'female',
  //       hair_color: 'brown',
  //       height: '130',
  //       homeworld: 'Spain',
  //       mass: '24',
  //       name: 'Test Name 2',
  //       skin_color: 'black',
  //       species: [],
  //       starships: [],
  //       url: 'Test url 2',
  //       vehicles: ['Ferrari'],
  //     },
  //   ];

  //   service.getCharacters(1).subscribe((characters) => {
  //     expect(characters.length).toBe(2);
  //     expect(characters).toEqual(dummyCharacters);
  //     done();
  //   });
  //   const baseUrl = 'https://swapi.py4e.com/api/';
  //   const request = httpMock.expectOne(`${baseUrl}people/?page=1`);
  //   expect(request.request.method).toBe('GET');
  //   request.flush(dummyCharacters);
  // });

  // it('#getFilms should return value from observable', (done: DoneFn) => {
  //   const dummyFilms: FilmI[] = [
  //     {
  //       characters: ['character 1', 'character 2'],
  //       created: '20022022',
  //       director: 'Test film director',
  //       edited: '20022022',
  //       episode_id: 1,
  //       opening_crawl: 'Test film description',
  //       planets: ['Mars'],
  //       producer: 'Test film producer',
  //       release_date: '20022022',
  //       species: [],
  //       starships: [],
  //       title: 'Test film title',
  //       url: 'Test film url',
  //       vehicles: ['Ferrari'],
  //     },
  //   ];

  //   service.getFilms().subscribe((films) => {
  //     expect(films.length).toBe(1);
  //     expect(films).toEqual(dummyFilms);
  //     done();
  //   });
  //   const baseUrl = 'https://swapi.py4e.com/api/';
  //   const request = httpMock.expectOne(`${baseUrl}films`);
  //   expect(request.request.method).toBe('GET');
  //   request.flush(dummyFilms);
  // });

  it('#getTotalCharacters should return real value', () => {
    expect(service.getTotalCharacters()).toBe(0);
  });
});
