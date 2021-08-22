import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerSlideComponent } from './banner-slide/banner-slide.component';
import { ContactComponent } from './contact/contact.component';
import { BriefComponent } from './brief/brief.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerSlideComponent,
    ContactComponent,
    BriefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
