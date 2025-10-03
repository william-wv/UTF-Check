import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardMain, CardMainComponent} from './components/cards/card-main/card-main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})


export class App {
  protected readonly title = signal('UTF-Check');
}
