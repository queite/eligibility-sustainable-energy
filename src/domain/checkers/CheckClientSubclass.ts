import ICheck from '../../interfaces/ICheck';

export default class CheckClientSubclass implements ICheck {
  private ineligibilityReasons: string[];

  constructor() {
    this.ineligibilityReasons = [];
  }

  private possibleSubclasses: Record<string, string[]> = {
    comercial: [
      'administracaoCondominial',
      'comercial',
      'servicosDeTelecomunicacao',
      'servicosDeTransporte',
      'templosReligiosos'
    ],
    industrial: ['industrial'],
    residencial: ['residencial','baixaRenda'],
    poderPublico: ['poderPublicoEstadual', 'poderPublicoMunicipal'],
    rural: ['agropecuariaRural']
  };

  private elegibleSubclasses: Record<string, string[]> = {
     comercial: [
      'administracaoCondominial',
      'comercial',
      'servicosDeTelecomunicacao',
      'servicosDeTransporte',
    ],
    industrial: ['industrial'],
    residencial: ['residencial'],
    poderPublico: [],
    rural: []
  }

  checkEligibility(clientClass: string, clientSubclass: string): string[] | boolean[] {
    if (!this.possibleSubclasses[clientClass].includes(clientSubclass)) {
      this.ineligibilityReasons.push('Subclasse de consumo não pertence a classe de consumo')
    }
    if (!this.elegibleSubclasses[clientClass].includes(clientSubclass)){
      this.ineligibilityReasons.push('Subclasse de consumo não e aceita')
    }

    if (this.ineligibilityReasons.length === 0){
      return [true]
    }
    return this.ineligibilityReasons
  }
}
