import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // para el uso de directivas pipes etc
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router'; // para que funcionen los routerlinks


@NgModule({
    imports: [
        RouterModule,
        CommonModule
       ],
    declarations:
    [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports:
       [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
       ] // por que estos componentes se utilizaran fuera de la carpeta pages
})

export class SharedModule { }
