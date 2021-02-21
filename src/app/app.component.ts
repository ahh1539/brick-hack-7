import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'brickHack7';
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService, private cookieService: CookieService) { }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.cookieService.deleteAll();
    this.loggedIn = false;
  }

  ngOnInit(): void {
    if (this.cookieService.get('loggedIn') == 'true') {
      this.loggedIn = true;
    }
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user != null || this.cookieService.get('loggedIn') == 'true') {
        this.loggedIn = true;
        this.cookieService.set('loggedIn', 'true');
        this.cookieService.set('email', user.email);

      }
    });
  }

}