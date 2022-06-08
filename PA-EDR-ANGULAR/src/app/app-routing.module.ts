import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { EdrComponent } from './edr/edr.component';
import { VirustotalComponent } from './virustotal/virustotal.component';


const routes: Routes = [
  {path: '', redirectTo: '/Clients', pathMatch: 'full'},
  {path: 'EDR', component : EdrComponent},
  {path: 'VirusTotal', component : VirustotalComponent},
  {path: 'Clients', component : ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
