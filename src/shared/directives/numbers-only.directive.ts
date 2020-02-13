import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {
  @HostListener('keypress', ['$event'])
  onKeydown($event: KeyboardEvent) {
    if(!/[0-9]/.test($event.key)) {
      $event.preventDefault();
    }
  }
}
