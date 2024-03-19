import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Riya33planet } from '../myplanets';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.css',
})
export class PlanetDetailsComponent {
  planet: any;
  constructor(private route: Router) {
    this.planet = this.route.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {}
}
