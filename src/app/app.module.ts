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

@NgModule({
  declarations: [
    AppComponent,
    AppBar,
    Home,
    Notes,
    NoteCard,
    ColorPicker,
    NoteCreator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
