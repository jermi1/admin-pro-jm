import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor()
  {

this.contarTres().then((mensaje) => console.log('Termino', mensaje))
        .catch( error => console.error('Error en la promesa', error));
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean>
  {
   // tarea que me notifique cuando un intervalo de tiempo cumple 3 segundos
    return new Promise((resolve, reject) => {
    let contador = 0;
    const intervalo = setInterval( () => {
    contador += 1;
    console.log(contador);
    if (contador === 3)
    {
      resolve(true);
      clearInterval(intervalo);
    }
    }, 1000);
    });

      }
}
