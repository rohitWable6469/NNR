import { Routes } from '@angular/router';
import {PofileComponent} from '../app/pofile/pofile.component';
import {MainComponent} from '../app/main/main.component';
import {GalleryComponent} from '../app/gallery/gallery.component';
import {ContactusComponent} from '../app/contactus/contactus.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { MediaComponent } from './media/media.component';
import { SocialComponent } from './social/social.component';
import { VidhansabhaComponent } from './vidhansabha/vidhansabha.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'profile', component: PofileComponent },
    { path: 'gallery', component: GalleryComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'news', component: NewsComponent},
    { path: 'videos', component: VideosComponent},
    { path: 'media', component: MediaComponent},
    { path: 'social', component: SocialComponent},
    { path: 'vidhansabha', component: VidhansabhaComponent}
];
