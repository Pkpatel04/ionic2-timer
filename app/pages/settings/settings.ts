import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { DataModel } from '../../providers/data-model/data-model';
import { Timer } from '../../interfaces/timer';

@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {

  public timer : Event;

  constructor(
    private viewController: ViewController,
    private navParams: NavParams,
    private dataModel: DataModel
  ) {
    this.timer = this.navParams.get('timer') || this.dataModel.getDefaultTimer();
  }

  closeSettings(save : boolean = false) {
    let timer = save ? this.timer : undefined;
    this.viewController.dismiss(timer);
  }
}
