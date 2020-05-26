import { Component, OnInit } from '@angular/core';
import { UserProvider } from '../providers/user.provider';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(readonly userService: UserProvider) { }

  ngOnInit(): void {
    this.user = this.userService.getUserById('1');
  }

}
