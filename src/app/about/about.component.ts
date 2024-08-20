import { Component } from '@angular/core';
import { MainTitleComponent } from '../main-title/main-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
