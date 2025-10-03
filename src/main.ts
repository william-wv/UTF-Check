import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigComponent } from './app/app.config.component';
import { App } from './app/app';

bootstrapApplication(App, appConfigComponent)
  .catch((err) => console.error(err));
