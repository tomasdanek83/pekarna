import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, delay, finalize, map } from 'rxjs/operators';
import { LoggingService } from '../logging.service';
import { EventLogUi } from '../model/eventlog.model';
import { EventLogMapper } from './eventlog.mapper';

export class EventLogDataSource implements DataSource<EventLogUi> {

  private eventsSubject = new BehaviorSubject<EventLogUi[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private loggingService: LoggingService) { }

  connect(collectionViewer: CollectionViewer): Observable<EventLogUi[]> {
    return this.eventsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.eventsSubject.complete();
    this.loadingSubject.complete();
  }

  loadEvents(sessionId: string): void {

    this.loadingSubject.next(true);

    this.loggingService.getEvents(sessionId).pipe(
      map(events => {
        return events.map(e => EventLogMapper.mapEventLog(e));
      }),
      delay(10000),
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(events => this.eventsSubject.next(events));
  }
}
