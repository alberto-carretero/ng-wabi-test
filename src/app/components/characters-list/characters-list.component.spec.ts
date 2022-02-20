import { ComponentFixture, fakeAsync, getTestBed, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharactersListComponent } from './characters-list.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsComponent } from '../details/details.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let injector: Injector;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: CharactersListComponent },
          { path: 'details/:name', component: DetailsComponent },
        ]),
        HttpClientTestingModule,
      ],
      declarations: [CharactersListComponent, SpinnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injector = getTestBed();
    router = injector.get(Router);
    location = injector.get(Location);

    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a array of Characters as characters`, () => {
    expect(component.characters).toEqual([]);
  });

  it(`should have a boolean as loading`, () => {
    expect(component.loading).toEqual(true);
  });

  it(`should have a number as currentPage`, () => {
    expect(component.currentPage).toEqual(1);
  });

  it(`should have a number as totalCharacters`, () => {
    expect(component.totalCharacters).toEqual(0);
  });

  it('#next should navigate to the next page of characters', () => {
    component.nextPage();
    expect(component.currentPage).toBe(2);
  });

  it('#previous should navigate to the previous page of characters', () => {
    component.previousPage();
    expect(component.currentPage).toBe(0);
  });

  it('#character should navigate to the details component with the character is selected', fakeAsync(() => {
    const character = fixture.debugElement.query(By.css('tbody tr'));
    router.navigate(['details/', 'dummyCharacter']);
    tick();
    expect(location.path()).toBe('/details/dummyCharacter');
  }));
});
