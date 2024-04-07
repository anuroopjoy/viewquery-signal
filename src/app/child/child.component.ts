import { Component, OnInit, input } from '@angular/core';
import { ChildService } from '../child.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [ChildService, { provide: 'childToken', useValue: 'Text' }],
})
export class ChildComponent implements OnInit {
  name = input<string>('Initial');
  constructor(private childService: ChildService) {}

  ngOnInit(): void {
    this.childService.log();
  }
}
