import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormPanelService {
  public updateTabBorder: Subject<null>;

  constructor() {
    this.updateTabBorder = new Subject();
  }

  updateTabBorderPosition() {
    this.updateTabBorder.next();
  }
}
