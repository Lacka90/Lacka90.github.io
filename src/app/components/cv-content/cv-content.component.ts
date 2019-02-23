import { Component, OnInit } from '@angular/core';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import LayerVector from 'ol/layer/Vector';
import Map from 'ol/Map';
import { transform } from 'ol/proj';
import SourceVector from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import View from 'ol/View';
import { tap } from 'rxjs/operators';
import { FirebaseService } from 'src/app/services/firebase.service';

const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 0.75,
    scale: 0.1,
    src: '/assets/marker.png',
  }),
});

@Component({
  selector: 'app-cv-content',
  templateUrl: './cv-content.component.html',
  styleUrls: ['./cv-content.component.scss'],
})
export class CvContentComponent implements OnInit {
  map: Map;
  vectorSource: SourceVector;
  locations$;
  allowMap = false;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.createMap();
    this.createMarkersLayer();

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.firebaseService.addLocation(coords);
      this.allowMap = true;
    });

    this.locations$ = this.firebaseService.getLocations().pipe(
      tap(locs => {
        this.removeAllMarkers();
        locs.map((l, index) => {
          this.addMarker(l.id, l.longitude, l.latitude);
          if (index + 1 === locs.length) {
            this.map.getView().setCenter(transform([l.longitude, l.latitude], 'EPSG:4326', 'EPSG:3857'));
          }
        });
      }),
    );
  }

  createMap() {
    this.vectorSource = new SourceVector();
    const vectorLayer = new LayerVector({
      source: this.vectorSource,
      style: iconStyle,
    });
    this.map = new Map({
      controls: [],
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
        vectorLayer,
      ],
      view: new View({
        center: [0, 0],
        zoom: 10,
      }),
    });
  }

  createMarkersLayer() {}

  addMarker(id: string, longitude: number, latitude: number) {
    const p = transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857');
    const iconFeature = new Feature({
      geometry: new Point(p),
      id,
      name: 'Null Island ' + id,
      population: 4000,
      rainfall: 500,
    });
    this.vectorSource.addFeature(iconFeature);
  }

  removeAllMarkers() {
    this.vectorSource.forEachFeature(f => {
      this.vectorSource.removeFeature(f);
    });
  }
}
