import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasntornosSelectorComponent } from './trasntornos-selector.component';

describe('TrasntornosSelectorComponent', () => {
  let component: TrasntornosSelectorComponent;
  let fixture: ComponentFixture<TrasntornosSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrasntornosSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrasntornosSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
