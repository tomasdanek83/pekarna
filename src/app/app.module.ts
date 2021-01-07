import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOverComponent } from './gameover/gameover.component';
import { HelpComponent } from './help/help.component';
import { LocationNavigationComponent } from './location-navigation/location-navigation.component';
import { LocationQuizComponent } from './location-quiz/location-quiz.component';
import { LocationTaskComponent } from './location-task/location-task.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventsComponent } from './eventlog/events/events.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationQuizComponent,
    HelpComponent,
    LocationTaskComponent,
    LocationNavigationComponent,
    GameOverComponent,
    WelcomeComponent,
    EventsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CookieService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
