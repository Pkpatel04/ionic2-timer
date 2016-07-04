import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  constructor(private viewController: ViewController) {}
  closeSettings() {
    this.viewController.dismiss();
  }
}
