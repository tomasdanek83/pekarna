import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { Locations } from '../model/locations';

@Component({
  selector: 'app-location-navigation',
  templateUrl: './location-navigation.component.html',
  styleUrls: ['./location-navigation.component.scss']
})
export class LocationNavigationComponent implements OnInit, OnDestroy {

  location?: Location;
  private sub: any;

  constructor(
    private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      const currentLocation = Locations.find(l => l.id === id);

      this.location = Locations.find(l => l.id === currentLocation?.nextLocationId);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
