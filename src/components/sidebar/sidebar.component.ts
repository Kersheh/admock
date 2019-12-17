import { Component, OnInit } from '@angular/core';

import CONSTANTS from 'src/shared/constants';
import { LocalStorageService } from 'src/shared/services/local-storage.service';
import { ViewService } from 'src/shared/services/view.service';

interface SidebarState {
  isCollapsed: boolean;
  category: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public state: SidebarState = {
    isCollapsed: false,
    category: CONSTANTS.MEDIA_TYPES.FACEBOOK
  };
  public MEDIA_TYPES = CONSTANTS.MEDIA_TYPES;

  constructor(
    private localStorageService: LocalStorageService,
    private viewService: ViewService
  ) {}

  ngOnInit() {
    this.state = this.localStorageService.getUserLocalStorage('app-sidebar', this.state);
  }

  toggleCollapse(): void {
    this.state.isCollapsed = !this.state.isCollapsed;
    this.localStorageService.setUserLocalStorage('app-sidebar', this.state);
  }

  setMediaType(mediaType: string): void {
    this.state.category = mediaType;
    this.localStorageService.setUserLocalStorage('app-sidebar', this.state);

    this.viewService.changeView(mediaType);
  }
}
