import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopBangComponent } from './stop-bang.component';

describe('StopBangComponent', () => {
  let component: StopBangComponent;
  let fixture: ComponentFixture<StopBangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopBangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopBangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
