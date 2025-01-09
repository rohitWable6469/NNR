import { CommonModule, NgForOf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-vidhansabha',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    YouTubePlayerModule,
    FormsModule
  ],
  templateUrl: './vidhansabha.component.html',
  styleUrl: './vidhansabha.component.css'
})
export class VidhansabhaComponent {
  selectedType: string = 'HA-Oct-2024';
  videosList: any = []
  // videosDump: any = {
  //   'HA-Oct-2024': [
  //     { 'link': 'https://www.youtube.com/watch?v=crqDXvnaVKk', 'caption': 'पारंपरिक मच्छिमारांचे प्रश्न', 'type': 'HA-Oct-2024' },
  //     { 'link': 'https://www.youtube.com/watch?v=Kz99Kp4Eq_k', 'caption': 'शपथविधी', 'type': 'HA-Oct-2024' },
  //     { 'link': 'https://www.youtube.com/watch?v=OXUeG-X7iVk&t=505s', 'caption': 'राज्यपालांच्या अभिभाषणावर मनोगत', 'type': 'HA-Oct-2024' }
  //   ]
  // };
  videosDump: any = {}
  videosKeys: any = []
  ngOnInit(): void {
    this.videosDump = this.dataService.getVidhansabhaData()
    this.videosList = this.videosDump[this.selectedType]
    this.videosKeys = this.dataService.getVidhansabhaKeys();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top on NavigationEnd
        document.body.scrollTop = 0; // For standard browsers
        document.documentElement.scrollTop = 0; // For Firefox
      }
    })
  }
  constructor(@Inject(DOCUMENT) private document: Document, private dataService: DataService, private router:Router) {
    
  }

  getVideoId(urlDict: any): string {
    const url = urlDict['link'];
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

    if (videoIdMatch && videoIdMatch[1]) {
      return videoIdMatch[1];
    }

    return ''; // Return an empty string if no valid video ID is found
  }

  onPlayerReady(event: any) {
    // Do something when the player is ready
  }

  onPlayerStateChange(event: any) {
    // Do something when the player's state changes
  }

  getThumbnailUrl(videoDict: any): string {
    const videoId = this.getVideoId(videoDict);
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  // Function to open video link in a new tab
  openVideoInNewTab(videoDict: any): void {
    const videoUrl = videoDict.link;
    window.open(videoUrl, '_blank');
  }
}
