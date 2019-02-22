import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-content',
  templateUrl: './cv-content.component.html',
  styleUrls: ['./cv-content.component.scss']
})
export class CvContentComponent implements OnInit {
  latitude = 47.492779;
  longitude = 19.051906;



  map: any;

  constructor() { }

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 8
      })
    });
  }

}
