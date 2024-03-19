import { Injectable } from '@angular/core';
import { Riya33planet } from './myplanets';
import planets from '../assets/data/planets.json';

@Injectable({
  providedIn: 'root',
})
export class GetPlanetsService {
  planets: Array<Riya33planet> = planets.planets;
  constructor() {}

  getPlanets() {
    return this.planets;
  }
}
