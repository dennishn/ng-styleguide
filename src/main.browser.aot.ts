/*
 * Angular bootstraping
 */
import {platformBrowser} from '@angular/platform-browser';
import {decorateModuleRef} from './app/environment';
/*
 * App Module
 * our top level module that holds all of our components
 */
import {AppModuleNgFactory} from '../compiled/src/app/app.module.ngfactory';

if(ENV === 'production') {
    console.log('App is running in production, hello ServiceWorker');
    const swRuntime = require('offline-plugin/runtime');

    swRuntime.install({
        onInstalled: () => {
            console.log('SW Event:', 'onInstalled');
        },
        onUpdating: () => {
            console.log('SW Event:', 'onUpdating');
        },
        onUpdateReady: () => {
            console.log('SW Event:', 'onUpdateReady');
            // Tells to new SW to take control immediately
            swRuntime.applyUpdate();
        },
        onUpdated: () => {
            console.log('SW Event:', 'onUpdated');
            // Reload the webpage to load into the new version
            window.location.reload();
        },
        onUpdateFailed: () => {
            console.log('SW Event:', 'onUpdateFailed');
        }
    });
}

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
    return platformBrowser()
        .bootstrapModuleFactory(AppModuleNgFactory)
        .then(decorateModuleRef)
        .catch((err) => console.error(err));
}

export function bootstrapDomReady() {
    document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
