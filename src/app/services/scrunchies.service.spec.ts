import { TestBed } from '@angular/core/testing';

import { ScrunchiesService } from './scrunchies.service';

describe('ScrunchiesService', () => {
  let service: ScrunchiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrunchiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
