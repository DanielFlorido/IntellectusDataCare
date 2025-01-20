import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnaSfComponent } from './mna-sf.component';

describe('MnaSfComponent', () => {
  let component: MnaSfComponent;
  let fixture: ComponentFixture<MnaSfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MnaSfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MnaSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
