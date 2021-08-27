import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BannerSlideComponent } from './banner-slide/banner-slide.component';
import { ContactComponent } from './contact/contact.component';
import { BriefComponent } from './brief/brief.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerSlideComponent,
    ContactComponent,
    BriefComponent,
    BlogComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
