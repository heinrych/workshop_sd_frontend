import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Adocão';

  constructor(private router: Router) {

  }

  irParaTelaInicial() {

    this.router.navigate(['animais']);
  }

  irParaTelaDeCadastroDeAnimal() {

    this.router.navigate(['animais/new']);
  }

  irParaTelaDeCadastroDeCliente() {

    this.router.navigate(['clientes/newClient']);
  }
}
