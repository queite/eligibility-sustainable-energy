import ICheck from '../interfaces/ICheck';

export default class CheckClientClass implements ICheck {
  private eligibleClasses: string[];

  constructor() {
    this.eligibleClasses = ['Comercial', 'Residencial', 'Industrial'];
  }

  checkEligibility(clientClass: string): string | boolean {
    if (this.eligibleClasses.includes(clientClass)) {
      return 'Classe de consumo não aceita';
    }
    return false;
  }
}
