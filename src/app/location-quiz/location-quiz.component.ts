import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { LocationService } from '../location.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-location-quiz',
  templateUrl: './location-quiz.component.html',
  styleUrls: ['./location-quiz.component.scss']
})
export class LocationQuizComponent implements OnInit {
  location?: Location;
  showFieldAndHints = true;
  hint1opened = false;
  hint2opened = false;
  showAnswerButton = true;
  showTaskButton = false;
  showCorrectAnswerMessage = false;
  showIncorrectAnswerMessage = false;
  incorrectAnswerMessage: string | undefined;

  form: FormGroup;
  answerControl = new FormControl(null, Validators.required);

  get answerFieldType(): string {
    return this.location ? (this.location.answerTolerance ? 'number' : 'string') : '';
  }

  constructor(
    private readonly router: Router,
    private readonly locationService: LocationService,
    private readonly loggingService: LoggingService,
    fb: FormBuilder) {
    this.form = fb.group({
      answer: this.answerControl
    });
  }

  ngOnInit(): void {
    this.location = this.locationService.location;

    this.loggingService.logEvent('Quiz', 'ViewEntered');
  }

  onShowTask(): void {
    this.router.navigate(['/task']);
  }

  onAnswerEntered(): void {
    const answer = this.answerControl.value;

    if (this.isAnswerCorrect(answer)) {
      this.onCorrectAnswer(answer);
    } else {
      this.onIncorrectAnswer(answer);
    }

    this.loggingService.logEvent('Quiz', 'AnswerEntered', `'${answer}', hints: [${this.hint1opened}, ${this.hint2opened}]`);
  }

  onAnswerFocus(): void {
    this.showIncorrectAnswerMessage = false;
  }

  private isAnswerCorrect(answer: string | number): boolean {
    if (this.location?.answerTolerance) {
      return this.isNumericAnswerCorrect(+answer);
    } else {
      return this.isTextAnswerCorrect(String(answer));
    }
  }

  private isNumericAnswerCorrect(answer: number): boolean {
    const lower = Number(this.location?.answer) - Number(this.location?.answerTolerance);
    const upper = Number(this.location?.answer) + Number(this.location?.answerTolerance);

    return answer >= lower && answer <= upper;
  }

  private isTextAnswerCorrect(answer: string): boolean {
    const trimmedLowercaseAnswer = answer.trim()?.toLocaleLowerCase();

    return (this.location?.answer as string[]).some(a => a === trimmedLowercaseAnswer);
  }

  private onCorrectAnswer(answer: string | number): void {
    console.log('Correct answer: ', answer);
    this.showFieldAndHints = false;
    this.showIncorrectAnswerMessage = false;
    this.showCorrectAnswerMessage = true;
    this.showAnswerButton = false;
    this.showTaskButton = true;
  }

  private onIncorrectAnswer(answer: string | number): void {
    console.log('Incorrect answer: ', answer);

    if (this.hint1opened && this.hint2opened) {
      this.showFieldAndHints = false;
      this.incorrectAnswerMessage = `Nesprávná odpověď. Správná odpověď byla '${this.location?.answer}'. Můžete přejít k úkolu.`;
      this.showAnswerButton = false;
      this.showTaskButton = true;

    } else {
      this.incorrectAnswerMessage = `Nesprávná odpověď '${answer}'. Použijte nápovědu.`;
    }

    this.showIncorrectAnswerMessage = true;
  }
}
