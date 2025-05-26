import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosSelectorComponent } from './medicos-selector.component';

describe('MedicosSelectorComponent', () => {
  let component: MedicosSelectorComponent;
  let fixture: ComponentFixture<MedicosSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicosSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicosSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
