import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsValueComponent } from './options-value.component';

describe('OptionsValueComponent', () => {
  let component: OptionsValueComponent;
  let fixture: ComponentFixture<OptionsValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
