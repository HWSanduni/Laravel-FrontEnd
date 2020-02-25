import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChanelComponent } from './view/view-chanel/view-chanel.component';
import { ChanelComponent } from './view/chanel.component';

const routes: Routes = [{
  path: '',
  component: ChanelComponent,
  children: [
    {
      path: '',
      component:ViewChanelComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChanelRoutingModule { }
