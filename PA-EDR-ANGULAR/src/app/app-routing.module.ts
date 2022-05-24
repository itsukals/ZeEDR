import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdrComponent } from './edr/edr.component';
import { VirustotalComponent } from './virustotal/virustotal.component';


const routes: Routes = [
  {path: 'EDR', component : EdrComponent},
  {path: 'VirusTotal', component : VirustotalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
