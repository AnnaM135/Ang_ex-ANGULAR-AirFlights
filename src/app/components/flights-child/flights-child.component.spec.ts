import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsChildComponent } from './flights-child.component';

describe('FlightsChildComponent', () => {
  let component: FlightsChildComponent;
  let fixture: ComponentFixture<FlightsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
