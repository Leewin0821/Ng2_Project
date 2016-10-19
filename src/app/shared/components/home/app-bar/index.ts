import {Component} from "@angular/core";
import {AuthService} from '../../../../shared/services/auth.service'

@Component({
  selector: 'app-bar',
  template: require('./app-bar.html'),
  styles: [require('./app-bar.css')]
})
export class AppBar{
  constructor(private authService: AuthService) {}

  onSignOut(): void {
    this.authService.signOut();
  }
}
