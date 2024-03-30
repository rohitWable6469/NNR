import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { MediaComponent } from './media/media.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    NgxTwitterWidgetsModule,
    MediaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NNR';
}
