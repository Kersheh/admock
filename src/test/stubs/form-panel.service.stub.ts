import { Subject } from 'rxjs';
import { FormPanelService } from 'src/components/shared/form-panel/form-panel.service';

const updateTabBorder = new Subject<null>();

const METHOD_RETURNS = {
  updateTabBorderPosition: () => updateTabBorder.next()
};

export default {
  test: {
    setMethodReturn: (method: string, val: any) => METHOD_RETURNS[method] = val
  },
  provider: {
    provide: FormPanelService,
    useClass: class {
      updateTabBorder = updateTabBorder;
      updateTabBorderPosition = jasmine.createSpy('FormPanelService')
        .and.callFake(() => METHOD_RETURNS.updateTabBorderPosition);
    }
  }
};
