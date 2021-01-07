import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocationService } from './location.service';
import { Location } from './model/location.model';
import { Locations } from './model/locations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  location$: Observable<Location | undefined>;
  totalLocations: number;

  private sub: any;

  private titleSubject = new BehaviorSubject<string | undefined>(undefined);
  title$ = this.titleSubject.asObservable();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly locationService: LocationService,
    private readonly titleService: Title) {
    this.location$ = this.locationService.location$;
    this.totalLocations = this.locationService.totalLocations;
  }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(queryParams => {
      if (queryParams['location']) {

        const location = Locations.find(t => t.id === queryParams['location']);

        if (location) {
          this.locationService.setLocation(location);

          this.titleSubject.next(this.getLocationTitle(location));
          this.titleService.setTitle(`${this.getLocationTitle(location)} - Pekárna žije!`);

          if (location.showWelcomeMessage && !this.locationService.getWelcomeDisplayed()) {
            this.router.navigate(['/welcome']);
            this.locationService.setWelcomeDisplayed();
          } else {
            this.router.navigate(['/quiz']);
          }
        }
      } else if (queryParams["sessionId"]) {
        this.titleSubject.next('Moje cesta');
        this.titleService.setTitle('Moje cesta - Pekárna žije!');
        this.router.navigate(['/events', queryParams["sessionId"]]);
      }
    });
  }

  getLocationTitle(location: Location): string {
    return `${location.name} (${location.index}/${this.totalLocations})`;
  }

  onHelpClick(): void {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
