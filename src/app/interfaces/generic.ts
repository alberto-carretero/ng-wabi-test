import { CharacterI } from './character';
import { FilmI } from './film';

export interface GenericI {
  count: number;
  next: string;
  previous: string;
  results: CharacterI[] | FilmI[];
}
