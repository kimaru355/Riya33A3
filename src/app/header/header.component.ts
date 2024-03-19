import { Component } from '@angular/core';
import { loginData } from '../../assets/data/loginData';
import { Riya33A3 } from '../riya33-a3';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user: Riya33A3 = loginData;
}
