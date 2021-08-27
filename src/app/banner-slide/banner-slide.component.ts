import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-banner-slide',
  templateUrl: './banner-slide.component.html',
  styleUrls: ['./banner-slide.component.scss'],
})
export class BannerSlideComponent {

  faLaptopCode = faLaptopCode;
  faServer = faServer;

  constructor() {}
  
  public frontEndSkills = [
    'Html',
    '(S)Css',
    'TailwindCss',
    'Javascript',
    // 'Typescript',
    'Angular',
    'EmberJs',
    'Api Integration',
  ];

  public backEndSkills = [
    'Python',
    'Django',
    'Php',
    'Laravel',
    'NodeJs',
    'PostgresSql',
    'MySql',
    // 'Linux'
  ];
}
