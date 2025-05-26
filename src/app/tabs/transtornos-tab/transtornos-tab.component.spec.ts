import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstornosTabComponent } from './transtornos-tab.component';

describe('TranstornosTabComponent', () => {
  let component: TranstornosTabComponent;
  let fixture: ComponentFixture<TranstornosTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranstornosTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranstornosTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
