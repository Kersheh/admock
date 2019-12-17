import { NgModule } from '@angular/core';

// imports
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// app config
import { AppMaterialModule } from './app-material.module';
import { AppTranslateModule } from './app-translate.module';
import { AppComponent } from './app.component';

// components
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { ViewComponent } from 'src/components/view/view.component';
import { FooterComponent } from 'src/components/footer/footer.component';

// shared components
import { SocialMediaIconComponent } from 'src/components/shared/social-media-icon/social-media-icon.component';

@NgModule({
  imports: [
    AppMaterialModule,
    AppTranslateModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    SocialMediaIconComponent,
    ViewComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
