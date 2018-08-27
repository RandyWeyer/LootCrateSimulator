import { TestBed, inject } from '@angular/core/testing';

import { LootBoxService } from './loot-box.service';

describe('LootBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LootBoxService]
    });
  });

  it('should ...', inject([LootBoxService], (service: LootBoxService) => {
    expect(service).toBeTruthy();
  }));
});
