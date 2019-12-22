import { BehaviorSubject } from 'rxjs';

import { UserService, User } from 'src/shared/services/user.service';

const user = new BehaviorSubject<User | null>(null);

const METHOD_RETURNS = {
  loadUser: undefined,
  clearUser: undefined
};

export default {
  test: {
    setMethodReturn: (method: string, val: any) => METHOD_RETURNS[method] = val,
    setTestUser: () => user.next({
      userID: 'abc123',
      email: 'john.smith@gmail.com',
      firstName: 'John',
      lastName: 'Smith',
      profileImage: ''
    })
  },
  provider: {
    provide: UserService,
    useClass: class {
      user = user;
      loadUser = jasmine.createSpy('loadUser')
        .and.callFake(() => METHOD_RETURNS.loadUser);
      clearUser = jasmine.createSpy('clearUser')
        .and.callFake(() => METHOD_RETURNS.clearUser);
    }
  }
};
