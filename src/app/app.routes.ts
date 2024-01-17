import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'chat-rooms',
        pathMatch: 'full'
    },
    {
        path: 'chat-rooms',
        loadComponent: () => import('./pages/chat-rooms/chat-rooms.component').then(c => c.ChatRoomsComponent)
    },
    {
        path: 'chat-rooms/:id',
        loadComponent: () => import('./pages/chat-rooms/chat-rooms.component').then(c => c.ChatRoomsComponent)
    }
];
