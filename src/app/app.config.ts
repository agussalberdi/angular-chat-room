import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBiLOFo-Ap4tshJnhAutEW_GvJtZ_g6n0U",
  authDomain: "angular-chat-room-b0ebd.firebaseapp.com",
  projectId: "angular-chat-room-b0ebd",
  storageBucket: "angular-chat-room-b0ebd.appspot.com",
  messagingSenderId: "318086586639",
  appId: "1:318086586639:web:5370a94db5c155906b9e7a"
};
const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), { provide: 'firebaseApp', useValue: app }],
};
