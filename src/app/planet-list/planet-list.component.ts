import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { GetPlanetsService } from '../get-planets.service';
import { Riya33planet } from '../myplanets';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css',
})
export class PlanetListComponent {
  constructor(
    private planetService: GetPlanetsService,
    private router: Router
  ) {}

  planets: Array<Riya33planet> = this.planetService.getPlanets();

  displayPlanet(planet: Riya33planet) {
    this.router.navigate(['/planet'], { queryParams: { key: planet } });
  }

  ngOnInit(): void {}
}
