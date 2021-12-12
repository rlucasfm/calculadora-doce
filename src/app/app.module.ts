import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { DocesComponent } from './views/doces/doces.component';
import { LacosComponent } from './views/lacos/lacos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DocesComponent,
    LacosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
