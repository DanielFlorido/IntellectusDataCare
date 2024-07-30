import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeriatriaComponent } from './geriatria.component';

describe('GeriatriaComponent', () => {
  let component: GeriatriaComponent;
  let fixture: ComponentFixture<GeriatriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeriatriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeriatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
