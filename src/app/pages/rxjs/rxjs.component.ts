import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

subscription: Subscription;

  constructor()
  {
this.subscription = this.regresaObservable() /* .pipe(retry(2)) */ // un pipe transforma la data
   .subscribe(numero => console.log('subs', numero),
              error => console.error('Error obs', error),
              () => console.log('El obs Termino')
);

}

  ngOnInit(): void {
  }

  ngOnDestroy()
  {
    console.log('La pagina se va a cerrar');
  this.subscription.unsubscribe();
  }
  regresaObservable(): Observable<any>
  {
return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next( salida ); // notificar al codigo que llego un contador, osea un 1 un 2 un 3
      if (contador === 3){
       clearInterval(intervalo);
       observer.complete();
      }
      // if ( contador === 2){
      // // clearInterval(intervalo); // con esto el contador nunca llega a 3 y
      //                           //  sin esto llega a 3 por que el obserbable pruueba una ves mas por el retry y aumenta el contador
      // observer.error('Auxilio');
      // }
      }, 1000);

      })
      .pipe( map( resp => resp.valor),
      filter( (value, index ) => {  // tiene que retornar un true o un false
    // console.log('filter', value, index);
if ( (value % 2) === 1)
{
  return true;

}
else
{
  return false;
}
      })

      );
    }
}
