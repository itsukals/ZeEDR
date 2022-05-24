import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as moment from 'moment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TimestampModule {

  public static timestampToSchedule(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const date_number = "0" + date.getDate();
    const month = "0" + date.getMonth();
    const year = date.getFullYear();
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    return date_number.slice(-2) + "/" + month.slice(-2) + "/" + year + " " + hours.slice(-2) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);   
  }

  public static scheduleToTimestamp(schedule: string) {
    return moment(schedule).unix()
  }
}
