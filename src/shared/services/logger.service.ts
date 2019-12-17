import { Injectable } from '@angular/core';

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
  constructor() {}

  log(level: LogLevel, ...msgs: Array<any>) {
    switch (level) {
      case LogLevel.INFO:
        console.info(...msgs);
        break;
      case LogLevel.LOG:
        console.log(level);
        console.log(...msgs);
        break;
      case LogLevel.WARN:
        console.log(level);
        console.warn(...msgs);
        break;
      case LogLevel.ERROR:
        console.log(level);
        console.error(...msgs);
        break;
    }
  }
}
