import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

export interface PreviewPanel {
  viewName: string;
  form: FormGroup;
  defaults: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class PreviewPanelService {
  public previewPanel: PreviewPanel = {} as PreviewPanel;
  public previewPanel$ = new Subject<PreviewPanel>();

  constructor() {}

  setForm(viewName = '', updatedForm: FormGroup, defaults: any) {
    this.previewPanel.viewName = viewName;
    this.previewPanel.form = updatedForm;
    this.previewPanel.defaults = defaults;

    this.previewPanel$.next(this.previewPanel);
  }
}
