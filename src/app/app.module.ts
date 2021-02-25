import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VisorComponent } from './visor/visor.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import {FormsModule} from '@angular/forms';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { RecomendadaCompraDirective } from './visor/recomendada-compra.directive';
import { PlaceholderImagenDirective } from './visor/placeholder-imagen.directive';

// the second parameter 'fr' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    ErrorComponent,
    RecomendadaCompraDirective,
    PlaceholderImagenDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    RecomendadaCompraDirective
  ],
  providers: [RecomendadaCompraDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
