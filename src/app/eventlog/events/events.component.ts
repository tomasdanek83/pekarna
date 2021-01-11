import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from 'src/app/logging.service';
import { EventLogDataSource } from '../eventlog.datasource';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  displayedColumns: string[] = ['timestamp', 'location', 'view', 'event', 'details'];

  dataSource: EventLogDataSource;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly loggingService: LoggingService) {
    this.dataSource = new EventLogDataSource(loggingService);
  }

  ngOnInit(): void {
    const sessionId = this.route.snapshot.params.sessionId;

    console.log('Events route sessionId', sessionId);

    this.dataSource.loadEvents(sessionId ?? this.loggingService.sessionId, Boolean(sessionId));
  }
}

