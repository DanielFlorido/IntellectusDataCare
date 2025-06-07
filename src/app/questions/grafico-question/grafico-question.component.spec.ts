import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoQuestionComponent } from './grafico-question.component';

describe('GraficoQuestionComponent', () => {
  let component: GraficoQuestionComponent;
  let fixture: ComponentFixture<GraficoQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
