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
  filterArgs: any = {
    origin: [],
    gender: [],
    species: []
  };

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

  filterBySpecies(species) {
    var spec = [...this.filterArgs.species];
    var index = spec.indexOf(species);
    if(index === -1) {
      spec.push(species);
    } else {
      spec.splice(index, 1);
    }
    this.filterArgs.species = spec;
  }

  filterByGender(gender) {
    var gen = [...this.filterArgs.gender];
    var index = gen.indexOf(gender);
    if(index === -1) {
      gen.push(gender);
    } else {
      gen.splice(index, 1);
    }
    this.filterArgs.gender = gen;
  }

  filterByOrigin(origin) {
    var ori = [...this.filterArgs.origin];
    var index = ori.indexOf(origin);
    if(index === -1) {
      ori.push(origin);
    } else {
      ori.splice(index, 1);
    }
    this.filterArgs.origin = ori
    ;
  }
}
