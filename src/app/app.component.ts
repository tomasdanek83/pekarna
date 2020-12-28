import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'pekarna';

  private sub: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(queryParams => {
      if(queryParams['location']) {
        this.router.navigate(['/location', queryParams['location']]);
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
