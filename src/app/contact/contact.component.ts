import { Component } from '@angular/core';
import { MainTitleComponent } from '../main-title/main-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  preventEvent(event: SubmitEvent):void{
    event.preventDefault();
  }


}
