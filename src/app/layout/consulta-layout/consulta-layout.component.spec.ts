import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLayoutComponent } from './consulta-layout.component';

describe('ConsultaLayoutComponent', () => {
  let component: ConsultaLayoutComponent;
  let fixture: ComponentFixture<ConsultaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
