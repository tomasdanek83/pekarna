import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LocationQuizComponent } from './location-quiz/location-quiz.component';
import { HelpComponent } from './help/help.component';
import { LocationTaskComponent } from './location-task/location-task.component';
import { LocationNavigationComponent } from './location-navigation/location-navigation.component';
import { GameOverComponent } from './gameover/gameover.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationQuizComponent,
    HelpComponent,
    LocationTaskComponent,
    LocationNavigationComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
