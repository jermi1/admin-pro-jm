import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
ajustes: Ajustes =
{
  temaUrl: 'assets/css/colors/default.css',
  tema: 'default'
};
  constructor( @Inject(DOCUMENT) private _document) {
this.cargarAjustes();
   }

   guardarAjustes()
    {
      console.log(' guardado en el localStorage ');

      localStorage.setItem('ajustes', JSON.stringify(this.ajustes));  // convierte un objeto a string
    }
    cargarAjustes()
    {
      if (localStorage.getItem('ajustes'))
      {
        this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
        this.aplicarTema(this.ajustes.tema);
        localStorage.clear();
      console.log(' cargando del localstorage ');
      }else
      {
        console.log(' usando valores por defecto ');
        this.aplicarTema(this.ajustes.tema);
      }
    }

    aplicarTema(tema: string)
    {
   // tslint:disable-next-line:prefer-const
   let rutaNuevoColor = `assets/css/colors/${tema}.css`;
   this._document.getElementById('theme').setAttribute('href', rutaNuevoColor);
   // link.setAttribute('class', 'selector ' + tema + '-theme working');
   this.ajustes.temaUrl = rutaNuevoColor;
   this.ajustes.tema = tema;
   this.guardarAjustes();

    }
}

interface Ajustes
{
  temaUrl: string;
  tema: string;
}
