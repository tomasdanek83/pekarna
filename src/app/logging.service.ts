import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';
import { LocationService } from './location.service';
import { EventLog, LogEvent, LogView } from './model/eventlog.model';

const endpointBaseUrl = 'http://pekarna.dankovi.org/api';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private static readonly cookieName = 'pekarna';

  private sessionId?: string;

  constructor(
    private readonly http: HttpClient,
    private readonly locationService: LocationService,
    private readonly deviceService: DeviceDetectorService,
    private readonly cookieService: CookieService) { }

  createOrUseSession(): void {
    const cookie: string = this.cookieService.get(LoggingService.cookieName);

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
      SESSION_ID: this.sessionId ?? '',
      LOCATION_ID: this.locationService.location?.id ?? 'unknown',
      VIEW: view,
      EVENT: event,
      DETAILS: details ?? null,
      USER_AGENT: this.deviceService.getDeviceInfo().userAgent
    };

    console.log('eventLog: ', eventLog);

    if (environment.production) {
      this.addEventLog(eventLog);

      if (event === 'SessionCreated') {
        this.sendEmail(eventLog);
      }
    }
  }

  getEvents(sessionId: string): Observable<EventLog[]> {
    return this.http.get<EventLog[]>(`${endpointBaseUrl}/getlogevents.php?sessionId=${sessionId}`);
  }

  private addEventLog(eventLog: EventLog): void {
    const endpoint = `${endpointBaseUrl}/addlogevent.php`;

    this.http.post(endpoint, eventLog)
      .subscribe(
        () => { },
        error => console.error('addEventLog error', error)
      );
  }

  private sendEmail(eventLog: EventLog): void {
    const eventsUrl = `http://pekarna.dankovi.org/?sessionId=${eventLog.SESSION_ID}`;

    const message = `<p>SessionId: ${eventLog.SESSION_ID}</p>` +
      `<p>${new Date().toLocaleString('cs-CZ')}</p>` +
      `<p><a href="${eventsUrl}">${eventsUrl}</p>` +
      `<p>${JSON.stringify(this.deviceService.getDeviceInfo())}</p>`;

    const postVars = {
      message
    };

    const endpoint = `${endpointBaseUrl}/sendmail.php`;

    this.http.post(endpoint, postVars)
      .subscribe(
        () => { },
        error => console.error('Sendmail error', error)
      );
  }
}
