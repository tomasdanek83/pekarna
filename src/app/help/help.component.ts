import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../logging.service';
import { Locations } from '../model/locations';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  totalLocations: number;

  constructor(
    private readonly router: Router,
    private readonly loggingService: LoggingService) {
    this.totalLocations = Locations.filter(l => Boolean(l.question)).length;
  }

  ngOnInit(): void {
    this.loggingService.logEvent('Help view visited');
  }

  onFirstLocationNavigation(): void {
    this.router.navigate(['/location', 'nicota', 'navigation']);
  }
}
