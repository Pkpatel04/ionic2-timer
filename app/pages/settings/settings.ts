import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { DataModel } from '../../providers/data-model/data-model';
import { Timer } from '../../types/timer';

@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {

  public timer : Timer;

  public globals : {};

  constructor(
    private viewController: ViewController,
    private dataModel: DataModel,
    private navParams: NavParams
  ) {
    this.timer = this.navParams.get('timer');
    this.globals = this.dataModel.getGlobals();
  }

  /**
  *   Close the modal, either with the data just edited or empty.
  *   @param save:  Have we clicked Cancel (false) or OK (true)?
  **/
  closeSettings(save : boolean = false) {
    let timer = save ? this.timer : undefined;
    this.viewController.dismiss(timer);
  }

  removeTimer() {
    let success = this.dataModel.removeTimer(this.timer.id);
    success && this.closeSettings();
  }
}
