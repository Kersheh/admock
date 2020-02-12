import { LocalStorageService } from 'src/shared/services/local-storage.service';

const METHOD_RETURNS = {
  loadUserLocalStorage: () => {},
  setUserLocalStorage: () => {},
  getUserLocalStorage: () => {}
};

export default {
  test: {
    setMethodReturn: (method: string, val: any) => METHOD_RETURNS[method] = val
  },
  provider: {
    provide: LocalStorageService,
    useClass: class {
      loadUserLocalStorage = jasmine.createSpy('loadUserLocalStorage')
        .and.callFake(() => METHOD_RETURNS.loadUserLocalStorage);
      setUserLocalStorage = jasmine.createSpy('setUserLocalStorage')
        .and.callFake(() => METHOD_RETURNS.setUserLocalStorage);
      getUserLocalStorage = jasmine.createSpy('getUserLocalStorage')
        .and.callFake(() => METHOD_RETURNS.getUserLocalStorage);
    }
  }
};
