import { TestBed } from '@angular/core/testing';
import { MovieObjectService } from './movie-object.service';
import { HttpClientModule }    from '@angular/common/http';

describe('MovieObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: MovieObjectService = TestBed.get(MovieObjectService);
    expect(service).toBeTruthy();
  });
});
