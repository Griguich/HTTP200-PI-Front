import { TestBed } from '@angular/core/testing';

import { OrderMapperService } from './order-mapper.service';

describe('OrderMapperService', () => {
  let service: OrderMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
