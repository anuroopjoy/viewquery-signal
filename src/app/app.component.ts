import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  effect,
  viewChild,
  viewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ChildDirective } from './child.directive';
import { ChildService } from './child.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, ChildDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  title = 'viewquery-signal';
  useInline = false;
  names = ['SubComponent', 'SubComponent1', 'SubComponent2'];
  name = 'SubComponent';
  childComponent = viewChild(ChildComponent);
  childDirective = viewChild(ChildDirective);
  childService = viewChild(ChildService);
  childTemplate = viewChild(TemplateRef);
  childToken = viewChild('childToken');
  childVar = viewChild('elem');
  childComponents = viewChildren(ChildComponent);

  constructor() {
    effect(() => {
      console.log('Viewchild changed');
      console.log(this.childVar());
    });
    effect(() => {
      console.log('Viewchildren changed');
      console.log(this.childComponents());
    });
  }
  ngOnInit(): void {
    console.log('inside OnInit');
    console.log(this.childComponent());
  }

  ngAfterViewInit(): void {
    console.log('inside AfterViewInit');
    console.log(this.childComponents());
    console.log(this.childComponent());
    console.log(this.childDirective());
    console.log(this.childTemplate());
    console.log(this.childService());
    this.childService()?.log();
    console.log(this.childToken());
    console.log(this.childVar());
    setTimeout(() => {
      this.useInline = true;
    }, 3000);
    setTimeout(() => {
      this.names.push('SubComponent3');
    }, 6000);
  }
  ngAfterViewChecked(): void {
    console.log('inside AfterViewChecked');
  }
}
