import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';
import { LoggingService } from '../logging.service';
import { Location } from '../model/location.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  readonly totalLocations: number;

  location: Location | undefined;

  constructor(
    private readonly router: Router,
    private readonly locationService: LocationService,
    private readonly loggingService: LoggingService) {
    this.totalLocations = this.locationService.totalLocations;
  }

  ngOnInit(): void {
    this.location = this.locationService.location || this.locationService.getFirstLocation();

    this.loggingService.logEvent('Welcome', 'ViewEntered');
  }

  onStartGame(): void {
    this.router.navigate(['/quiz']);
  }
}
