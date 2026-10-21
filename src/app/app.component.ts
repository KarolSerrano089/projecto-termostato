import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContolTemperaturaComponent } from './componentes/contol-temperatura/contol-temperatura.component';
import { DisplayTermostatoComponent } from './componentes/display-termostato/display-termostato.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContolTemperaturaComponent, DisplayTermostatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projecto-termostato';

  temperatura = 20;
  umbral = 25;

  //eventos/listeners
  onCambioTemperaturaOutput(tempUpdate: number){
    this.temperatura = tempUpdate;
  }
  onUmbralChange(nuevoUmbral: number) {
    this.umbral = nuevoUmbral;
  }
}
