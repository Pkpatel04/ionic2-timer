import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { DataModel } from '../../providers/data-model/data-model';
import { Event } from '../../interfaces/event';

@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {

  public event : Event;

  constructor(
    private viewController: ViewController,
    private navParams: NavParams,
    private dataModel: DataModel
  ) {
    this.event = this.navParams.get('event') || this.dataModel.getDefaultEvent();
  }

  closeSettings(save : boolean = false) {
    let event = save ? this.event : undefined;
    this.viewController.dismiss(event);
  }
}
