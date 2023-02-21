import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  private readonly API = "api/animal";

  constructor(private httpClient: HttpClient) {}

  obterAnimais() {
    return this.httpClient.get(this.API).pipe(first());
  }

  adicionarAnimal(animal: any = {}){
    return this.httpClient.post(this.API, animal).pipe(first());
  }
}
