import { TestBed } from '@angular/core/testing';

import { CochesMockService } from './coches-mock.service';

describe('PlatosMockService', () => {
  let service: CochesMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CochesMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
