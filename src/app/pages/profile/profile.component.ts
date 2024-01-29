import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MainContainerComponent } from './../../components/layout/main-container/main-container.component';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AvatarModule, ButtonModule, ConfirmPopupModule, ToastModule, MainContainerComponent],
  providers: [ConfirmationService, MessageService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: User | null = null;

  constructor(private authService: AuthService, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.user = this.authService.user;
  }

  async logout() {
    await this.authService.logout();
    window.location.reload();
  }

  deleteAccount(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this account?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Account deleted', life: 3000 });
          this.authService.deleteUser();
          window.location.reload();
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
  });
  }

}
