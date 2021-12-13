import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { DocesComponent } from './views/doces/doces.component';
import { LacosComponent } from './views/lacos/lacos.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FinalizarModalComponent } from './modules/finalizar-modal/finalizar-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DocesComponent,
    LacosComponent,
    NavbarComponent,
    FinalizarModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
