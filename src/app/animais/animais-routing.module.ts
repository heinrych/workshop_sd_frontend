import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaisComponent } from './animais/animais.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';

const routes: Routes = [
  { path: '', component: AnimaisComponent },
  { path: 'new', component: AnimalFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
