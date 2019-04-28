import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ConfigService } from './config.service';

@Injectable()
export class FirebaseService {
  firestore: firebase.firestore.Firestore;
  constructor(private configService: ConfigService) {
    this.initApp();
    this.firestore = firebase.firestore();
  }

  private initApp() {
    const config = this.configService.getConfig();
    firebase.initializeApp(config.firebase);
  }
}
