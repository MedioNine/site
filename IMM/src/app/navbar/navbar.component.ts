import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sliderImages: Array<object> = [];

  personasImages: Array<object> = [{
    image: 'assets/images/persona-1.png',
    alt: 'Buyer Personas #1',
    title: 'Buyer Personas #1'
  }, {
    image: 'assets/images/persona-2.png', // Support base64 image
    // Support base64 image
    title: 'Buyer Personas #2', //Optional: You can use this key if want to show image with title
    alt: 'Buyer Personas #2', //Optional: You can use this key if want to show image with alt
  }
  ];

  cjmImages: Array<object> = [{
    image: 'assets/images/CJM_full.jpg',
    alt: 'Customer Journey Map',
    title: 'Customer Journey Map'
  }, {
    image: 'assets/images/CJM_1.jpg', // Support base64 image
    // Support base64 image
    title: 'Customer Journey Map', //Optional: You can use this key if want to show image with title
    alt: 'Customer Journey Map', //Optional: You can use this key if want to show image with alt
  }, {
    image: 'assets/images/CJM_2.jpg', // Support base64 image
    // Support base64 image
    title: 'Customer Journey Map', //Optional: You can use this key if want to show image with title
    alt: 'Customer Journey Map', //Optional: You can use this key if want to show image with alt
  }
  ];

  swotImages: Array<object> = [{
    image: 'assets/images/SWOT.png',
    alt: 'SWOT analysis',
    title: 'SWOT analysis'
  }
  ];

  showSlider(images: Array<object>): void {
    this.sliderImages = images;
    this.ref.detectChanges();
    let slider = document.getElementById("slider");
    if (slider) {
      slider.style.display = 'block';
      (document.getElementsByClassName('img-div')[0] as HTMLElement).click();
    }
  }

  onSliderClose(): void {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.style.display = 'none';
    }
  }

  constructor(private ref: ChangeDetectorRef) { }
}
