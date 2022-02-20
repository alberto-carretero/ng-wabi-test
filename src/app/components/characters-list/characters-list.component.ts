import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterI } from 'src/app/interfaces/character';
import { StarWarsInfoService } from 'src/app/services/star-wars-info.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  // Array of characters
  public characters: CharacterI[] = [];
  // Boolean to display the spinner while the API request is finished
  public loading: boolean = true;
  // Current page number for pagination
  public currentPage: number = 1;
  // Total of characters to manage the pagination actions (next and previous)
  public totalCharacters: number = 0;
  // Array of subscriptions
  private subscriptions: Subscription = new Subscription();

  constructor(private starWarsInfoService: StarWarsInfoService) {}

  // Call to the getCharacters method to make the request to get the characters
  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  // Unsubscription of all subscriptions added to the "subscriptions" array
  OnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Request to get the characters of the current page
   * @param page Current page number
   */
  getCharacters(page: number): void {
    this.subscriptions.add(
      this.starWarsInfoService.getCharacters(page).subscribe((characters) => {
        this.characters = characters;
        this.totalCharacters = Math.round(this.starWarsInfoService.getTotalCharacters() / 10);
        this.loading = false;
      })
    );
  }

  // Go to the previous page
  previousPage(): void {
    this.currentPage--;
    this.loading = true;
    this.getCharacters(this.currentPage);
  }

  // Go to the next page
  nextPage(): void {
    this.currentPage++;
    this.loading = true;
    this.getCharacters(this.currentPage);
  }
}
