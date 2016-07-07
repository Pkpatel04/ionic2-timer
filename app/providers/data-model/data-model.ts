import { Injectable } from '@angular/core';
import { Timer } from '../../interfaces/timer';
import * as moment from 'moment';

@Injectable()
export class DataModel {

  private defaultTimer : Timer = {
    id: -1,
    title: 'Timer',
    description: '',
    startDate: moment(),
    endDate: moment()
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
    // now
    timer.startDate = moment().format();
    timer.endDate = moment().format();

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
  *   Remove the timer with the given timerId.
  *   @param timerId
  **/
  removeTimer(timerId : number) {
    let success = false;
    let index = this.timers.findIndex((t) => t.id === timerId);

    if (index > -1) {
      success = true;
      this.timers.splice(index, 1);
    }

    return success;
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
