import { Component, Inject } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgFor, NgForOf } from "@angular/common";
import { ModalComponent } from '../modal/modal.component';
import { log } from 'console';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    ModalComponent,
    MatTooltipModule,
    FormsModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  selectedType: string = 'Jan-2025';
  
  imagesList: any = {}
  imagesList1: any = {}
  imagesKeys: any = []
  ngOnInit(): void {
    this.imagesList = this.dataService.getGalleryImages();
    this.imagesKeys = this.dataService.getGalleryImagesKeys();
    this.imagesList1 = this.imagesList[this.selectedType];
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
  isModalOpen: boolean = false;
  modal_element = {
    'image': "",
    'description': ""
  }
  onTypeChange(event: any) {
    // You can access the selected value through event.target.value
    console.log('Selected type:', event.target.value);

    this.imagesList1 = this.imagesList[this.selectedType]
    // Perform any action you need when the selection changes
    // For example, show or hide content based on the selected value
    if (event.target.value === 'Feb-2024') {
      console.log('You selected February 2024');
    } else if (event.target.value === 'Dec-2024') {
      console.log('You selected December 2024');
    }
  }
  itemsPerPage = 3; // Number of items per page
  currentPage = 1; // Current page number

  // Calculate the paginated list of items
  get paginatedItems() {
    const filteredItems = this.imagesList1.filter(
      (element: { month: string; }) => element.month === this.selectedType
    );
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Total pages for pagination
  get totalPages() {
    const filteredItems = this.imagesList1.filter(
      (element: { month: string; }) => element.month === this.selectedType
    );
    return Math.ceil(filteredItems.length / this.itemsPerPage);
  }

  // Change the current page
  changePage(page: number) {
    console.log("CHeck")
    // Scroll to the top of the page
    this.viewportScroller.scrollToPosition([0, 0]);
    this.currentPage = page;
    
  }
  addItem(el: any) {
    console.debug(el)
    console.log("HHHH")
    console.log(el)
    this.modal_element = el;
  }

}
