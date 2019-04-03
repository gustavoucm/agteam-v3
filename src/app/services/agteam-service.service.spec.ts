import { TestBed } from '@angular/core/testing';

import { AgteamService } from './agteam.service';

describe('AgteamServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgteamService = TestBed.get(AgteamService);
    expect(service).toBeTruthy();
  });
});
