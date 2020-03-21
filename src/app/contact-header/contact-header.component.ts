import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss']
})
export class ContactHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fadeOutAnimation();
  }

  fadeOutAnimation = () => {
    const elPush: any = document.querySelector('.move-right');
    const elWave: any = document.querySelector('.waving_gif');
    if (elPush && elWave) {
      elPush.addEventListener('animationend', () => {
        elPush.style.transition = '0.8s';
        elPush.style.opacity = 0;
        elWave.style.opacity = 1;
        elWave.style.transition = '0.5s';
      }, false);
    }
  }
}
