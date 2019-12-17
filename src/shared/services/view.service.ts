import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  public view = new Subject<string>();

  changeView(view: string) {
    this.view.next(view);
  }
}
