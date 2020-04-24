import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareMoviesContainerComponent } from './compare-movies-container.component';

describe('CompareMoviesContainerComponent', () => {
  let component: CompareMoviesContainerComponent;
  let fixture: ComponentFixture<CompareMoviesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareMoviesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareMoviesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
