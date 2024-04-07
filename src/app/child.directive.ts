import { Directive } from '@angular/core';

@Directive({
  selector: '[appChild]',
  standalone: true
})
export class ChildDirective {

  constructor() { }

}
