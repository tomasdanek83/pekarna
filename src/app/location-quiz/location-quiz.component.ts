import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { Locations } from 'src/app/model/locations';

@Component({
  selector: 'app-location-quiz',
  templateUrl: './location-quiz.component.html',
  styleUrls: ['./location-quiz.component.scss']
})
export class LocationQuizComponent implements OnInit, OnDestroy {
  location?: Location;
  welcomeMessageDismissed = false;
  hint1opened = false;
  hint2opened = false;

  form: FormGroup;
  answerControl = new FormControl(null, Validators.required);

  private sub: any;

  get answerFieldType(): string {
    return this.location ? (this.location.answerTolerance ? 'number' : 'string') : ''; 
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    fb: FormBuilder) { 
      this.form = fb.group({
        answer: this.answerControl
      });
    }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.location = Locations.find(t => t.id === params.id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onWelcomeMessageDismiss(): void {
    this.welcomeMessageDismissed = true;
  }

  onShowTask(): void {
    this.router.navigate(['/location', this.location?.id, 'task']);
  }

  onAnswerEntered(): void {
    if(this.location?.answerTolerance) {
      const answer: number = +this.answerControl.value;
    } else {
      const answer: string = this.answerControl.value;

      if(answer?.toLocaleLowerCase() === this.location?.answer) {
        this.correctAnswer(answer);
      } else {
        this.incorrectAnswer(answer);
      }
    }
  }

  private isNumericAnswerCorrect(answer: number): boolean {
    return true;
  }

  private isTextAnswerCorrect(answer: string): boolean {
    return true;
  }

  private correctAnswer(answer: string | number): void {
    console.log('Correct answer: ', answer);
  }

  private incorrectAnswer(answer: string | number): void {
    console.log('Incorrect answer: ', answer);
  }
}
