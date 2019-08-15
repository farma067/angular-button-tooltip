import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonToggleService } from './services/button-toggle.service';
import { HelpButtonComponent } from './help-button/help-button.component';
import { TooltipModule } from 'ng2-tooltip-directive';



@NgModule({
  imports:      [ BrowserModule, FormsModule, TooltipModule ],
  declarations: [ AppComponent, HelpButtonComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ButtonToggleService]
})
export class AppModule { }
