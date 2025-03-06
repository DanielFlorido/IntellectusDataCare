import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceNavegacionComponent } from './indice-navegacion.component';

describe('IndiceNavegacionComponent', () => {
  let component: IndiceNavegacionComponent;
  let fixture: ComponentFixture<IndiceNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceNavegacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
