import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionesComponent } from './conclusiones.component';

describe('ConclusionesComponent', () => {
  let component: ConclusionesComponent;
  let fixture: ComponentFixture<ConclusionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConclusionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConclusionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
