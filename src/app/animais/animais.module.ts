import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../shared/app-material/app-material.module'
import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimaisComponent } from './animais/animais.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';


@NgModule({
  declarations: [AnimaisComponent, AnimalFormComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    AppMaterialModule
  ],
})
export class AnimaisModule {}
