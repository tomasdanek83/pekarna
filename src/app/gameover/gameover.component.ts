import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.scss']
})
export class GameOverComponent implements OnInit {

  constructor(private readonly loggingService: LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logEvent('Gameover', 'ViewEntered');
  }
}
