import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { ChooseTechnologyComponent } from './choose-technology/choose-technology.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    AppComponent,
    ContactHeaderComponent,
    HeaderProfileComponent,
    ChooseTechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
