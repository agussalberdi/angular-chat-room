import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from 'firebase/auth';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FilterComponent } from './../filter/filter.component';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterLink, ToolbarModule, ButtonModule, FilterComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
