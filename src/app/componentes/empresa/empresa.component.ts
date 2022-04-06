import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../servicios/empresa.service';
import {Empresa} from '../../modelos/empresa'

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public empresas : Empresa[];

  constructor(private _empresaService: EmpresaService ) { };


  ngOnInit() {
    this.getAll();
  }

   getAll(){
    //console.log("antes de actualizar")
    this.empresas = this._empresaService.getAll();

   }

}
