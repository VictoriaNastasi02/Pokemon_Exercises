import { Component, OnInit } from '@angular/core';
import { POKEDEX } from '../mocks/pokemon.contracts.mockdata';
import { ATTACK_LIST } from '../mocks/pokemon.attacks.contracts.mockdata';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent implements OnInit {
  
  pokemons = POKEDEX;
  attacks = ATTACK_LIST;

  ngOnInit() {
  }
}
