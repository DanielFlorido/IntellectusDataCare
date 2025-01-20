import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QSMFComponent } from './qsm-f.component';

describe('QSMFComponent', () => {
  let component: QSMFComponent;
  let fixture: ComponentFixture<QSMFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QSMFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QSMFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
