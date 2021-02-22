import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VisorComponent} from './visor/visor.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/visor', pathMatch: 'full'},
  {path: 'visor', component: VisorComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
