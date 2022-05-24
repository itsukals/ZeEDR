import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { iEdrBody } from 'src/interfaces/i-edr';
import { iVirustotal } from 'src/interfaces/virustotal';
import { VirustotalService } from '../../service/virustotal/virustotal.service';

@Component({
  selector: 'app-virustotal',
  templateUrl: './virustotal.component.html',
  styleUrls: ['./virustotal.component.scss']
})
export class VirustotalComponent implements OnInit {

  @Output() OUT_VIRUSTOTAL_HASH = new EventEmitter<iEdrBody>();
  @Input() INPUT_EDR_BODY: iEdrBody;

  VIRUSTOTAL_DATA: iVirustotal;

  constructor(private modalService: NgbModal,
              private VIRUSTOTAL_SERVICE: VirustotalService) { }

  closeResult: string = '';

  ngOnInit() {
    this.OUT_VIRUSTOTAL_HASH.emit(this.INPUT_EDR_BODY);

    let hash_id = this.INPUT_EDR_BODY.data.hash_id;
    console.log("hash_id ---> ", hash_id);
    this.VIRUSTOTAL_SERVICE.getVirusTotalData(hash_id).subscribe(resp => {
      this.VIRUSTOTAL_DATA = resp;
    }) 
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
