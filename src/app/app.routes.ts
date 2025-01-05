import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { EducacionComponent } from './paginas/educacion/educacion.component';
import { SobreMiComponent } from './paginas/sobre-mi/sobre-mi.component';
import { TrabajarJuntosComponent } from './paginas/trabajar-juntos/trabajar-juntos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { FaqsComponent } from './paginas/faqs/faqs.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'conocimientos', component: EducacionComponent },
  { path: 'sobreMi', component: SobreMiComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'trabajarJuntos', component: TrabajarJuntosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
