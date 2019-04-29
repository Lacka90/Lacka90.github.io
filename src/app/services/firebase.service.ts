import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import { ConfigService } from './config.service';
import { Subject } from 'rxjs';

@Injectable()
export class FirebaseService {
  database: firebase.database.Database;
  firestore: firebase.firestore.Firestore;
  visitors: Subject<number> = new Subject();
  constructor(private configService: ConfigService) {
    this.initApp();
    this.database = firebase.database();
    this.firestore = firebase.firestore();

    const listRef = this.database.ref('visitors');
    const userRef = listRef.push();

    const presenceRef = this.database.ref('.info/connected');
    presenceRef.on('value', snap => {
      if (snap.val()) {
        userRef.onDisconnect().remove();
        userRef.set(true);
      }
    });

    listRef.on('value', snap => {
      this.visitors.next(snap.numChildren());
    });
  }

  private initApp() {
    const config = this.configService.getConfig();
    firebase.initializeApp(config.firebase);
  }
}
