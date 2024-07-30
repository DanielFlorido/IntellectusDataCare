import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiquiatriaComponent } from './psiquiatria.component';

describe('PsiquiatriaComponent', () => {
  let component: PsiquiatriaComponent;
  let fixture: ComponentFixture<PsiquiatriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsiquiatriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsiquiatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
