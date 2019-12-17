import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

export enum LogLevel {
  INFO,
  LOG,
  WARN,
  ERROR
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  public PROD = environment.production;

  log(level: LogLevel, ...msgs: Array<any>) {
    switch (level) {
      case LogLevel.INFO:
        if (!this.PROD) {
          console.info(...msgs);
        }
        break;
      case LogLevel.LOG:
        if (!this.PROD) {
          console.log(...msgs);
        }
        break;
      case LogLevel.WARN:
        if (!this.PROD) {
          console.warn(...msgs);
        }
        break;
      case LogLevel.ERROR:
        console.error(...msgs);
        break;
    }
  }
}
