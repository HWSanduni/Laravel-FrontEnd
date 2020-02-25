import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpsisodeRoutingModule } from './epsisode-routing.module';
import { EpsisodeComponent } from './view/epsisode.component';


@NgModule({
  declarations: [EpsisodeComponent],
  imports: [
    CommonModule,
    EpsisodeRoutingModule
  ]
})
export class EpsisodeModule { }
