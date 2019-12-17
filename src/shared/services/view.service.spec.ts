import { TestBed } from '@angular/core/testing';

import { ViewService } from './view.service';

describe('ViewService', () => {
  let service: ViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should broadcast view change to observable ', done => {
    const updatedView = 'instagram';
    const view$ = service.view.subscribe(update => {
      expect(update).toEqual(updatedView);
      view$.unsubscribe();
      done();
    });

    service.changeView(updatedView);
  });
});
