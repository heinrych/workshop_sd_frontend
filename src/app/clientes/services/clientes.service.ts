import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private readonly API = "api/cliente";

  constructor(private httpClient: HttpClient) { }

  adicionarCliente(cliente: any){
    return this.httpClient.post(this.API, cliente).pipe(first());
  }
}
