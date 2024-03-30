import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    ModalComponent,
    CommonModule,
    NgForOf
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  modal_element = {
    'image': "",
    'description': ""
  }
  imagesList = [
    {
      'image': "../assets/news/image1.jpg",
      'description': ''
    },
    {
      'image': "../assets/news/image2.jpg",
      'description': ''
    },
    {
      'image': "../assets/news/image3.jpg",
      'description': ''
    }
  ]

  addItem(el:any) {
    console.debug(el)
    console.log("HHHH")
    console.log(el)
    this.modal_element = el;
  }
}