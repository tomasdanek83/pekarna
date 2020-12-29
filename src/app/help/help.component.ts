import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly loggingService: LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logEvent('Help view visited');
  }

  onFirstLocationNavigation(): void {
    this.router.navigate(['/location', 'nicota', 'navigation']);
  }
}
