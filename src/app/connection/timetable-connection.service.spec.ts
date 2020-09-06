import { TestBed } from '@angular/core/testing';

import { TimetableConnectionService } from './timetable-connection.service';

describe('TimetableConnectionService', () => {
  let service: TimetableConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimetableConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
