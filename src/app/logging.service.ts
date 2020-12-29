import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private readonly deviceService: DeviceDetectorService) { }

  logEvent(text: string): void {
    console.log('log: ', text, this.deviceService.getDeviceInfo());
  }
}
