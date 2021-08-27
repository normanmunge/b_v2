import { Component } from '@angular/core';
import { faMediumM, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faMedium = faMediumM;
  faLinkedIn = faLinkedinIn;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faDownload = faDownload;

  constructor() { }

  currentYear() {
    return new Date().getFullYear();
  }
}
