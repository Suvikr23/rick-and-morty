import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rick-and-morty';
  characters: any;
  species: string[] = [];
  gender: string[] = [];
  origin: string[] = [];

  constructor(
    private charService: CharacterService
  ) {

  }

  ngOnInit() {
    this.charService.getCharacters().subscribe((charData: any) => {
      this.characters = charData.results;
      console.log(this.characters)
      this.fillFilters();
    });
  }

  fillFilters() {
    this.characters.forEach((character) => {
      if(this.species.indexOf(character.species) === -1) {
        this.species.push(character.species);
      }
      
      if(this.gender.indexOf(character.gender) === -1) {
        this.gender.push(character.gender);
      }

      if(this.origin.indexOf(character.origin.name) === -1) {
        this.origin.push(character.origin.name);
      }
    });
  }
}
