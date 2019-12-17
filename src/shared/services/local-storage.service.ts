import { Injectable } from '@angular/core';

import { LoggerService, LogLevel } from 'src/shared/services/logger.service';

interface Store {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private activeUser: string | null = null;
  private store: Store = {};

  constructor(
    private logger: LoggerService
  ) {
    // testing without user system
    this.activeUser = 'testUser';

    this.loadUserLocalStorage();
  }

  loadUserLocalStorage(): void {
    const store = JSON.parse(localStorage.getItem(this.activeUser));
    this.store = store ? store : {};

    this.logger.log(LogLevel.INFO, `Loaded local storage for user ${this.activeUser}`, this.store);
  }

  setUserLocalStorage(key: string, value: any): void {
    this.store[key] = value;
    localStorage.setItem(this.activeUser, JSON.stringify(this.store));
  }

  getUserLocalStorage(key: string, defaultVal: any = {}): any {
    return this.store[key] ? this.store[key] : defaultVal;
  }
}
