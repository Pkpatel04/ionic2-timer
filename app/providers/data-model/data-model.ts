import { Injectable } from '@angular/core';
import { Timer, Countdown } from '../../types/timer';
import * as moment from 'moment';

@Injectable()
export class DataModel {

  private timers : Timer[] = [];
  private countdown : Countdown;

  private globals = {
    minDate: moment([moment().year() - 100]).toObject().years,
    maxDate: moment([moment().year() + 100]).toObject().years
  };

  constructor() {}

  /**
  *   Get a timer stub.
  **/
  getNewTimer() : Timer {
    return new Timer();
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

  /**
  *   Start countdown.
  **/
  startCountdown(timer : Timer) {
    timer.countdown = this.getCountdownObj(timer.datetime);
  }

  /**
  *   Return countdown object like:
  *   [{unit: 'years', amount: 4}, ... ,{unit: 'seconds', amount: 55}]
  *   @params utcStr: UTC string with time to count down since or until
  *   @returns countdownObj: type is defined in timer.d.ts
  **/
  getCountdownObj(utcStr : string) : Countdown {
    return new Countdown(utcStr);
  }

}
