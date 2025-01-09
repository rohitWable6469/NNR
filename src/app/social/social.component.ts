import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgFor, NgForOf} from "@angular/common";
import { ModalComponent } from '../modal/modal.component';
import { DOCUMENT } from '@angular/common';
import { DataService } from '../data.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-social',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    ModalComponent
  ],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  ngOnInit(){
    this.imagesList = this.dataService.getsocialActivitesImages();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top on NavigationEnd
        document.body.scrollTop = 0; // For standard browsers
        document.documentElement.scrollTop = 0; // For Firefox
      }
    })
  }
  
  constructor(@Inject(DOCUMENT) private document: Document, private dataService: DataService,private router: Router) {}



  isModalOpen: boolean = false;
  modal_element = {
    'image': "",
    'description': ""
  }
  imagesList:any = []

  addItem(el:any) {
    console.debug(el)
    console.log("HHHH")
    console.log(el)
    this.modal_element = el;
  }
}
