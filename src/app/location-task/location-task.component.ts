import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { Locations } from '../model/locations';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-location-task',
  templateUrl: './location-task.component.html',
  styleUrls: ['./location-task.component.scss']
})
export class LocationTaskComponent implements OnInit, OnDestroy {

  location?: Location;
  totalLocations: number;

  private sub: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly loggingService: LoggingService) {
    this.totalLocations = Locations.filter(l => Boolean(l.question)).length;
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.location = Locations.find(t => t.id === params.id);

      this.loggingService.logEvent(`Task view visited: ${this.location?.id}`);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onTaskDone(): void {
    if (this.location?.nextLocationId) {
      this.router.navigate(['/location', this.location?.id, 'navigation']);
    } else {
      this.router.navigate(['/gameover']);
    }
  }
}
