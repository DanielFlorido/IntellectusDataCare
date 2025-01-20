import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiPhq9Component } from './psi-phq-9.component';

describe('PsiPhq9Component', () => {
  let component: PsiPhq9Component;
  let fixture: ComponentFixture<PsiPhq9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiPhq9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiPhq9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
