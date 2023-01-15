import { expect } from 'chai';
import CheckTaxClass from '../../src/domain/checkers/CheckTaxClass';

describe('CheckTaxClass', () => {
  it('should return true if elegible', () => {
    const checkTaxClient = new CheckTaxClass();
    expect(checkTaxClient.checkEligibility('branca')).to.be.equal(true);
  });

  it('should return "Modalidade tarifária não aceita" if inelegible', () => {
     const checkTaxClient = new CheckTaxClass();
     expect(checkTaxClient.checkEligibility('rural'))
      .to.be.equal('Modalidade tarifária não aceita');
  });
});