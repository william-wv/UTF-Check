import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-main',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './card-main.html',
  styleUrls: ['./card-main.scss']
})


export class CardMainComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() status: 'done' | 'partial' | 'not-started' = 'not-started';

  get bgColor(): string {
    switch (this.status) {
      case 'done': return 'card-green';
      case 'partial': return 'card-yellow';
      default: return 'card-red';
    }
  }
}

export class CardMain {
}
