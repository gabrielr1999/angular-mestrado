import { TestBed } from '@angular/core/testing';

import { TailedBeastService } from './anime-services.service';

describe('TailedBeastService', () => {
  let service: TailedBeastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailedBeastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
