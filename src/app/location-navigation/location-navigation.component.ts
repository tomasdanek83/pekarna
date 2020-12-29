import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { LoggingService } from '../logging.service';
import { Locations } from '../model/locations';

@Component({
  selector: 'app-location-navigation',
  templateUrl: './location-navigation.component.html',
  styleUrls: ['./location-navigation.component.scss']
})
export class LocationNavigationComponent implements OnInit, OnDestroy {

  currentLocation?: Location;
  nextLocation?: Location;
  private sub: any;

  get encodedCoords(): string | null {
    const coords = this.nextLocation?.coordinates;
    return coords ? encodeURIComponent(coords) : null;
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly loggingService: LoggingService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.currentLocation = Locations.find(l => l.id === params.id);
      this.nextLocation = Locations.find(l => l.id === this.currentLocation?.nextLocationId);

      this.loggingService.logEvent(`Navigation view visited: ${this.currentLocation?.id}`);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
