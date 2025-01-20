import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadPfefferComponent } from './actividad-pfeffer.component';

describe('ActividadPfefferComponent', () => {
  let component: ActividadPfefferComponent;
  let fixture: ComponentFixture<ActividadPfefferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadPfefferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadPfefferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
