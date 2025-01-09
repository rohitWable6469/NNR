import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PofileComponent} from '../app/pofile/pofile.component';
import {MainComponent} from '../app/main/main.component';
import {GalleryComponent} from '../app/gallery/gallery.component';
import {AppComponent} from './app.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MediaComponent } from './media/media.component';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ContactusComponent } from './contactus/contactus.component';
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    YouTubePlayerModule,
    NgxTwitterWidgetsModule,
    PofileComponent,
    MainComponent,
    GalleryComponent,
    AppComponent,
    ModalComponent,
    MediaComponent,
    MatTooltipModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ]
})
export class AppModule { }
