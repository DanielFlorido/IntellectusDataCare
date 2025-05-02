import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConsultaComponent } from './crear-consulta.component';

describe('CrearConsultaComponent', () => {
  let component: CrearConsultaComponent;
  let fixture: ComponentFixture<CrearConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearConsultaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
