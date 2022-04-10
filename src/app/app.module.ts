import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//MODULES
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//PIPES
import { LangPipe } from './utils/pipes/lang/lang.pipe';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetailComponent } from './pages/detail/detail.component';
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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
