import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';
import { LocationService } from './location.service';

export type LogEvent = 'ViewEntered' | 'LocationEntered' | 'AnswerEntered';

export type LogView = 'Root' | 'Help' | 'Welcome' | 'Quiz' | 'Task' | 'Navigation' | 'Gameover';

export interface EventLog {
  sessionId: string;
  locationId: string;
  view: LogView;
  event: LogEvent;
  details: string | null;
  userAgent: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private readonly sessionId: string;

  constructor(
    private readonly http: HttpClient,
    private readonly locationService: LocationService,
    private readonly deviceService: DeviceDetectorService) {
    this.sessionId = uuidv4();
  }

  logEvent(view: LogView, event: LogEvent, details?: string): void {

    const eventLog: EventLog = {
      sessionId: this.sessionId,
      locationId: this.locationService.location?.id ?? 'unknown',
      view: view,
      event: event,
      details: details ?? null,
      userAgent: this.deviceService.getDeviceInfo().userAgent
    };

    console.log('eventLog: ', eventLog);

    if (true || environment.production) {
      this.addEventLog(eventLog);

      if (event === 'LocationEntered') {
        this.sendEmail(eventLog);
      }
    }
  }

  private addEventLog(eventLog: EventLog): void {
    const endpoint = 'http://pekarna.dankovi.org/addeventlog.php';

    this.http.post(endpoint, eventLog)
      .subscribe(
        () => { },
        error => console.error('addEventLog error', error)
      );
  }

  private sendEmail(eventLog: EventLog) {
    const message = `<p>SessionId: ${eventLog.sessionId}</p>` +
      `<p>LocationId: ${eventLog.locationId}</p>` +
      `<p>${new Date().toLocaleString('cs-CZ')}</p>` +
      `<p>${JSON.stringify(this.deviceService.getDeviceInfo())}</p>`;

    let postVars = {
      message: message
    };

    const endpoint = 'http://pekarna.dankovi.org/sendmail.php';

    this.http.post(endpoint, postVars)
      .subscribe(
        () => { },
        error => console.error('Sendmail error', error)
      );
  }
}
