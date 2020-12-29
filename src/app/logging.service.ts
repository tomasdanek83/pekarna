import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(
    private readonly http: HttpClient,
    private readonly deviceService: DeviceDetectorService) { }

  logEvent(message: string): void {
    console.log('log: ', message, this.deviceService.getDeviceInfo());

    this.sendEmail(
      `<p>${message}</p>
    <p>${new Date().toLocaleString('cs-CZ')}</p>
    <p>${JSON.stringify(this.deviceService.getDeviceInfo())}</p>`);
  }

  private sendEmail(message: string) {
    let postVars = {
      message: message
    };

    const endpoint = 'http://pekarna.dankovi.org/sendmail.php';

    this.http.post(endpoint, postVars)
      .subscribe(
        () => { },
        error => console.error('Sendmail error', error)
      )
  }
}
