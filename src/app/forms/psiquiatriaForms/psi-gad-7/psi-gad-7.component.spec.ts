import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiGad7Component } from './psi-gad-7.component';

describe('PsiGad7Component', () => {
  let component: PsiGad7Component;
  let fixture: ComponentFixture<PsiGad7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiGad7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiGad7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
