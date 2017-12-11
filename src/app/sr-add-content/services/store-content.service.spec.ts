import { TestBed, inject } from '@angular/core/testing';

import { StoreContentService } from './store-content.service';

describe('StoreContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreContentService]
    });
  });

  it('should be created', inject([StoreContentService], (service: StoreContentService) => {
    expect(service).toBeTruthy();
  }));
});
