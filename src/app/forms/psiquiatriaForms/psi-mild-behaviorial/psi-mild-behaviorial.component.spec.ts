import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiMildBehaviorialComponent } from './psi-mild-behaviorial.component';

describe('PsiMildBehaviorialComponent', () => {
  let component: PsiMildBehaviorialComponent;
  let fixture: ComponentFixture<PsiMildBehaviorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiMildBehaviorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiMildBehaviorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
