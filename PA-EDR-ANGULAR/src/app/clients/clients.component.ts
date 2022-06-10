import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from 'src/service/clients/clients.service';
import { iClients } from 'src/interfaces/clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  @Input() IN_CLIENTS_DATA: iClients;

  constructor(public CLIENTS_SERVICE: ClientsService) { }

  ngOnInit(): void {
    this.getDataClients()
  }

  onSubmitClients(mac_addr: string){
    console.log("mac_addr : ", this.IN_CLIENTS_DATA.body)
    console.log("mac_addr : ", mac_addr)

    
  }

  copyInputMessage(inputElement: any){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  getDataClients() {
    this.CLIENTS_SERVICE.getClientsData().subscribe(response => { 
      this.IN_CLIENTS_DATA = response;
    });
  }
}
