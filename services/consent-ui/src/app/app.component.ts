import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/',
      icon: 'home-outline'
    },
    {
      title: 'Researches',
      link: 'researches',
      icon: 'file-text-outline'
    },
    {
      title: 'Consents',
      link: 'consents',
      icon: 'file-text-outline'
    },
    {
      title: 'Profile',
      link: 'profile',
      icon: 'person-outline'
    }
  ]
}
