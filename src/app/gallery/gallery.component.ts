import { Component , Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import {NgFor, NgForOf} from "@angular/common";
import { ModalComponent } from '../modal/modal.component';
import { log } from 'console';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    ModalComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(@Inject(DOCUMENT) private document: Document){

  }
  isModalOpen: boolean = false;
  modal_element = {
    'image': "",
    'description': ""
  }
  imagesList = [
    {
      'image': "../assets/gallery/image1.jfif",
      'description': 'पर्यटन जिल्हा असलेल्या सिंधुदुर्ग जिल्ह्यातुन जाणाऱ्या मुंबई-गोवा महामार्ग सुशोभीकरण करण्याचा स्तुत्य निर्णय शासनाने घेतला असून तळगाव ते पत्रादेवी या टप्याच्या सुशोभीकरणासाठी १२ कोटी रुपयांचा निधी मंजूर झाला आहे. या कामाचा भूमिपूजन समारंभ आज केंद्रीय मंत्री मा. ना. श्री. नारायणराव राणे साहेब यांच्या प्रमुख उपस्थितीत झाराप येथे पार पडला.'
    },
    {
      'image': "../assets/gallery/image2.jfif",
      'description': 'मुख्यमंत्री ग्रामसडक योजना टप्पा २ अंतर्गत मंजूर झालेल्या कुडाळ तालुक्यातील घावणळे रामेश्वर मंदिर रस्ता खडीकरण व डांबरीकरण या कामाचा शुभारंभ आज घावनळे येथे पार पडला या कामासाठी ३ कोटी ५२ लाख एवढा निधी राज्य शासनाच्या माध्यमातून मंजूर करण्यात आला आहे.मुख्यमंत्री ग्रामसडक योजना टप्पा २ अंतर्गत मंजूर झालेल्या कुडाळ तालुक्यातील बिबवणे मांगलेवाडी येथील रस्त्याचा भूमीपुजन सोहळा आज पार पडला. गेली अनेक वर्षे नादुरुस्त असलेल्या या रस्त्याच्या कामासाठी आता सुरुवात होणार असून २ कोटी ९० लक्ष एवढा निधी मंजूर झाला आहे.'
    },
    {
      'image': "../assets/gallery/image3.jfif",
      'description': 'सिंधुदुर्ग जिल्हा मध्यवर्ती सहकारी बँकेच्या मालवण शाखेचा आज नवीन इमारतीत स्थलांतर सोहळा पार पडला. यावेळी जिल्हा बँकेचे अध्यक्ष श्री. मनीष दळवी, जिल्हा बँक संचालक श्री. बाबा परब यांच्यासह भाजपा पदाधिकारी यांच्यासह शाखा स्थलांतर सोहळ्यासाठी मालवण येथे उपस्थित होतो.'
    },
    {
      'image': "../assets/gallery/image4.jfif",
      'description': 'मालवण तालुक्यातील आचरा बंदर रस्त्यावर नादुरुस्त कॉजवेच्या ठिकाणी नवीन उंच पातळीचा पूल राज्य अर्थसंकल्प अंतर्गत मंजूर झाला आहे, त्या पार्श्वभूमीवर भारतीय जनता पक्षाच्या माध्यमातून या पुलाच्या भूमीपूजनाचा कार्यक्रम आज आचरा येथे पार पडला.'
    },
    {
      'image': "../assets/gallery/image5.jfif",
      'description': 'भारत सरकारच्या MSME मंत्रालयाच्या माध्यमातून आज सिंधुदुर्गनगरी येथे सिंधुदुर्ग औद्योगिक मोहोत्सव केंद्रीय मंत्री मा. श्री. नारायणराव राणे साहेबांच्या प्रमुख उपस्थितीत संपन्न होत आहे. या सोबतच २०० कोटी रुपये खर्च करून उभारणी केली जाणाऱ्या MSME प्राद्योगिक केंद्राचा शिलान्यास समारंभ देखील आदरणीय राणे साहेबांच्या हस्ते संपन्न झाला.'
    },
  ]

  addItem(el:any) {
    console.debug(el)
    console.log("HHHH")
    console.log(el)
    this.modal_element = el;
  }
  
}
