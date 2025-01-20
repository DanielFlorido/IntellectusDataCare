import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiGdsComponent } from './psi-gds.component';

describe('PsiGdsComponent', () => {
  let component: PsiGdsComponent;
  let fixture: ComponentFixture<PsiGdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiGdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiGdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
