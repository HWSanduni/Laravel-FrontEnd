import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
{ path: '',component:AppComponent },
{path: 'chanel', loadChildren: () => import('./view/pages/chanel/chanel.module').then(m => m.ChanelModule) }, 
{path: 'epsisode', loadChildren: () => import('./view/pages/epsisode/epsisode.module').then(v => v.EpsisodeModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
