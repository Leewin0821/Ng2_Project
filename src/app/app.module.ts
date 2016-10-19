import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppBar } from './shared/components/home/app-bar/index'
import { Notes } from './shared/components/home/notes/index'
import { NoteCard } from './shared/components/home/notes/note-card/index'
import { ColorPicker } from './shared/components/home/notes/note-creator/color-picker/index'
import { NoteCreator } from './shared/components/home/notes/note-creator/index'
import { Home } from './shared/components/home/index'
import { NoteService } from './shared/services/notes'
import { ApiService } from './shared/services/api'
import { About } from './shared/components/about/index'
import { AuthComponent } from './shared/components/auth/auth.component'
import { AppRoutingModule } from './app-routing.module'
import { MainComponent } from './main/main.components'
import { AuthService } from './shared/services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    AppBar,
    Home,
    Notes,
    NoteCard,
    ColorPicker,
    NoteCreator,
    About,
    AuthComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    NoteService,
    ApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
