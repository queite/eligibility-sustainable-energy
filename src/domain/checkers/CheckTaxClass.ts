import ICheck from '../../interfaces/ICheck';

export default class CheckTaxClass implements ICheck {
  private eligibleClasses: string[];

  constructor() {
    this.eligibleClasses = ['convencional', 'branca'];
  }

  checkEligibility(taxClass: string): string | boolean {
    if (this.eligibleClasses.includes(taxClass)) {
      return true;
    }
    return 'Modalidade tarifária não aceita';
  }
}
