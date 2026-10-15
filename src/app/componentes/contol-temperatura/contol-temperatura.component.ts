import { Component, input, output } from '@angular/core';
import { constants } from 'buffer';

@Component({
  selector: 'app-contol-temperatura',
  imports: [],
  templateUrl: './contol-temperatura.component.html',
  styleUrl: './contol-temperatura.component.css'
})
export class ContolTemperaturaComponent {
    //input/output
    temperature = input.required<number>();
    temperatureOutput = output<number>();
    umbralOutput = output<number>();


    //priopiedades
    tempUpdate?: number;

    //eventos/listeners
    onClickIncTemp(){
      this.tempUpdate = this.temperature() + 1;
      this.temperatureOutput.emit(this.tempUpdate)
    }

    onClickDecTemp(){
      this.tempUpdate = this.temperature() - 1;
      this.temperatureOutput.emit(this.tempUpdate)
    }

    onInput(event: Event){
      let inputElement = event.target as HTMLInputElement;

      try{
        let umbral = Number(inputElement.value);
        console.log(`se establece le nuevo: ${umbral}`)
        this.umbralOutput.emit(umbral);
      }catch(error){
        inputElement.value = this.temperature().toString();
      }
    }
}
