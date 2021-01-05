import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';
import { LocationService } from './location.service';

export type LogEvent = 'ViewEntered' | 'SessionCreated' | 'AnswerEntered';

export type LogView = 'App' | 'Help' | 'Welcome' | 'Quiz' | 'Task' | 'Navigation' | 'Gameover';
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

  private static readonly cookieName = 'pekarna';

  private readonly sessionId: string;

  constructor(
    private readonly http: HttpClient,
    private readonly locationService: LocationService,
    private readonly deviceService: DeviceDetectorService,
    readonly cookieService: CookieService) {
    const cookie: string = cookieService.get(LoggingService.cookieName);

    if (cookie) {
      this.sessionId = cookie;
    } else {
      this.sessionId = uuidv4();

      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 6);
      this.cookieService.set(LoggingService.cookieName, this.sessionId, expirationDate);

      this.logEvent('App', 'SessionCreated');
    }
  }

  logEvent(view: LogView, event: LogEvent, details?: string): void {

    const eventLog: EventLog = {
      sessionId: this.sessionId,
      locationId: this.locationService.location?.id ?? 'unknown',
      view,
      event,
      details: details ?? null,
      userAgent: this.deviceService.getDeviceInfo().userAgent
    };

    console.log('eventLog: ', eventLog);

    if (environment.production) {
      this.addEventLog(eventLog);

      if (event === 'SessionCreated') {
        this.sendEmail(eventLog);
      }
    }
  }

  private addEventLog(eventLog: EventLog): void {
    const endpoint = 'http://pekarna.dankovi.org/api/addlogevent.php';

    this.http.post(endpoint, eventLog)
      .subscribe(
        () => { },
        error => console.error('addEventLog error', error)
      );
  }

  private sendEmail(eventLog: EventLog): void {
    const message = `<p>SessionId: ${eventLog.sessionId}</p>` +
      `<p>${new Date().toLocaleString('cs-CZ')}</p>` +
      `<p>${JSON.stringify(this.deviceService.getDeviceInfo())}</p>`;

    const postVars = {
      message
    };

    const endpoint = 'http://pekarna.dankovi.org/api/sendmail.php';

    this.http.post(endpoint, postVars)
      .subscribe(
        () => { },
        error => console.error('Sendmail error', error)
      );
  }
}
