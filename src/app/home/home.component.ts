import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrentConnectionService } from 'nativescript-ngx-swiss-army-knife';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Subscription } from 'rxjs';
import * as app from 'tns-core-modules/application';

@Component({
  selector: 'Home',
  moduleId: module.id,
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private currentConnection: CurrentConnectionService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit() {
    this.subscription = this.currentConnection
      .monitorConnection()
      .subscribe(console.log);
  }

  ngOnDestroy() {
    // Init your component properties here.
    console.log('destroyed');
    this.subscription.unsubscribe();
  }

  onDrawerButtonTap() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
