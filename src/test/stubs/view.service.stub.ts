import { ViewService } from 'src/shared/services/view.service';
import { Subject } from 'rxjs';

const OBSERVABLE_RETURNS = {
  view: new Subject<any>()
};

const METHOD_RETURNS = {
  changeView: undefined
};

export default {
  test: {
    setObservableReturn: (subscription: string, val: any) => OBSERVABLE_RETURNS[subscription].next(val),
    setMethodReturn: (method: string, val: any) => METHOD_RETURNS[method] = val
  },
  provider: {
    provide: ViewService,
    useClass: class {
      view = OBSERVABLE_RETURNS.view;
      changeView = jasmine.createSpy('changeView')
        .and.callFake(() => METHOD_RETURNS.changeView);
    }
  }
};
