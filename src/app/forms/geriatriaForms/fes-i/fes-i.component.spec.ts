import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FesIComponent } from './fes-i.component';

describe('FesIComponent', () => {
  let component: FesIComponent;
  let fixture: ComponentFixture<FesIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FesIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FesIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
