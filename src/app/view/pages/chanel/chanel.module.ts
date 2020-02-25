import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChanelRoutingModule } from './chanel-routing.module';
import { ChanelComponent } from './view/chanel.component';
import { ViewChanelComponent } from './view/view-chanel/view-chanel.component';
import { MatComponentsModule } from 'src/app/mat-components.module';
import { ChanelService } from 'src/app/service/chanel.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ChanelComponent, ViewChanelComponent],
  imports: [
    CommonModule,
    ChanelRoutingModule,
    MatComponentsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers:[ChanelService]
})
export class ChanelModule { }
