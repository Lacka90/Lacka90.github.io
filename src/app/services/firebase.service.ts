import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ConfigService } from './config.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FirebaseService {
  firestore: firebase.firestore.Firestore;
  visitorsCollection: firebase.firestore.CollectionReference;
  locations$ = new BehaviorSubject([]);
  constructor(private configService: ConfigService) {
    this.initApp();
    this.firestore = firebase.firestore();
    this.visitorsCollection = this.firestore.collection('visitors');
  }

  addLocation(coords: Coordinates) {
    this.visitorsCollection.add({
      altitude: coords.altitude,
      longitude: coords.longitude,
      latitude: coords.latitude,
      accuracy: coords.accuracy,
      date: new Date(),
    });
  }
  removeLocation(id: string) {
    this.visitorsCollection.doc(id).delete();
  }

  getLocations() {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    this.visitorsCollection.where('date', '>=', date).onSnapshot(snapshot => {
      const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      this.locations$.next(docs);
    });
    return this.locations$.asObservable();
  }

  private initApp() {
    const config = this.configService.getConfig();
    firebase.initializeApp(config.firebase);
  }
}
