import ICheck from '../../interfaces/ICheck';

export default class CheckClientClass implements ICheck {
  private eligibleClasses: string[];

  constructor() {
    this.eligibleClasses = ['comercial', 'residencial', 'industrial'];
  }

  checkEligibility(clientClass: string): string | boolean {
    if (this.eligibleClasses.includes(clientClass)) {
      return true;
    }
      return 'Classe de consumo não aceita';
  }
}
