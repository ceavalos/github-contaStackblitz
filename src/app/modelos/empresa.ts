import { IEmpresas } from '../interfaces/empresas.ts';

export class Empresa implements IEmpresas {
  idempresa?: string;
  nombre?: string;
  representante?: string;
  direccion?: string;
  nit?: string;
  activa?: boolean;
  fotografia?: string;
}
