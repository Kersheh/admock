import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subject } from 'rxjs';
import moment from 'moment';

import { FormPanelService } from 'src/components/shared/form-panel/form-panel.service';

interface TabForm {
  name: string;
}

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.scss']
})
export class FormPanelComponent implements OnInit {
  private static tabNameIncrement = 0;
  public tabs: Array<TabForm>;
  public tabIndex: number;
  public updateAdRenderPanel = new Subject<number>();

  constructor(
    public activatedRoute: ActivatedRoute,
    public formPanelService: FormPanelService
  ) {
    this.tabs = [{
      name: `${moment().format('YYYY-MM-DD')}-new-ad-${FormPanelComponent.tabNameIncrement}`
    }];
    this.tabIndex = 0;
  }

  ngOnInit(): void {
    // retrieve active form panel media type
    this.activatedRoute.data.subscribe(data => {
      console.log(`Form panel active media type: ${data}`);
    });

    // listens for event to force tab border animation to reset position
    this.formPanelService.updateTabBorder.subscribe(() => {
      const index = this.tabIndex;
      setTimeout(() => this.tabIndex = 0, 550);
      setTimeout(() => this.tabIndex = index, 600);
    });
  }

  tabChange(tabChangeEvent: MatTabChangeEvent): void {
    // create new tab if last create tab selected
    if(tabChangeEvent.index === this.tabs.length) {
      this.tabs.push({
        name: `${moment().format('YYYY-MM-DD')}-new-ad-${++FormPanelComponent.tabNameIncrement}`
      });
      setTimeout(() => this.tabIndex = this.tabs.length - 1);
    } else {
      this.tabIndex = tabChangeEvent.index;
    }

    // update child ad render panel view on tab change
    this.updateAdRenderPanel.next(this.tabIndex);
  }

  removeTab($event: MouseEvent | KeyboardEvent): void {
    if(
      $event instanceof MouseEvent ||
      $event instanceof KeyboardEvent &&
      ($event.key === 'Enter' || $event.key === ' ')
    ) {
      $event.preventDefault();

      const index = this.tabIndex;
      // update tabIndex position and tabs list
      this.tabIndex = index > 1 ? index - 1 : 0;
      this.tabs = this.tabs.filter((_, i) => i !== index);

      // update child ad render panel view on tab remove
      this.updateAdRenderPanel.next(this.tabIndex);
    }
  }
}
