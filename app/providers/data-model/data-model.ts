import { Injectable } from '@angular/core';
import { Timer } from '../../interfaces/timer';
import * as moment from 'moment';

@Injectable()
export class DataModel {

  public defaultTimer : Timer = {
    id: -1,
    title: 'Title',
    description: '',
    startDate: moment(),
    endDate: moment()
  };

  constructor() {}

  getDefaultTimer() : Timer {
    let timer : Timer = <any>{};
    Object.assign(timer, this.defaultTimer);
    return timer;
  }

}
