import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Authentication {
    private newShowSource = new Subject<boolean>();

    newShow = this.newShowSource.asObservable();

  constructor() { }
  changeShow(show: boolean) {
        this.newShowSource.next(show);
    }


}