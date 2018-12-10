import { ModuleWithProviders, NgModule } from '@angular/core';
import { CurrentConnectionService } from './current-connection.service';

export { CurrentConnectionService } from './current-connection.service';

@NgModule()
export class CurrentConnectionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CurrentConnectionModule,
      providers: [CurrentConnectionService]
    };
  }
}
