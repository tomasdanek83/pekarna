import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pekarna';

  constructor(private readonly router: Router) {}

  onHelpClick(): void {
    console.log('onHelpClick');

    this.router.navigate(['']);
  }
}
