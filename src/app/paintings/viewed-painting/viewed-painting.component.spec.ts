import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedPaintingComponent } from './viewed-painting.component';

describe('ViewedPaintingComponent', () => {
  let component: ViewedPaintingComponent;
  let fixture: ComponentFixture<ViewedPaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewedPaintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
