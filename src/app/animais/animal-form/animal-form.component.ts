import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AnimaisService } from '../services/animais.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AnimaisService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      especie: [null],
      raca: [null],
      idade: [null],
      endereco: [null],
      descricao: [null],
    });
  }

  voltar() {
    this.router.navigate(['animais']);
  }

  salvar() {

    if (!this.form.value.nome) {
      this.snackBar.open('O nome é obrigatório!', ''), { duration: 5000 };
      return false;
    }

    if (!this.form.value.idade) {
      this.snackBar.open('A idade é obrigatória!', '', { duration: 5000 });
      return false;
    }

    if (!this.form.value.especie) {
      this.snackBar.open('A espécie é obrigatória!', '', { duration: 5000 });
      return false;
    }

    if (!this.form.value.raca) {
      this.snackBar.open('A raça é obrigatória!', '', { duration: 5000 });
      return false;
    }

    if (!this.form.value.descricao) {
      this.snackBar.open('A descrição é obrigatória!', '', { duration: 5000 });
      return false;
    }

    if (
      this.form.value.descricao.length < 10 ||
      this.form.value.descricao.length > 250
    ) {
      this.snackBar.open(
        'A descrição deve ter entre 10 e 250 caracteres!',
        '',
        { duration: 5000 }
      );
      return false;
    }

    if (!this.form.value.endereco) {
      this.snackBar.open('O endereço é obrigatório!', '', { duration: 5000 });
      return false;
    }

    if (
      this.form.value.endereco.length < 10 ||
      this.form.value.endereco.length > 250
    ) {
      this.snackBar.open('O endereço deve ter entre 10 e 250 caracteres!', '', {
        duration: 5000,
      });
      return false;
    }

    this.service
      .adicionarAnimal(this.form.value)
      .subscribe((resultado: any) => {
        if (resultado && resultado.data != null) {
          this.snackBar.open('Cadastro realizado com sucesso!', '', {
            duration: 5000,
          });
          this.router.navigate(['animais']);
        }
      });

    return true;
  }
}
