import { Component } from '@angular/core';
import { AnimaisService } from '../services/animais.service';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class AnimaisComponent {
  animais: any;
  naoPossuiAnimais: boolean = false;
  displayedColumns = ['id', 'nome', 'especie', 'raca', 'idade'];

  constructor(public animaisService: AnimaisService) {
    this.animaisService.obterAnimais().subscribe((animais: any) => {

      if (animais && animais.length > 0) {
        this.animais = animais;
      } else {
        this.naoPossuiAnimais = true;
      }
    });
  }
}
