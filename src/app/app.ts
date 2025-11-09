import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterOutlet_1 as RouterOutlet } from "../../node_modules/.pnpm/@angular+router@20.3.10_@angular+common@20.3.10_@angular+core@20.3.10_@angular+compiler_5b8ed3cd2f3b2fa3b99e33fd408b035d/node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, RouterOutlet_1],
})
export class App {
  title = signal('UTF-Check');
  password = '';
  username = '';
  isModalVisible = false;
  modalTitle = '';

  openModal(content: string) {
    this.modalTitle = content;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
