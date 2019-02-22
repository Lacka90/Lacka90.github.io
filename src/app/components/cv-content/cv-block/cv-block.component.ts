import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-block',
  templateUrl: './cv-block.component.html',
  styleUrls: ['./cv-block.component.scss']
})
export class CvBlockComponent {
  @Input() icon = '';
}
