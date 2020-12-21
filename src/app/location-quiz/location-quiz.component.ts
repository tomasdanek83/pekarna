import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { Locations } from 'src/app/model/locations';

@Component({
  selector: 'app-location-quiz',
  templateUrl: './location-quiz.component.html',
  styleUrls: ['./location-quiz.component.scss']
})
export class LocationQuizComponent implements OnInit, OnDestroy {
  location?: Location;
  welcomeMessageDismissed = false;
  hint1opened = false;
  hint2opened = false;

  private sub: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.location = Locations.find(t => t.id === params.id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onWelcomeMessageDismiss(): void {
    this.welcomeMessageDismissed = true;
  }

  onShowTask(): void {
    this.router.navigate(['/location', this.location?.id, 'task']);
  }
}
