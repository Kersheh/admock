import { TestBed } from '@angular/core/testing';

import loggerServiceStub from 'src/test/stubs/logger.service.stub';
import userServiceStub from 'src/test/stubs/user.service.stub';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    spyOn(LocalStorageService.prototype, 'loadUserLocalStorage');

    TestBed.configureTestingModule({
      providers: [
        loggerServiceStub.provider,
        userServiceStub.provider
      ]
    });
    userServiceStub.test.setTestUser();
    service = TestBed.get(LocalStorageService);

    service.store = {};
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.loadUserLocalStorage).toHaveBeenCalledWith();
  });

  it('should set browser local storage', () => {
    service.activeUser = 'testUser';

    spyOn(localStorage, 'setItem');
    service.setUserLocalStorage('someKey', 'someVal');
    expect(localStorage.setItem).toHaveBeenCalledWith(service.activeUser, JSON.stringify(service.store));
  });

  it('should get local store for given key', () => {
    const storeProp = {
      someKey: 'someVal'
    };
    service.store = storeProp;

    const retrievedVal = service.getUserLocalStorage('someKey');
    expect(retrievedVal).toEqual(storeProp.someKey);
  });

  it('should get provided default value when key not found in local store', () => {
    const defaultReturn = 'someDefaultReturn';
    const retrievedVal = service.getUserLocalStorage('someKey', defaultReturn);
    expect(retrievedVal).toEqual(defaultReturn);
  });

  it('should get {} as  default value when key not found in local store', () => {
    const retrievedVal = service.getUserLocalStorage('someKey');
    expect(retrievedVal).toEqual({});
  });
});
