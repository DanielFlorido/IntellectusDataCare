import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaGeneralComponent } from './categoria-general.component';

describe('CategoriaGeneralComponent', () => {
  let component: CategoriaGeneralComponent;
  let fixture: ComponentFixture<CategoriaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
