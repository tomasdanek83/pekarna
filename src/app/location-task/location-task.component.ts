import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { LocationService } from '../location.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-location-task',
  templateUrl: './location-task.component.html',
  styleUrls: ['./location-task.component.scss']
})
export class LocationTaskComponent implements OnInit {

  location?: Location;

  constructor(
    private readonly router: Router,
    private readonly locationService: LocationService,
    private readonly loggingService: LoggingService) {
  }

  ngOnInit(): void {
    this.location = this.locationService.location;

    this.loggingService.logEvent('Task', 'ViewEntered');
  }

  onTaskDone(): void {
    if (this.location?.nextLocationId) {
      this.router.navigate(['/nav-next']);
    } else {
      this.router.navigate(['/gameover']);
    }
  }
}
