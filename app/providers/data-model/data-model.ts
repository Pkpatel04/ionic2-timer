import { Injectable } from '@angular/core';
import { Timer, CountdownObj } from '../../interfaces/timer';
import * as moment from 'moment';

@Injectable()
export class DataModel {

  private defaultTimer : Timer = {
    id: -1,
    title: 'Timer',
    description: '',
    datetime: moment()
  };

  private defaultCountdownObjArr : CountdownObj[] = [
    {unit: 'years', amount: 0},
    {unit: 'weeks', amount: 0},
    {unit: 'months', amount: 0},
    {unit: 'hours', amount: 0},
    {unit: 'minutes', amount: 0},
    {unit: 'seconds', amount: 0}
  ];

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
    Object.assign(timer, this.defaultTimer); // copy by value

    // pseudo-random id
    timer.id = Math.floor(Math.random() * 1000000);
    // now
    timer.datetime = moment().format();

    return timer;
  }

  /**
  *   Get a countdown stub.
  **/
  getDefaultCountdownObjArr() : CountdownObj[] {
    return JSON.parse(JSON.stringify(this.defaultCountdownObjArr)); // deep copy
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
  getCountdownObj(utcStr : string) : CountdownObj[] {
    let countdownObj : CountdownObj[] = this.getDefaultCountdownObjArr();
    return countdownObj;
  }

}
