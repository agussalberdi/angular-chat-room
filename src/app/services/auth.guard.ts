import { AuthService } from './auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();
  const router = new Router();

  if (!authService.user) {
    router.navigateByUrl('/auth/login');
    return false;
  }
  return !!authService.user;
};
