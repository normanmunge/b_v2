import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-slide',
  templateUrl: './banner-slide.component.html',
  styleUrls: ['./banner-slide.component.scss'],
})
export class BannerSlideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
