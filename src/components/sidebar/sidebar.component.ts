import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'lodash';

import CONSTANTS from 'src/shared/constants';
import { LocalStorageService } from 'src/shared/services/local-storage.service';
// import { UserService, User } from 'src/shared/services/user.service';
// import { LoginDialogComponent } from 'src/components/shared/login-dialog/login-dialog.component';

interface SidebarState {
  isCollapsed: boolean;
  category: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public state: SidebarState = {
    isCollapsed: false,
    category: CONSTANTS.MEDIA_TYPES.FACEBOOK
  };
  public isLoggedIn = false;
  public showProfileMenu = false;
  public lockProfileMenuBtn = false;
  // public user$: Subscription;
  public router$: Subscription;

  public STORE_NAME = 'app-sidebar';
  public MEDIA_TYPE_VIEWS = map(CONSTANTS.MEDIA_TYPES);
  public MEDIA_TYPE_TRANSLATIONS = {
    [CONSTANTS.MEDIA_TYPES.FACEBOOK]: 'MEDIA_TYPE_FACEBOOK',
    [CONSTANTS.MEDIA_TYPES.INSTAGRAM]: 'MEDIA_TYPE_INSTAGRAM',
    [CONSTANTS.MEDIA_TYPES.TWITTER]: 'MEDIA_TYPE_TWITTER',
    [CONSTANTS.MEDIA_TYPES.GOOGLE_SEARCH]: 'MEDIA_TYPE_GOOGLE_SEARCH',
    [CONSTANTS.MEDIA_TYPES.GOOGLE_DISPLAY]: 'MEDIA_TYPE_GOOGLE_DISPLAY',
    [CONSTANTS.MEDIA_TYPES.PINTEREST]: 'MEDIA_TYPE_PINTEREST',
    [CONSTANTS.MEDIA_TYPES.SNAPCHAT]: 'MEDIA_TYPE_SNAPCHAT',
    [CONSTANTS.MEDIA_TYPES.LINKEDIN]: 'MEDIA_TYPE_LINKEDIN',
    [CONSTANTS.MEDIA_TYPES.TIKTOK]: 'MEDIA_TYPE_TIKTOK'
  };

  constructor(
    public localStorageService: LocalStorageService,
    // public userService: UserService,
    public router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.state = this.localStorageService.getUserLocalStorage(this.STORE_NAME, this.state);

    // this.user$ = this.userService.user.subscribe((user: User) => {
    //   this.isLoggedIn = user ? true : false;
    // });

    this.router$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.state.category = event.url.slice(1);
      this.localStorageService.setUserLocalStorage(this.STORE_NAME, this.state);
    });
  }

  ngOnDestroy() {
    // this.user$.unsubscribe();
    this.router$.unsubscribe();
  }

  toggleCollapse(): void {
    this.showProfileMenu = false;
    this.state.isCollapsed = !this.state.isCollapsed;
    this.localStorageService.setUserLocalStorage(this.STORE_NAME, this.state);

    // this.lockProfileMenuBtn = true;
    // timer(600).subscribe(() => this.lockProfileMenuBtn = false);
  }

  setView(view: string): void {
    console.log(view);
    this.state.category = view;
    this.localStorageService.setUserLocalStorage(this.STORE_NAME, this.state);
  }

  // toggleProfileMenu(): void {
  //   if(!this.isLoggedIn) {
  //     this.dialog.open(LoginDialogComponent, {
  //       width: '50%',
  //       minWidth: '320px',
  //       height: '320px',
  //       minHeight: '320px'
  //     }).afterClosed().subscribe(() => {});
  //   } else {
  //     if(!this.lockProfileMenuBtn) {
  //       this.showProfileMenu = !this.showProfileMenu;
  //     }
  //   }
  // }
  //
  // openProfile(): void {
  //   this.toggleProfileMenu();
  //
  //   this.setView(this.VIEWS.PROFILE);
  //   this.viewService.changeView(this.VIEWS.PROFILE);
  // }
  //
  // logout(): void {
  //   this.toggleProfileMenu();
  //
  //   if(this.state.category === this.VIEWS.PROFILE) {
  //     this.setView(this.VIEWS.FACEBOOK);
  //   }
  //
  //   this.userService.clearUser();
  // }
}
