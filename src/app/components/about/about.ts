import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  heading = 'About me';
  body = `I'm Ludovic, a software engineer who builds web applications. I enjoy crafting
simple, maintainable UIs and working on developer tools.`;
}
