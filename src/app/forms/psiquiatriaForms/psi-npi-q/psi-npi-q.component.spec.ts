import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiNpiQComponent } from './psi-npi-q.component';

describe('PsiNpiQComponent', () => {
  let component: PsiNpiQComponent;
  let fixture: ComponentFixture<PsiNpiQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiNpiQComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiNpiQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
