import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

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
    public translate: TranslateService
  ) {
    // initialize translator
    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang('en');

    // set browser title
    this.translate.get('APP_TITLE').subscribe(title => {
      this.titleService.setTitle(`${title} — v${info.version}`);
    });
  }
}
