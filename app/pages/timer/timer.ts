import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'build/pages/timer/timer.html',
})
export class TimerPage {
  constructor(private nav: NavController) {

  }

  openSettings() {
    let modal = Modal.create(SettingsPage);
    this.nav.present(modal);
  }
}
