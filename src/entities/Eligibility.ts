import {
  ClientClass, Ineligibility, Input, TaxClass
} from '../types';

export default class Eligibility {
  private clientClass: ClientClass;

  private consumptionHistory: number[];

  private taxClass: TaxClass;

  private ineligibility: Ineligibility[];

  constructor(clientData: Input) {
    this.clientClass = clientData.classeDeConsumo;
    this.consumptionHistory = clientData.historicoDeConsumo;
    this.taxClass = clientData.modalidadeTarifaria;
    this.ineligibility = [];
  }

  // private createEligibleOutput() {
  //   // calculo economia anual de CO2 aqui dentro?

  // }

  // private createIneligibleOutput() {

  // }

  // checkEligibility() {
  //   // chamar os checkers e cfe resultado inserir motivo(s) de inelegibilidade se houver
  // }

}

// próximos passos
// 1 - testes e cobertura de testes
// 2 - README do que está pronto
// 3 - API para mostrar resultado - nova branch
// 4 - testes API
// 5 - Atualizar README