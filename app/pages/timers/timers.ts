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

  public timers : Timer[] = [
    {id: 0, title: 'Leave for Europe', description: '', startDate: moment(), endDate: moment()},
    {id: 5, title: 'Going away party', description: '', startDate: moment(), endDate: moment()}
  ];

  constructor(private nav: NavController, private dataModel: DataModel) {}

  openSettings(timer: Timer = this.dataModel.getDefaultTimer()) {
    let timerCopy = Object.assign({}, timer);
    let modal = Modal.create(SettingsPage, {timer: timerCopy});
    modal.onDismiss((timer : Timer) => {
      // data returned from Modal (i.e. not cancelled)
      if (timer) {
        let index = this.timers.findIndex((t) => t.id === timer.id);
        if (index > -1) {
          this.timers.splice(index, 1, timer);
        }
        else {
          this.timers.push(timer);
        }
      }
      else {}
    });
    this.nav.present(modal);
  }
}
