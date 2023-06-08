import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsComponent } from './patient-details-component.component';

describe('PatientDetailsComponentComponent', () => {
  let component: PatientDetailsComponent;
  let fixture: ComponentFixture<PatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
