import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Title, MetaDefinition, Meta } from '@angular/platform-browser';
// todas las paginas pasan por el breadcrumbs
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {
public titulo: string;
  constructor(private _router: Router,
              private _title: Title,
              private _meta: Meta )
  {

    this.getDataRoute().subscribe(event => {
      this.titulo = event;
      this._title.setTitle(this.titulo);
      const metaTag: MetaDefinition =
      {
        name: 'descripcion',
        content: this.titulo
      };
      this._meta.updateTag(metaTag);
   });
  }

  ngOnInit(): void {
  }

  getDataRoute(): Observable<string>
  {
    return this._router.events.pipe(
      filter( event => event instanceof ActivationEnd ),  // que me devuelva solo lo que me interesa osea una instancia de ActivationEnd
      // tslint:disable-next-line:max-line-length
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),  // en este caso utilizo la propiedad firstchild que en el primer ActivationEnd es null para poder filtrar solo ese primer ActivationEnd
      map((event: ActivationEnd) => event.snapshot.data.titulo)
      );
  }
}
