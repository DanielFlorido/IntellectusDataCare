import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropsicologiaComponent } from './neuropsicologia.component';

describe('NeuropsicologiaComponent', () => {
  let component: NeuropsicologiaComponent;
  let fixture: ComponentFixture<NeuropsicologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuropsicologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuropsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
