import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosTabComponent } from './medicos-tab.component';

describe('MedicosTabComponent', () => {
  let component: MedicosTabComponent;
  let fixture: ComponentFixture<MedicosTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicosTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicosTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
