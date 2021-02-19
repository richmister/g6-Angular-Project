import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviesFormComponent } from './search-movies-form.component';

describe('SearchMoviesFormComponent', () => {
  let component: SearchMoviesFormComponent;
  let fixture: ComponentFixture<SearchMoviesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMoviesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
