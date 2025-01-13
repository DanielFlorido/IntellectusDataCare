import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaLawtonComponent } from './escala-lawton.component';

describe('EscalaLawtonComponent', () => {
  let component: EscalaLawtonComponent;
  let fixture: ComponentFixture<EscalaLawtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscalaLawtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaLawtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
