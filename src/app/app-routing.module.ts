import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { FilmsGuard } from './guards/films.guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersListComponent },
  { path: 'details/:name', component: DetailsComponent, canActivate: [FilmsGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
