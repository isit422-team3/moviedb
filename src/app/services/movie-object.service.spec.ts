import { TestBed } from '@angular/core/testing';

import { MovieObjectService } from './movie-object.service';

describe('MovieObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieObjectService = TestBed.get(MovieObjectService);
    expect(service).toBeTruthy();
  });
});
