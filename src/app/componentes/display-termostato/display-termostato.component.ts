import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-termostato',
  imports: [],
  templateUrl: './display-termostato.component.html',
  styleUrl: './display-termostato.component.css',
  //Esto es para cambiar el color de la pantalla cuando salta la alarma
  host: {
    '[class.warning]': 'alarm'
  }
})
export class DisplayTermostatoComponent implements OnChanges{
  //hooks - se lanza cuando hay un cambio en input de componente
  //Esto es para que salte lo de la alarma
  ngOnChanges(changes: SimpleChanges): void {

    if(changes['temperature']){

      let temperatureImput = changes['temperature'].currentValue;

      if(temperatureImput > this.umbral){
        this.alarm = true;
      }else{
        this.alarm = false;
      }
    }
  }

  //inputs/output
  temperature = input.required<number>();

  //propiedades
  umbral = 25;
  alarm = false;

}
