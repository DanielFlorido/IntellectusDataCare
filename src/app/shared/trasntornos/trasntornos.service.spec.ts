import { TestBed } from '@angular/core/testing';

import { TrasntornosService } from './trasntornos.service';

describe('TrasntornosService', () => {
  let service: TrasntornosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrasntornosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
