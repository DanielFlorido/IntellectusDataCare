import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiEscalaCornellComponent } from './psi-escala-cornell.component';

describe('PsiEscalaCornellComponent', () => {
  let component: PsiEscalaCornellComponent;
  let fixture: ComponentFixture<PsiEscalaCornellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiEscalaCornellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiEscalaCornellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
