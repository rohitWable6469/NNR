import { Injectable } from '@angular/core';
import {videos, vidhansabhaVideos, galleryImages, newsList, newsKeys, videosKeys,galleryImagesKeys,vidhansabhaVideosKeys, socialActivitesImages} from './data'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  getVideosData(){
    return videos
  }
  getVideosKeys(){
    return videosKeys
  }
  getVidhansabhaData(){
    return vidhansabhaVideos
  }
  getVidhansabhaKeys(){
    return vidhansabhaVideosKeys
  }
  getGalleryImages(){
    return galleryImages
  }
  getGalleryImagesKeys(){
    return galleryImagesKeys
  }
  getsocialActivitesImages(){
    return socialActivitesImages
  }
}
