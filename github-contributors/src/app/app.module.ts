import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    InfiniteScrollModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
