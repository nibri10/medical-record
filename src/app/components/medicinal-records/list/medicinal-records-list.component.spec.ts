import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinalRecordsListComponent } from './medicinal-records-list.component';

describe('MedicinalRecordsListComponent', () => {
  let component: MedicinalRecordsListComponent;
  let fixture: ComponentFixture<MedicinalRecordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinalRecordsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinalRecordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
