import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuIsquemiaHachinskiComponent } from './neu-isquemia-hachinski.component';

describe('NeuIsquemiaHachinskiComponent', () => {
  let component: NeuIsquemiaHachinskiComponent;
  let fixture: ComponentFixture<NeuIsquemiaHachinskiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuIsquemiaHachinskiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuIsquemiaHachinskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
