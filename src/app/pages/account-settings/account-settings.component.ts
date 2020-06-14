import { Component, OnInit} from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {


  constructor( private _ajustes: SettingsService ){}

  ngOnInit(): void {

    // this._ajustes.cargarAjustes();
    // this._document.getElementById('theme').setAttribute('href', this._ajustes.ajustes.temaUrl);
   this.colocarCheck();
  }
  cambiarColor(tema: string, link: any)
  {
    // console.log(link);
    // tslint:disable-next-line:prefer-const
    let selectores: any = document.getElementsByClassName('selector'); // trae un arreglo de todas las clases
    // tslint:disable-next-line:prefer-const
    for ( let selector of selectores)
    {
      selector.classList.remove('working');
    }
    link.classList.add('working');

     this._ajustes.aplicarTema(tema);

  }

  colocarCheck()
  {
    // tslint:disable-next-line:prefer-const
    let selectores: any = document.getElementsByClassName('selector'); // trae un arreglo de todas las clases
    // tslint:disable-next-line:prefer-const
    for ( let selector of selectores)
    {
      if ( selector.getAttribute('data-theme') === this._ajustes.ajustes.tema )
      {
         selector.classList.add('working');
       break;
      }
    }

  }

}
