import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-pofile',
  standalone: true,
  imports: [],
  templateUrl: './pofile.component.html',
  styleUrl: './pofile.component.css'
})
export class PofileComponent {
  constructor(private router: Router){}
  ngOnInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top on NavigationEnd
        document.body.scrollTop = 0; // For standard browsers
        document.documentElement.scrollTop = 0; // For Firefox
      }
    })
  }
}
