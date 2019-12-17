import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material.module';
import { AppTranslateModule } from './app-translate.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from 'src/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    AppMaterialModule,
    AppTranslateModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
