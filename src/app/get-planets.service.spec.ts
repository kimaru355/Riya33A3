import { TestBed } from '@angular/core/testing';

import { GetPlanetsService } from './get-planets.service';

describe('GetPlanetsService', () => {
  let service: GetPlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
