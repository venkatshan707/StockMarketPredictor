import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastStockClickedComponent } from './past-stock-clicked.component';

describe('PastStockClickedComponent', () => {
  let component: PastStockClickedComponent;
  let fixture: ComponentFixture<PastStockClickedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastStockClickedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastStockClickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
