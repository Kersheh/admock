import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppMaterialModule } from './app-material.module';
import { AppTranslateModule } from './app-translate.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { SocialMediaIconComponent } from '../components/shared/social-media-icon/social-media-icon.component';
import { ViewComponent } from '../components/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SocialMediaIconComponent,
    ViewComponent
  ],
  imports: [
    AppMaterialModule,
    AppTranslateModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
