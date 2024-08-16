import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfogeneralComponent } from './infogeneral.component';

describe('InfogeneralComponent', () => {
  let component: InfogeneralComponent;
  let fixture: ComponentFixture<InfogeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfogeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfogeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
