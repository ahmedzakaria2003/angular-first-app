import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Iportfolio } from '../iportfolio';
import { MainTitleComponent } from '../main-title/main-title.component';

@Component({
  selector: 'app-portofilio',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './portofilio.component.html',
  styleUrl: './portofilio.component.css'
})
export class PortofilioComponent {
  portItems:Iportfolio[] = [
    {srcImg:'./assets/images/port1.png',alt:'portfolio image'},
    {srcImg:'./assets/images/port2.png',alt:'portfolio image'},
    {srcImg:'./assets/images/port3.png',alt:'portfolio image'},
    {srcImg:'./assets/images/port1.png',alt:'portfolio image'},
    {srcImg:'./assets/images/port2.png',alt:'portfolio image'},
    {srcImg:'./assets/images/port3.png',alt:'portfolio image'},
  ]
  @ViewChild('popUpElement') popUpElement!: ElementRef;
  popUpImage:string ="";
  getPopUp(event: string):void{
    this.popUpElement.nativeElement.classList.add('d-flex')
    this.popUpImage = event;
  }
  closePopUp(event: MouseEvent):void{
    if(event.currentTarget == event.target){
      this.popUpElement.nativeElement.classList.remove('d-flex')
      this.popUpImage = "";
    }
  }
}
