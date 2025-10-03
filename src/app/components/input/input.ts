import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.html',
  styleUrls: ['./input.scss']
})
export class AppInputComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() type: string = 'text';

  // Two-way binding
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(newValue: string) {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
export { Input };

