/**
 *Interfaces Ocupadas en el proyecto
 */
 export interface Search {
  total: number;
  page:  number;
  pages: number;
  data:  Datum[];
}

export interface Datum {
  id:            number;
  ocid:          string;
  year:          number;
  month:         number;
  method:        Method;
  internal_type: InternalType;
  locality:      string;
  region:        string;
  suppliers:     null | string;
  buyer:         string;
  amount:        string;
  date:          Date;
  title:         string;
  description:   string;
  budget:        null | string;
}

export enum InternalType {
  ContratacionDirecta = "Contratacion directa",
  MenorCuantía = "Menor Cuantía",
  SubastaInversaElectrónica = "Subasta Inversa Electrónica",
}

export enum Method {
  Direct = "direct",
  Open = "open",
  Selective = "selective",
}
