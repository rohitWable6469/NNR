import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule, NgForOf } from '@angular/common';

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
  imagesList = [
    {
      'image': "assets/gallery/image1.jfif",
      'description': 'पर्यटन जिल्हा असलेल्या सिंधुदुर्ग जिल्ह्यातुन जाणाऱ्या मुंबई-गोवा महामार्ग सुशोभीकरण करण्याचा स्तुत्य निर्णय शासनाने घेतला असून तळगाव ते पत्रादेवी या टप्याच्या सुशोभीकरणासाठी १२ कोटी रुपयांचा निधी मंजूर झाला आहे. या कामाचा भूमिपूजन समारंभ आज केंद्रीय मंत्री मा. ना. श्री. नारायणराव राणे साहेब यांच्या प्रमुख उपस्थितीत झाराप येथे पार पडला.'
    },
    {
      'image': "assets/gallery/image2.jfif",
      'description': 'मुख्यमंत्री ग्रामसडक योजना टप्पा २ अंतर्गत मंजूर झालेल्या कुडाळ तालुक्यातील घावणळे रामेश्वर मंदिर रस्ता खडीकरण व डांबरीकरण या कामाचा शुभारंभ आज घावनळे येथे पार पडला या कामासाठी ३ कोटी ५२ लाख एवढा निधी राज्य शासनाच्या माध्यमातून मंजूर करण्यात आला आहे.मुख्यमंत्री ग्रामसडक योजना टप्पा २ अंतर्गत मंजूर झालेल्या कुडाळ तालुक्यातील बिबवणे मांगलेवाडी येथील रस्त्याचा भूमीपुजन सोहळा आज पार पडला. गेली अनेक वर्षे नादुरुस्त असलेल्या या रस्त्याच्या कामासाठी आता सुरुवात होणार असून २ कोटी ९० लक्ष एवढा निधी मंजूर झाला आहे.'
    },
    {
      'image': "assets/gallery/image3.jfif",
      'description': 'सिंधुदुर्ग जिल्हा मध्यवर्ती सहकारी बँकेच्या मालवण शाखेचा आज नवीन इमारतीत स्थलांतर सोहळा पार पडला. यावेळी जिल्हा बँकेचे अध्यक्ष श्री. मनीष दळवी, जिल्हा बँक संचालक श्री. बाबा परब यांच्यासह भाजपा पदाधिकारी यांच्यासह शाखा स्थलांतर सोहळ्यासाठी मालवण येथे उपस्थित होतो.'
    }
  ]
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


  addItem(el:any) {
    console.debug(el)
    console.log("HHHH")
    console.log(el)
    this.modal_element = el;
  }
}
