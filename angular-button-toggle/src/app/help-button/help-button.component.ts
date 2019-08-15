import { Component, OnInit, OnDestroy }   from '@angular/core';
import { ButtonToggleService } from '../services/button-toggle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.css']
})
export class HelpButtonComponent implements OnInit, OnDestroy {

  _message: string;
  public _isButtonToggle: boolean;
  private _subscription: Subscription = new Subscription();


  constructor(public buttonToggleService: ButtonToggleService) {
    this.setMessage();
  }

  ngOnInit(){
    this._subscription.add(this.buttonToggleService.isButtonToggleObservable().subscribe(val=>{
      this._isButtonToggle=val;
    }));
  }

  setMessage() {  
      this._message = 'Help ' + (this._isButtonToggle ? 'enabled' : 'disabled');    
  }

  enable() {    
    this.buttonToggleService.enable();
    this.setMessage()
  }

  disable() {
    this.buttonToggleService.disable();
    this.setMessage();
  }

  ngOnDestroy(){
    this._subscription.unsubscribe();
  }

}
