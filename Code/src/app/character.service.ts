import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly characterUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCharacters() {
    return this.httpClient.get(this.characterUrl);
  }
}
