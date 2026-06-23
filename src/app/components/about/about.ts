import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  imports: [MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  heading = 'About me';
  body = `Engineer by training, problem-solver at heart. I love finding elegant solutions to complex problems, from hunting down bugs to architecting scalable systems with Python, Angular, and AWS.
  I think my greatest asset is being able to adapt and learn quickly.

After a recent 8-month-long bicycle expedition, I’m back at the keyboard and looking for my next challenge—ideally building software that makes a tangible environmental or social impact.

When I'm off-screen: Cycling remote roads, playing footvolley, reading, annoying my neighbors with my harmonica, or sharing a beer with friends.`;

  // computed HTML: split on blank lines and wrap each paragraph in <p>
  get bodyHtml(): string {
    return this.body
      .split(/\n\s*\n/)
      .map(p => `<p>${p.trim()}</p>`)
      .join('');
  }
}
