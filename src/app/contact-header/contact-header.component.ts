import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss']
})
export class ContactHeaderComponent implements OnInit {

  constructor() {
    window.addEventListener('resize', this.getWindowSize);
  }

  ngOnInit(): void {
    this.getWindowSize();
    this.fadeOutAnimation();
  }

  getWindowSize = () => {
    const elPush: any = document.querySelector('.move-right');
    const elWave: any = document.querySelector('.waving_gif');
    const elButton: any = document.querySelector('.annimatedButton');
    elButton.style.left = document.documentElement.clientWidth - 180 + 'px';
    elPush.style.left = document.documentElement.clientWidth - 280 + 'px';
    elWave.style.left = document.documentElement.clientWidth - 260 + 'px';
  }
  fadeOutAnimation = () => {
    const elPush: any = document.querySelector('.move-right');
    const elWave: any = document.querySelector('.waving_gif');
    const elButton: any = document.querySelector('.annimatedButton');
    if (elPush && elWave) {
      elPush.addEventListener('animationend', () => {
        elPush.style.transition = '0.8s';
        elPush.style.opacity = 0;
        elWave.style.opacity = 1;
        elWave.style.transition = '0.5s';
        elButton.style.animation = 'none';
        elPush.style.animation = 'none';
        elWave.style.animation = 'none';
      }, false);
    }
  }
}
