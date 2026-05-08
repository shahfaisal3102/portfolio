import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            routes,
            withInMemoryScrolling({

                anchorScrolling: 'enabled',

                scrollPositionRestoration: 'enabled'

            })

        ),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
};
