import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiExamenMentalComponent } from './psi-examen-mental.component';

describe('PsiExamenMentalComponent', () => {
  let component: PsiExamenMentalComponent;
  let fixture: ComponentFixture<PsiExamenMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiExamenMentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiExamenMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
