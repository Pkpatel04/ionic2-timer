import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { DataModel } from '../../providers/data-model/data-model';
import { Event } from '../../interfaces/event';
import * as moment from 'moment';

@Component({
  templateUrl: 'build/pages/events/events.html',
})
export class EventPage {

  public events : Event[] = [
    {id: 0, title: 'Leave for Europe', description: '', startDate: moment(), endDate: moment()},
    {id: 5, title: 'Going away party', description: '', startDate: moment(), endDate: moment()}
  ];

  constructor(private nav: NavController, private dataModel: DataModel) {}

  openSettings(event: Event = this.dataModel.getDefaultEvent()) {
    let eventCopy = Object.assign({}, event);
    let modal = Modal.create(SettingsPage, {event: eventCopy});
    modal.onDismiss((data : Event) => {
      if (data) {
        let event = this.events.filter((event) => event.id === data.id);
        if (event.length > 0) {
          // update
          Object.assign(event, data);
        }
        else {
          // add
          this.events.push(data);
        }
      }
    });
    this.nav.present(modal);
  }
}
