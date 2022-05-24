import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { iEdr } from 'src/interfaces/i-edr';
import { EdrService } from 'src/service/edr/edr.service';
import { TimestampModule } from "src/tools/timestamp/timestamp.module";

@Component({
  selector: 'app-edr',
  templateUrl: './edr.component.html',
  styleUrls: ['./edr.component.scss']
})
export class EdrComponent implements OnInit {
  @Input() IN_EDR_DATA: iEdr;

  FORM_GRP_GET_EDR: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              public EDR_SERVICE: EdrService) {}

  async ngOnInit() {
    this.getDataEdr(new HttpParams())
    this.initGrpFormEdr()
  }
  /*
  id
  data_type
  computer_windows_id
  min
  max
  */
  initGrpFormEdr() {
    this.FORM_GRP_GET_EDR = this.formBuilder.group({
      id: [""],
      data_type: [""],
      computer_windows_id: [""],

      min_date: [""],
      min_time: [""],

      max_date: [""],
      max_time: [""]
    })
  }

  onSubmitFormEdr() {
    console.log(this.FORM_GRP_GET_EDR.value);

    let params = new HttpParams();

    if(this.FORM_GRP_GET_EDR.value.id != "") {
      params = params.append("id", this.FORM_GRP_GET_EDR.value.id);
    }

    if(this.FORM_GRP_GET_EDR.value.data_type != "") {
      params = params.append("data_type", this.FORM_GRP_GET_EDR.value.data_type);
    }

    if(this.FORM_GRP_GET_EDR.value.computer_windows_id != "") {
      params = params.append("computer_windows_id", this.FORM_GRP_GET_EDR.value.computer_windows_id);
    }

    if(this.FORM_GRP_GET_EDR.value.min_date != "") {
      let date_time_min = this.FORM_GRP_GET_EDR.value.min_time == "" ? this.FORM_GRP_GET_EDR.value.min_date : this.FORM_GRP_GET_EDR.value.min_date + " " + this.FORM_GRP_GET_EDR.value.min_time
      let timestamp_min = TimestampModule.scheduleToTimestamp(date_time_min);
      params = params.append("min", timestamp_min);
    }

    if(this.FORM_GRP_GET_EDR.value.max_date != "") {
      let date_time_max = this.FORM_GRP_GET_EDR.value.max_time == "" ? this.FORM_GRP_GET_EDR.value.max_date : this.FORM_GRP_GET_EDR.value.max_date + " " + this.FORM_GRP_GET_EDR.value.max_time
      let timestamp_max = TimestampModule.scheduleToTimestamp(date_time_max);
      params = params.append("max", timestamp_max);
    }

    console.log("params ----> ", params);
    this.getDataEdr(params);
}

  getDataEdr(params: HttpParams) {
    this.EDR_SERVICE.getEdrData(params).subscribe(response => { 
      this.IN_EDR_DATA = response;
      if(this.IN_EDR_DATA.success) {
        this.IN_EDR_DATA.body?.forEach((data) => {
          data.created_timestamp = TimestampModule.timestampToSchedule(parseInt(data.created_timestamp))
        })
      }
    });
  }

}
