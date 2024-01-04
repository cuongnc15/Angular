import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HttpClientInMemoryWebApiModule,
    CommonModule,
    HeroesComponent,
    RouterOutlet,
    FormsModule,
    MessagesComponent,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
}
