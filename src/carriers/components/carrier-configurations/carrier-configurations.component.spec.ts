import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierConfigurationsComponent } from './carrier-configurations.component';

describe('CarrierConfigurationsComponent', () => {
  let component: CarrierConfigurationsComponent;
  let fixture: ComponentFixture<CarrierConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
