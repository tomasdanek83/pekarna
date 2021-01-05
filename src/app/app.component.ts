import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationService } from './location.service';
import { LoggingService } from './logging.service';
import { Location } from './model/location.model';
import { Locations } from './model/locations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Pekárna žije!';

  location$: Observable<Location | undefined>;
  totalLocations: number;

  private sub: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly locationService: LocationService,
    private readonly loggingService: LoggingService) {
    this.location$ = this.locationService.location$;
    this.totalLocations = this.locationService.totalLocations;
  }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(queryParams => {
      if (queryParams['location']) {

        const location = Locations.find(t => t.id === queryParams['location']);

        if (location) {
          this.locationService.setLocation(location);

          this.loggingService.logEvent('Root', 'LocationEntered');

          if (location.showWelcomeMessage && !this.locationService.getWelcomeDisplayed()) {
            this.router.navigate(['/welcome']);
            this.locationService.setWelcomeDisplayed();
          } else {
            this.router.navigate(['/quiz']);
          }
        }
      }
    });
  }

  onHelpClick(): void {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
