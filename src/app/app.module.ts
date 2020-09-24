import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { SafePipe } from './services/safe.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    SlickCarouselModule
  ],
  providers: [NgxSpinnerService, SafePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
