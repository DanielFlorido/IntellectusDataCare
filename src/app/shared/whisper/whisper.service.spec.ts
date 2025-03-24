import { TestBed } from '@angular/core/testing';

import { WhisperService } from './whisper.service';

describe('WhisperService', () => {
  let service: WhisperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhisperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
