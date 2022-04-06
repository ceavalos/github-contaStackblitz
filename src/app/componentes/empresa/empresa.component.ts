import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../servicios/empresa.service';
import {Empresa} from '../../modelos/empresa'
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  
  productDialog: boolean;
  
  public empresas : Empresa[];
  

  empresa: Empresa;

  selectedEmpresas: Empresa[];

  submitted: boolean;

  constructor(private _empresaService: EmpresaService, 
              private messageService:     MessageService, 
              private confirmationService: ConfirmationService ) { };

  ngOnInit() {
    this.getAll();
  }

   getAll(){
    //console.log("antes de actualizar")
    //this.empresas = this._empresaService.getAll();
    this._empresaService.getAll().then(data => this.empresas = data);

   }

}
