import { Injectable, OnInit } from '@angular/core';
import { EMPRESAS } from '../datos/empresa';
import { Empresa } from '../modelos/empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService implements OnInit {
  private empresas: Empresa[];

  ngOnInit() {}

  constructor() {
    this.empresas = EMPRESAS;
  }

  async getAll(): Promise<Empresa[]> {
    //console.log("Antes de get all en empresaService");
    //console.log(this.empresas)
    //console.log(this.empresas)
    return await Promise.all(this.empresas);
  }

  //Buscar por id
  getId(id: number) {
    return this.empresas.filter((fil) => fil.idempresa === id);
  }
  s;
  //adicionar
  adicionar(dato: Empresa) {
    this.empresas.push(dato);
    this.getAll();
  }
}
