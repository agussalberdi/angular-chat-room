import { authGuard } from './services/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'chat-rooms',
        pathMatch: 'full'
    },
    {
        path: 'chat-rooms',
        title: 'Chat Rooms',
        loadComponent: () => import('./pages/chat-rooms/chat-rooms.component').then(c => c.ChatRoomsComponent),
        canActivate: [authGuard]
    },
    {
        path: 'profile',
        title: 'Profile',
        loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent),
        canActivate: [authGuard]
    },
    {
        path: 'auth',
        title: 'Authentication',
        loadComponent: () => import('./pages/auth/auth.component').then(c => c.AuthComponent),
        children: [
            {
                path: 'login',
                title: 'Login',
                loadComponent: () => import('./pages/auth/login/login.component').then(c => c.LoginComponent)
            },
            {
                path: 'register',
                title: 'Register',
                loadComponent: () => import('./pages/auth/register/register.component').then(c => c.RegisterComponent)
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    }
];
