import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FijoComponent } from './fijo.component';

describe('FijoComponent', () => {
  let component: FijoComponent;
  let fixture: ComponentFixture<FijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
