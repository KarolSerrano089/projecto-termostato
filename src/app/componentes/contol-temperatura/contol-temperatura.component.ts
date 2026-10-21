import { Component, input, output } from '@angular/core';

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
    umbral = input.required<number>();


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

      let umbral = Number(inputElement.value);
      if(Number.isNaN(umbral)){
        inputElement.value = this.umbral().toString();
      }else{
        console.log(`Se establece nuevo ${umbral}`);
        this.umbralOutput.emit(umbral);
      }
    }
}
