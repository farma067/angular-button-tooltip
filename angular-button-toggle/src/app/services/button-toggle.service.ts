import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ButtonToggleService {

  private _isButtonToggleEvent = new BehaviorSubject<boolean>(false);
  private _isButtonToggleObservable: Observable<boolean>;
  
  
  constructor() {
    this._isButtonToggleObservable =  this._isButtonToggleEvent.asObservable();
  } 

  enable() {
      this._isButtonToggleEvent.next(true);   
  }

  disable() {
    this._isButtonToggleEvent.next(false);
  }

  isButtonToggleObservable() : Observable<boolean> {
     return this._isButtonToggleObservable;
  }

}