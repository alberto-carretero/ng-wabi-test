import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StarWarsInfoService } from '../services/star-wars-info.service';

@Injectable()
export class FilmsGuard implements CanActivate {
  constructor(private starWarsInfoService: StarWarsInfoService, private router: Router) {}

  /**
   *
   * @returns true if the path can be resolved (the request to get the characters has been solved) or false otherwise (in this case the app redirects to Characters component)
   */
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.starWarsInfoService.getTotalCharacters() > 0) {
      return true;
    }

    this.router.navigate(['/characters']);

    return false;
  }
}
