import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierNewComponent } from './carrier-new.component';

describe('CarrierNewComponent', () => {
  let component: CarrierNewComponent;
  let fixture: ComponentFixture<CarrierNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
