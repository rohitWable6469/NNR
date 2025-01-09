import { Component , Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { MediaComponent } from './media/media.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    NgxTwitterWidgetsModule,
    MediaComponent,
    ContactusComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NNR';
  closeNavbar() {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggle && navbarCollapse) {
      navbarToggle.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    }
  }
  ngOnInit(){
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     window.scrollTo(0, 0); // Scrolls to the top-left corner
    //   }
    // });
  }
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document){}
}
