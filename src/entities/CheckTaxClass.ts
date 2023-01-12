import ICheck from '../interfaces/ICheck';

export default class CheckTaxClass implements ICheck {
  private eligibleClasses: string[];

  constructor() {
    this.eligibleClasses = ['Convencional', 'Branca'];
  }

  checkEligibility(taxClass: string): string | boolean {
    if (this.eligibleClasses.includes(taxClass)) {
      return 'Modalidade tarifária não aceita';
    }
    return false;
  }
}
