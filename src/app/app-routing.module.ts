import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './eventlog/events/events.component';
import { GameOverComponent } from './gameover/gameover.component';
import { HelpComponent } from './help/help.component';
import { LocationNavigationComponent } from './location-navigation/location-navigation.component';
import { LocationQuizComponent } from './location-quiz/location-quiz.component';
import { LocationTaskComponent } from './location-task/location-task.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'quiz', component: LocationQuizComponent },
  { path: 'task', component: LocationTaskComponent },
  { path: 'nav-next', component: LocationNavigationComponent },
  { path: 'nav-first', component: LocationNavigationComponent, data: { toFirst: true } },
  { path: 'gameover', component: GameOverComponent },
  { path: 'events/:sessionId', component: EventsComponent },
  { path: 'events', component: EventsComponent },
  { path: '', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
