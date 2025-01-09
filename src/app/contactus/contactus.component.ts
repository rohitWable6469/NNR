import { Component,Inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideToastr } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService } from '../toastr.service';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { ScrollService } from '../scroll.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
  providers: [
    {
      provide: ToastrModule,
      useValue: ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }),
    },
  ]
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    mobile_number: '',
    subject: '',
    message: ''
  };
  ngOnInit(){
    // window.scrollTo(0, 0);
    // this.scrollService.scrollToTop();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top on NavigationEnd
        document.body.scrollTop = 0; // For standard browsers
        document.documentElement.scrollTop = 0; // For Firefox
      }
    })
  }

  constructor(@Inject(DOCUMENT) private document: Document,private http: HttpClient, private toastr: CustomToastrService, private scrollService: ScrollService,private router: Router) { }

  submitForm() {
    const apiUrl = 'https://rohitwable.pythonanywhere.com/send-email'; // Replace with your Flask API URL

    this.http.post(apiUrl, this.formData).subscribe(
      (response: any) => {
        this.toastr.showSuccess('आम्हाला तुमचा संदेश प्राप्त झाला आहे !', 'अभिनंदन');
        this.formData = { name: '', email: '', mobile_number: '', subject: '', message: '' }; // Reset form
      },
      (error) => {
        console.error('Error:', error);
        this.toastr.showError('कृपया पुन्हा प्रयत्न करा.', 'क्षमस्व');
      }
    );
  }
}
