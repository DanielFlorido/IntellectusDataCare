import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionSocialComponent } from './valoracion-social.component';

describe('ValoracionSocialComponent', () => {
  let component: ValoracionSocialComponent;
  let fixture: ComponentFixture<ValoracionSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoracionSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoracionSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
