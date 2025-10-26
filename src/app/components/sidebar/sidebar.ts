import { Component } from '@angular/core';
import { Tab } from './tab/tab';

@Component({
  selector: 'app-sidebar',
  imports: [Tab],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {}
