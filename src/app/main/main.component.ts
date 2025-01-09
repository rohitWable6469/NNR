import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule, NgForOf } from '@angular/common';
import { DataService } from '../data.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MediaComponent,
    RouterModule,
    ModalComponent,
    NgForOf,
    CommonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isModalOpen: boolean = false;
  modal_element = {
    'image': "",
    'description': ""
  }
  selectedVidhanSabhaType: string = 'HA-Oct-2024';
  vidhansabhaVideosList: any = []
  vidhansabhaVideosDump: any = {};
  selectedType: string = 'Jan-2025';
  videosList: any = [];
  selectedImagesType: string = 'Jan-2025'

  videoDump: any = {}
  socialImagesList:any = [
  ]

  ngOnInit() {
    this.videoDump = this.dataService.getVideosData()
    this.vidhansabhaVideosDump = this.dataService.getVidhansabhaData()
    this.imagesDump = this.dataService.getGalleryImages()
    this.videosList = this.videoDump[this.selectedType].slice(0, 3);
    this.vidhansabhaVideosList = this.vidhansabhaVideosDump[this.selectedVidhanSabhaType].slice(0, 3);;
    this.imagesList = this.imagesDump[this.selectedImagesType].slice(0, 3);
    this.socialImagesList = this.dataService.getsocialActivitesImages().slice(0,3);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top on NavigationEnd
        document.body.scrollTop = 0; // For standard browsers
        document.documentElement.scrollTop = 0; // For Firefox
      }
    })
  }
  constructor(private dataService: DataService, private router: Router) {
    // this.videosList = this.videoDump[this.selectedType]
    // this.vidhansabhaVideosList = this.vidhansabhaVideosDump[this.selectedVidhanSabhaType];
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
  imagesDump: any = {}
  imagesList: any = []
  newsList = [
    {
      'image': "assets/news/image1.jpg",
      'description': ''
    },
    {
      'image': "assets/news/image2.jpg",
      'description': ''
    },
    {
      'image': "assets/news/image3.jpg",
      'description': ''
    }
  ]


  addItem(el: any) {
    console.debug(el)
    console.log("HHHH")
    console.log(el)
    this.modal_element = el;
  }
}
