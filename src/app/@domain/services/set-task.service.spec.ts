import { TestBed } from '@angular/core/testing';

import { SetTaskService } from './set-task.service';

describe('SetTaskService', () => {
  let service: SetTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
