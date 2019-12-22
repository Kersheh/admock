import { Injectable } from '@angular/core';

import { LoggerService, LogLevel } from 'src/shared/services/logger.service';
import { UserService, User } from 'src/shared/services/user.service';

interface Store {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public activeUser = 'default';
  public store: Store = {};

  constructor(
    private logger: LoggerService,
    private userService: UserService
  ) {
    this.userService.user.subscribe((user: User) => {
      if(user) {
        this.activeUser = user.userID;
        this.loadUserLocalStorage();
      }
    });
  }

  loadUserLocalStorage(): void {
    const store = JSON.parse(localStorage.getItem(this.activeUser));
    this.store = store ? store : {};

    this.logger.log(LogLevel.INFO, `Loaded local storage for userID ${this.activeUser}`, this.store);
  }

  setUserLocalStorage(key: string, value: any): void {
    this.store[key] = value;
    localStorage.setItem(this.activeUser, JSON.stringify(this.store));
  }

  getUserLocalStorage(key: string, defaultVal: any = {}): any {
    return this.store[key] ? this.store[key] : defaultVal;
  }
}
