import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { DataModel } from '../../providers/data-model/data-model';
import { Timer } from '../../interfaces/timer';
import * as moment from 'moment';

@Component({
  templateUrl: 'build/pages/timers/timers.html',
})
export class TimersPage {

  public timers : Timer[] = [];

  constructor(private nav: NavController, private dataModel: DataModel) {
    this.timers = this.dataModel.getTimers();
  }

  /**
  *   @param timer: the timer to edit. By default it is a timer stub with a unique id.
  **/
  openSettings(timer: Timer = this.dataModel.getDefaultTimer()) {
    let timerCopy = Object.assign({}, timer);
    let modal = Modal.create(SettingsPage, {timer: timerCopy});

    modal.onDismiss((timer : Timer) => {
      // data returned from Modal (i.e. not cancelled)
      if (timer) {
        let index = this.timers.findIndex((t) => t.id === timer.id);
        // existing event, so update
        if (index > -1) {
          this.dataModel.replaceTimer(index, timer);
        }
        // doesn't exist, so add to list
        else {
          this.dataModel.pushTimer(timer);
        }
        this.dataModel.startCountdown(timer);
      }
    });

    this.nav.present(modal);
  }
}
