import { TestBed } from '@angular/core/testing';

import { JSONDataService } from './jsondata.service';

describe('JSONDataService', () => {
  let service: JSONDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
