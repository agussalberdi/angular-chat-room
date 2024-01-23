import { AuthService } from './auth.service';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('guard: ', authService.user);
  if (!authService.user) {
    router.navigate(['/auth/login']);
  }
  return !!authService.user; // cast to a boolean. if no user returns false, if there is an user returns true.
};
