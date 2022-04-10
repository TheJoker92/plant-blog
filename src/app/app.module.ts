import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LangPipe } from './utils/pipes/lang/lang.pipe';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantCardComponent } from './components/plant-list/plant-card/plant-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetailComponent,
    LangPipe,
    PlantListComponent,
    PlantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
