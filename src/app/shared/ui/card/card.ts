import {Component, input} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true,
})
export class Card {
  label = input<string>('');
  value = input<unknown>(0);

}
