import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { CurrentConnectionModule } from 'nativescript-ngx-swiss-army-knife';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    CurrentConnectionModule.forRoot()
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
