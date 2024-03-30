import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { VideosComponent } from '../videos/videos.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [
    NgForOf,
    NgxTwitterWidgetsModule,
    YouTubePlayerModule
  ],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  onLoad(event: any){
    console.log(event)
  }
  videosList: string[] = [
    'https://www.youtube.com/watch?v=ulJiQvy6Li0',
    'https://www.youtube.com/watch?v=D-AQRpPIEAI'
    // 'https://www.youtube.com/watch?v=9cDs_YtyPyw'
    // Add more YouTube video URLs as needed
  ];

  getVideoId(url: string): string {
    return url.split('https://www.youtube.com/watch?v=')[1];
  }

  onPlayerReady(event: any) {
    // Do something when the player is ready
  }

  onPlayerStateChange(event: any) {
    // Do something when the player's state changes
    console.log("Hey")
  }

}
