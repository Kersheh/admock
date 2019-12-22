import { LoggerService } from 'src/shared/services/logger.service';

export default {
  test: {},
  provider: {
    provide: LoggerService,
    useClass: class {
      log = jasmine.createSpy('log').and.callFake(() => {});
    }
  }
};
