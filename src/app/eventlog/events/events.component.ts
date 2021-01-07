import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventLog, LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  $events?: Observable<EventLog[]>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly loggingService: LoggingService) { }

  ngOnInit(): void {
    console.log('Events', this.route.snapshot.params.sessionId);

    this.$events = this.loggingService.getEvents(this.route.snapshot.params.sessionId);
    this.$events.subscribe(events => {
      console.log(events);
    });
  }
}

