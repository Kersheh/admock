import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

import { LoggerService, LogLevel } from 'src/shared/services/logger.service';

export class User {
  public userID: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public profileImage: string;

  constructor(user = {} as any) {
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.profileImage = user.profileImage;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = new BehaviorSubject<User | null>(null);

  constructor(
    private cookieService: CookieService,
    private loggerService: LoggerService
  ) {
    // this.loadUser();
  }

  loadUser(): void {
    const userCookie = this.cookieService.get('user');

    if(userCookie) {
      this.user.next(JSON.parse(userCookie));
      this.loggerService.log(LogLevel.INFO, `Loaded User cookie for userID ${this.user.value.userID}`);
    }

    // TODO: http request to backend
    const user = {
      userID: 'abc123',
      email: 'test.email@gmail.com',
      firstName: 'John',
      lastName: 'Smith',
      profileImage: 'https://some_url.com/to/profile/image.png'
    };
    this.user.next(user);

    if(this.user) {
      this.cookieService.set('user', JSON.stringify(user));
    }
  }

  clearUser(): void {
    this.user.next(null);
    this.cookieService.delete('user');
  }
}
