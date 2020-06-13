import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
 // con lo siguiente voy a tener una referencia sin importar en que componente estoy
 // referencia al elemento en el que estoy, el txtprogress es un objeto con muchos index
  @ViewChild('txtprogre') txtProgress: ElementRef;   // recibo el elemento de html y lo uso en typescript con el nombre txtProgress

  @Input() leyenda: string = 'Leyenda'; // tambien se puede poner otro nombre dentro del input de la variable que viene
  @Input() porcentaje1: number = 2;

@Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {
//  console.log(this.porcentaje1)
  }

  onChange(newValue: number) // para un cammbio manual del input: ante cambio del ngModule que le esta asignado el
                             // valor del porcentaje este emite el nuevo valor tambien puede ser el mismo this.porcentaje
  {
    // console.log(newValue);

     // tslint:disable-next-line:prefer-const
     // let elemHTML: any = document.getElementById('txtProgreso');
     // console.log(elemHTML.value);

     if ( newValue >= 100)
    {
      this.porcentaje1 = 100;
    }
    else if ( newValue <= 0)
    {
      this.porcentaje1 = 0;
    }

    this.txtProgress.nativeElement.value = this.porcentaje1;
  // elemHTML.value = Number(this.porcentaje1);

    // console.log(this.porcentaje1);
    this.cambioValor.emit(this.porcentaje1); // o newValue

  }
  cambiarValor(valor)
  {
if (this.porcentaje1 >= 100 && valor > 0){
this.porcentaje1 = 100;
return;
}
if (this.porcentaje1 <= 0 && valor < 0){
  this.porcentaje1 = 0;
  return;
  }

this.porcentaje1 += valor;

this.cambioValor.emit(this.porcentaje1);

this.txtProgress.nativeElement.focus();
}

}
