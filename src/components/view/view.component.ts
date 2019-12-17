import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import CONSTANTS from 'src/shared/constants';
import { ViewService } from 'src/shared/services/view.service';
import { LocalStorageService } from 'src/shared/services/local-storage.service';

interface ViewState {
  activeView: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {
  private view$: Subscription;
  public state: ViewState = {
    activeView: CONSTANTS.MEDIA_TYPES.FACEBOOK
  };
  public STORE_NAME = 'app-view';
  public MEDIA_TYPES = CONSTANTS.MEDIA_TYPES;

  constructor(
    public viewService: ViewService,
    public localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.view$ = this.viewService.view.subscribe(view => {
      this.state.activeView = view;
      this.localStorageService.setUserLocalStorage('app-view', this.state);
    });

    this.state = this.localStorageService.getUserLocalStorage(this.STORE_NAME, this.state);
    this.viewService.changeView(this.state.activeView);
  }

  ngOnDestroy() {
    this.view$.unsubscribe();
  }
}
