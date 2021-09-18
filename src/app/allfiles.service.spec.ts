import { TestBed } from '@angular/core/testing';

import { AllfilesService } from './allfiles.service';

describe('AllfilesService', () => {
  let service: AllfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
