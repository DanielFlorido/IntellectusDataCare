import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosTabComponent } from './archivos-tab.component';

describe('ArchivosTabComponent', () => {
  let component: ArchivosTabComponent;
  let fixture: ComponentFixture<ArchivosTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivosTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivosTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
