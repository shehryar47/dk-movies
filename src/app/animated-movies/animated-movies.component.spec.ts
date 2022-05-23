import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMoviesComponent } from './animated-movies.component';

describe('AnimatedMoviesComponent', () => {
  let component: AnimatedMoviesComponent;
  let fixture: ComponentFixture<AnimatedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
