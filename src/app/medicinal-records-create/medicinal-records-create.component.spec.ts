import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinalRecordsCreateComponent } from './medicinal-records-create.component';

describe('MedicinalRecordsCreateComponent', () => {
  let component: MedicinalRecordsCreateComponent;
  let fixture: ComponentFixture<MedicinalRecordsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinalRecordsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinalRecordsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
