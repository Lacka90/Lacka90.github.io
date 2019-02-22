import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-row',
  templateUrl: './work-row.component.html',
  styleUrls: ['./work-row.component.scss']
})
export class WorkRowComponent {
  @Input() name: string;
  @Input() from: string;
  @Input() to: string;
  @Input() description: string;
}
