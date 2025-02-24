import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuForm1Component } from './neu-form-1.component';

describe('NeuForm1Component', () => {
  let component: NeuForm1Component;
  let fixture: ComponentFixture<NeuForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuForm1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
