import { Component } from '@angular/core';
import { Riya33A3 } from '../riya33-a3';
import { loginData } from '../../assets/data/loginData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  user: Riya33A3 = loginData;
}
