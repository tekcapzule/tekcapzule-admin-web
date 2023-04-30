import { Component } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { AuthService, EventChannelService } from './core';
import { Router } from '@angular/router';
import awsExports from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  footerHidden = true;
  constructor(private eventChannel: EventChannelService, public authService: AuthService, private router: Router) {
    Amplify.configure(awsExports);
  }
  
}
