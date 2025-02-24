import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuIfsComponent } from './neu-ifs.component';

describe('NeuIfsComponent', () => {
  let component: NeuIfsComponent;
  let fixture: ComponentFixture<NeuIfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuIfsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuIfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
