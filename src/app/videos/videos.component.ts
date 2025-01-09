import { CommonModule, NgForOf, ViewportScroller } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    YouTubePlayerModule,
    FormsModule
  ],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  selectedType: string = 'Jan-2025';
  videosList: any = [];
  videosKeys: any = [];

  videoDump: any = {}
  ngOnInit(): void {
    this.videoDump = this.dataService.getVideosData();
    this.videosKeys = this.dataService.getVideosKeys();
    this.videosList = this.videoDump[this.selectedType];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top on NavigationEnd
        document.body.scrollTop = 0; // For standard browsers
        document.documentElement.scrollTop = 0; // For Firefox
      }
    })
  }

  constructor(@Inject(DOCUMENT) private document: Document, private dataService: DataService, private router: Router, private viewportScroller: ViewportScroller) {

  }
  itemsPerPage = 3; // Number of items per page
  currentPage = 1; // Current page number


  // Calculate total number of pages
  get totalPages(): number {
    return Math.ceil(this.videosList.length / this.itemsPerPage);
  }

  // Get videos for the current page
  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.videosList.slice(startIndex, startIndex + this.itemsPerPage);
  }


  // Change the current page
  changePage(page: number) {
    console.log("CHeck")
    // Scroll to the top of the page
    this.viewportScroller.scrollToPosition([0, 0]);
    this.currentPage = page;

  }


  // Function to extract video ID from YouTube URL
  getVideoId(urlDict: any): string {
    const url = urlDict['link'];
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

    if (videoIdMatch && videoIdMatch[1]) {
      return videoIdMatch[1];
    }

    return ''; // Return an empty string if no valid video ID is found
  }

  // Get YouTube video thumbnail URL
  getThumbnailUrl(videoDict: any): string {
    const videoId = this.getVideoId(videoDict);
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  // Function to open video link in a new tab
  openVideoInNewTab(videoDict: any): void {
    const videoUrl = videoDict.link;
    window.open(videoUrl, '_blank');
  }

  onPlayerReady(event: any) {
    // Do something when the player is ready
  }

  onPlayerStateChange(event: any) {
    // Do something when the player's state changes
  }

  onTypeChange(event: any) {
    // You can access the selected value through event.target.value
    console.log('Selected type:', event.target.value);
    this.videosList = this.videoDump[this.selectedType]

    if (event.target.value === 'Feb-2024') {
      console.log('You selected February 2024');
    } else if (event.target.value === 'Dec-2024') {
      console.log('You selected December 2024');
    }
  }

}
