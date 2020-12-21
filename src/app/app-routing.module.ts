import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameOverComponent } from './gameover/gameover.component';
import { HelpComponent } from './help/help.component';
import { LocationNavigationComponent } from './location-navigation/location-navigation.component';
import { LocationQuizComponent } from './location-quiz/location-quiz.component';
import { LocationTaskComponent } from './location-task/location-task.component';

const routes: Routes = [
  {path: 'location/:id', component: LocationQuizComponent},
  {path: 'location/:id/task', component: LocationTaskComponent},
  {path: 'location/:id/navigation', component: LocationNavigationComponent},
  {path: 'gameover', component: GameOverComponent},
  {path: '', component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
