import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './model/location.model';
import { Locations } from './model/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly locationSubject = new BehaviorSubject<Location | undefined>(undefined);
  private welcomeDisplayed = false;

  totalLocations: number;

  location$ = this.locationSubject.asObservable();

  get location(): Location | undefined {
    return this.locationSubject.value;
  }

  constructor() {
    this.totalLocations = Locations.filter(l => Boolean(l.question)).length;
  }

  setLocation(value: Location | undefined): void {
    this.locationSubject.next(value);
  }

  getFirstLocation(): Location | undefined {
    return Locations.find(l => l.index === 1);
  }

  getWelcomeDisplayed(): boolean {
    return this.welcomeDisplayed;
  }

  setWelcomeDisplayed(): void {
    this.welcomeDisplayed = true;
  }
}
