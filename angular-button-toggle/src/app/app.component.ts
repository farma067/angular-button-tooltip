import { Component, OnInit }   from '@angular/core';
import { ButtonToggleService } from './services/button-toggle.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
 
})
export class AppComponent implements OnInit  {
  public _tooltipToggle: boolean;
  private _subscription: Subscription = new Subscription();
  constructor(public buttonToggleService: ButtonToggleService) {
  }
  ngOnInit(){
    this._subscription.add(this.buttonToggleService.isButtonToggleObservable().subscribe(val=>{
      this._tooltipToggle=val;
    }));

  }
}