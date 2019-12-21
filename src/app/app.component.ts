import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

import CONSTANTS from 'src/shared/constants';
import { LocalStorageService } from 'src/shared/services/local-storage.service';

// import project info
import info from 'src/../package.json';

// import language json ahead of time
import defaultLanguage from 'src/assets/lang/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public titleService: Title,
    public translate: TranslateService,
    public router: Router,
    public localStorageService: LocalStorageService
  ) {
    // initialize translator
    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang('en');

    // set browser title
    this.translate.get('APP_TITLE').subscribe(title => {
      this.titleService.setTitle(`${title} — v${info.version}`);
    });

    // app view router redirecting and previously stored routes
    const VIEW_STORE_NAME = 'app-view';
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if(event.urlAfterRedirects === '/') {
        this.router.navigate([CONSTANTS.MEDIA_TYPES.FACEBOOK]);
      }

      if(event.url === '/' && event.id === 1) {
        const storedView = this.localStorageService.getUserLocalStorage(VIEW_STORE_NAME, {
          activeView: CONSTANTS.MEDIA_TYPES.FACEBOOK
        });
        this.router.navigate([storedView.activeView]);
      }

      if(event.url.length > 1) {
        this.localStorageService.setUserLocalStorage(VIEW_STORE_NAME, {
          activeView: event.url.slice(1)
        });
      }
    });
  }
}
