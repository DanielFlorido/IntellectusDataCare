import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdsFormComponent } from './gds-form.component';

describe('GdsFormComponent', () => {
  let component: GdsFormComponent;
  let fixture: ComponentFixture<GdsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GdsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
