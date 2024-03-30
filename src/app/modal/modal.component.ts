import { Component, OnInit, Renderer2, OnDestroy, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {GalleryComponent} from '../gallery/gallery.component'

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modal_element: any;
  @Input() isModalOpen!: boolean;
  constructor(private rend: Renderer2, @Inject(DOCUMENT) private document: Document){

  }

  // modal_element = {
  //   'image': "../assets/gallery/image1.jfif",
  //   'description': 'पर्यटन जिल्हा असलेल्या सिंधुदुर्ग जिल्ह्यातुन जाणाऱ्या मुंबई-गोवा महामार्ग सुशोभीकरण करण्याचा स्तुत्य निर्णय शासनाने घेतला असून तळगाव ते पत्रादेवी या टप्याच्या सुशोभीकरणासाठी १२ कोटी रुपयांचा निधी मंजूर झाला आहे. या कामाचा भूमिपूजन समारंभ आज केंद्रीय मंत्री मा. ना. श्री. नारायणराव राणे साहेब यांच्या प्रमुख उपस्थितीत झाराप येथे पार पडला.'
  // }
}
