import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { LocationService } from '../location.service';
import { LoggingService } from '../logging.service';
import { Locations } from '../model/locations';

@Component({
  selector: 'app-location-navigation',
  templateUrl: './location-navigation.component.html',
  styleUrls: ['./location-navigation.component.scss']
})
export class LocationNavigationComponent implements OnInit {

  nextLocation?: Location;

  get encodedCoords(): string | null {
    const coords = this.nextLocation?.coordinates;
    return coords ? encodeURIComponent(coords) : null;
  }

  constructor(
    private readonly locationService: LocationService,
    private readonly loggingService: LoggingService,
    route: ActivatedRoute,) {
    if (route.snapshot.data.toFirst) {
      this.nextLocation = this.locationService.getFirstLocation();
    } else {
      this.nextLocation = Locations.find(l => l.id === this.locationService?.location?.nextLocationId);
    }
  }

  ngOnInit(): void {
    this.loggingService.logEvent('Navigation', 'ViewEntered', `NextLocation: ${this.nextLocation?.id}`);
  }
}
