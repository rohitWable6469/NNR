import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    YouTubePlayerModule
  ],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  videosList: string[] = [
    'hhttps://www.youtube.com/watch?v=ulJiQvy6Li0',
    'https://www.youtube.com/watch?v=D-AQRpPIEAI',
    'https://www.youtube.com/watch?v=9cDs_YtyPyw'
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
  }

}
