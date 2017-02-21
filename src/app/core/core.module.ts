import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";
import {BASE_RESOLVER_PROVIDERS} from "./base.resolvers";

export interface ICoreConfig {
    title: string;
}
export class CoreConfig implements ICoreConfig {
    title: string = 'Fun Times';
}

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: [SelectivePreloadingStrategy, BASE_RESOLVER_PROVIDERS]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: CoreConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                {provide: CoreConfig, useValue: config}
            ]
        };
    }
}