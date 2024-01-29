import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MainContainerComponent } from './../../components/layout/main-container/main-container.component';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AvatarModule, ButtonModule, MainContainerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: User | null = null;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
    console.log(this.user)
  }

  async logout() {
    await this.authService.logout();
    window.location.reload();
  }

  async deleteAccount() {
    console.log("delete account");
  }

}
