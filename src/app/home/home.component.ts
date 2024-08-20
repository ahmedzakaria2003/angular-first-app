import { Component } from '@angular/core';
import { MainTitleComponent } from '../main-title/main-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
