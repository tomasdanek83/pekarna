import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from 'src/app/logging.service';
import { TitleService } from 'src/app/title.service';
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
    private readonly titleService: TitleService,
    loggingService: LoggingService) {
    this.titleService.setTitle('Moje cesta Pekárnou');
    this.dataSource = new EventLogDataSource(loggingService);
  }

  ngOnInit(): void {
    console.log('Events', this.route.snapshot.params.sessionId);

    this.dataSource.loadEvents(this.route.snapshot.params.sessionId);
  }
}

