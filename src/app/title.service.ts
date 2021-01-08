import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private titleSubject = new BehaviorSubject<string | undefined>(undefined);
  title$ = this.titleSubject.asObservable();

  constructor(private readonly browserTitleService: Title) { }

  setTitle(title: string): void {
    this.titleSubject.next(title);
    this.browserTitleService.setTitle(`${title} - Pekárna žije!`);
  }
}
