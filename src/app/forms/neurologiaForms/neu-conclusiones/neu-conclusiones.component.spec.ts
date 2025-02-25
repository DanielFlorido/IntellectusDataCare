import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuConclusionesComponent } from './neu-conclusiones.component';

describe('NeuConclusionesComponent', () => {
  let component: NeuConclusionesComponent;
  let fixture: ComponentFixture<NeuConclusionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuConclusionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuConclusionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
