import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenMapaComponent } from './pages/full-screen-mapa/full-screen-mapa.component';
import { MarcadoresMapaComponent } from './pages/marcadores-mapa/marcadores-mapa.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';


@NgModule({
  declarations: [MiniMapaComponent, FullScreenMapaComponent, MarcadoresMapaComponent, ZoomRangeComponent, PropiedadesComponent],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
