import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon-list';
}
