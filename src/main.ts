import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {

  providers: [
    provideRouter(
      routes,

      withInMemoryScrolling({

        anchorScrolling: 'enabled',

        scrollPositionRestoration: 'enabled'
      })
    )
  ]
});
