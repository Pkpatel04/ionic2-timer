import { Injectable } from '@angular/core';
import { Timer } from '../../interfaces/timer';
import * as moment from 'moment';

@Injectable()
export class DataModel {

  private defaultTimer : Timer = {
    id: -1,
    title: 'Title',
    description: '',
    startDate: moment().format(), // maintains local time zone
    endDate: moment().format()    // maintains local time zone
  };

  private timers : Timer[] = [];

  private globals = {
    minDate: moment([moment().year() - 100]).toObject().years,
    maxDate: moment([moment().year() + 100]).toObject().years
  };

  constructor() {}

  /**
  *   Get a timer stub.
  **/
  getDefaultTimer() : Timer {
    let timer : Timer = <any>{};
    Object.assign(timer, this.defaultTimer);

    // pseudo-random id
    timer.id = Math.floor(Math.random() * 1000000);

    return timer;
  }

  /**
  *   Push a timer onto the stack.
  *   @param timer: timer to push
  **/
  pushTimer(timer: Timer) {
    this.timers.push(timer);
  }

  /**
  *   Replace the timer at the given index.
  *   @param index: index of timer to replace
  *   @param timer: timer to replace
  **/
  replaceTimer(index : number, timer : Timer) : boolean {
    let success = this.timers.splice(index, 1, timer);
    return success.length > 0 ? true : false;
  }

  /**
  *   Return all timers.
  **/
  getTimers() : Timer[] {
    return this.timers;
  }

  /**
  *   Return all globals.
  **/
  getGlobals() : any {
    return this.globals;
  }

}
