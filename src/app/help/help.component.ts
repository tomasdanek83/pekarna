import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';
import { LoggingService } from '../logging.service';
import { Location } from '../model/location.model';
import { Locations } from '../model/locations';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  totalLocations: number;
  location: Location | undefined;

  constructor(
    private readonly router: Router,
    private readonly locationService: LocationService,
    private readonly loggingService: LoggingService) {
    this.totalLocations = Locations.filter(l => Boolean(l.question)).length;
  }

  ngOnInit(): void {
    this.location = this.locationService.location;
    this.loggingService.logEvent('Help', 'ViewEntered');
  }

  onFirstLocationNavigation(): void {
    this.router.navigate(['/nav-first']);
  }

  onShowWelcome(): void {
    this.router.navigate(['/welcome']);
  }
}
