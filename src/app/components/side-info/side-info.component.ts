import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-side-info',
  templateUrl: './side-info.component.html',
  styleUrls: ['./side-info.component.scss'],
})
export class SideInfoComponent {
  visitors$ = this.firebaseService.visitors;
  skills = [
    { name: 'Angular', value: 0.9 },
    { name: 'TypeScript', value: 0.9 },
    { name: 'NodeJS', value: 0.85 },
    { name: 'Javascript', value: 0.8 },
    { name: 'React', value: 0.7 },
    { name: 'VueJs', value: 0.6 },
  ];

  constructor(private firebaseService: FirebaseService) {}
}
