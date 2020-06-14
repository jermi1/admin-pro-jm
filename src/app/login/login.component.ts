import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_custom();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
  ]
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router)
  {

  }

  ngOnInit(): void {
    init_custom();
  }
  ingresar()
  {
    this._router.navigate([ '/dashboard' ]);
  }
}
