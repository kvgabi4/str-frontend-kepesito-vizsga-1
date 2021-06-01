import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ReposComponent } from './repos/repos.component';
import { SortPipe } from './pipe/sort.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    ReposComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
