import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// ng-charts
import { ChartsModule } from 'ng2-charts';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations:
    [
     PagesComponent,
     DashboardComponent,
     ProgressComponent,
     Graficas1Component,
     IncrementadorComponent,
     GraficoDonaComponent,
     AccountSettingsComponent,
     PromesasComponent,
     RxjsComponent
    ],
    exports:
       [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
       ], // por que estos componentes se utilizaran fuera de la carpeta pages
       imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }
