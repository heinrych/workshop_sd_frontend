import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss'],
})
export class ClienteFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ClientesService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      telefone: [null],
      endereco: [null],
      email: [null],
      senha: [null],
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

    if (!this.form.value.cpf) {
      this.snackBar.open('O CPF é obrigatório!', '', { duration: 5000 });
      return false;
    }

    if (this.form.value.cpf.length != 11) {
      this.snackBar.open('CPF inválido!', '', { duration: 5000 });
      return false;
    }

    if (!this.form.value.telefone) {
      this.snackBar.open('O telefone é obrigatório', '', { duration: 5000 });
      return false;
    }

    if (
      this.form.value.telefone.length < 8 ||
      this.form.value.telefone.length > 22
    ) {
      this.snackBar.open('O telefone deve ter entre 8 e 22 caracteres!', '', {
        duration: 5000,
      });
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

    if (!this.form.value.email) {
      this.snackBar.open('O email é obrigatório!', '', { duration: 5000 });
      return false;
    }

    if (
      this.form.value.email.length < 10 ||
      this.form.value.email.length > 100
    ) {
      this.snackBar.open('O email deve ter entre 10 e 100 caracteres!', '', {
        duration: 5000,
      });
      return false;
    }

    if (!this.form.value.senha) {
      this.snackBar.open('A senha é obrigatória!', '', { duration: 5000 });
      return false;
    }

    if (this.form.value.senha.length < 8) {
      this.snackBar.open('Senha deve conter pelo menos 8 caracteres!', '', {
        duration: 5000,
      });
      return false;
    }

    this.service
      .adicionarCliente(this.form.value)
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
