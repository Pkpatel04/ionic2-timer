import { Injectable } from '@angular/core';
import { Event } from '../../interfaces/event';
import * as moment from 'moment';

@Injectable()
export class DataModel {

  public defaultEvent : Event = {
    id: -1,
    title: 'Title',
    description: '',
    startDate: moment(),
    endDate: moment()
  };

  constructor() {}

  getDefaultEvent() : Event {
    let event : Event = <any>{};
    Object.assign(event, this.defaultEvent);
    return event;
  }

}
