import { TestBed } from '@angular/core/testing';

import { FormPanelService } from './form-panel.service';

describe('FormPanelService', () => {
  let service: FormPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
