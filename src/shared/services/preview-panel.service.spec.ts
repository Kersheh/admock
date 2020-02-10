import { TestBed } from '@angular/core/testing';

import { PreviewPanelService } from './preview-panel.service';

describe('PreviewPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreviewPanelService = TestBed.get(PreviewPanelService);
    expect(service).toBeTruthy();
  });
});
