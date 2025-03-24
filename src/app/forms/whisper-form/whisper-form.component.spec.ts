import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhisperFormComponent } from './whisper-form.component';

describe('WhisperFormComponent', () => {
  let component: WhisperFormComponent;
  let fixture: ComponentFixture<WhisperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhisperFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhisperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
