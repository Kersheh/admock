import { TestBed } from '@angular/core/testing';

import { LoggerService, LogLevel } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(LoggerService);

    spyOn(console, 'info');
    spyOn(console, 'log');
    spyOn(console, 'warn');
    spyOn(console, 'error');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log for each level in dev env', () => {
    service.PROD = false;
    const logMsg = 'Test msg';

    Object.values(LogLevel).forEach(level => {
      service.log(level, logMsg);
    });

    expect(console.info).toHaveBeenCalledWith(logMsg);
    expect(console.log).toHaveBeenCalledWith(logMsg);
    expect(console.warn).toHaveBeenCalledWith(logMsg);
    expect(console.error).toHaveBeenCalledWith(logMsg);
  });

  it('should only log for error in prod env', () => {
    service.PROD = true;
    const logMsg = 'Test msg';

    Object.values(LogLevel).forEach(level => {
      service.log(level, logMsg);
    });

    expect(console.info).not.toHaveBeenCalledWith(logMsg);
    expect(console.log).not.toHaveBeenCalledWith(logMsg);
    expect(console.warn).not.toHaveBeenCalledWith(logMsg);
    expect(console.error).toHaveBeenCalledWith(logMsg);
  });
});
