import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosFormsComponent } from './archivos-forms.component';

describe('ArchivosFormsComponent', () => {
  let component: ArchivosFormsComponent;
  let fixture: ComponentFixture<ArchivosFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivosFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivosFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
