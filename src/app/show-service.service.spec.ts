import { TestBed } from '@angular/core/testing';

import { ShowServiceService } from './show-service.service';

describe('ShowServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowServiceService = TestBed.get(ShowServiceService);
    expect(service).toBeTruthy();
  });
});
