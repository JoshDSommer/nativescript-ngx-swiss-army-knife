import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinct, startWith } from 'rxjs/operators';
import {
  connectionType as ConnectionType,
  getConnectionType,
  startMonitoring,
  stopMonitoring
} from 'tns-core-modules/connectivity';

export {
  connectionType as ConnectionType
} from 'tns-core-modules/connectivity';

@Injectable()
export class CurrentConnectionService {
  monitorConnection() {
    return new Observable<ConnectionType>(observer => {
      startMonitoring(connection => {
        observer.next(connection);
      });

      return () => {
        stopMonitoring();
      };
    }).pipe(
      startWith(getConnectionType()),
      distinct()
    );
  }
}
