import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPacienteformComponent } from './informacion-pacienteform.component';

describe('InformacionPacienteformComponent', () => {
  let component: InformacionPacienteformComponent;
  let fixture: ComponentFixture<InformacionPacienteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionPacienteformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionPacienteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
