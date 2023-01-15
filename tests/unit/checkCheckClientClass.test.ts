import { expect } from "chai";
import CheckClientClass from "../../src/domain/checkers/CheckClientClass";

describe('CheckClientClass', () => {
  it('should return true if elegible', () => {
    const checkClientClass = new CheckClientClass();
    expect(checkClientClass.checkEligibility('residencial')).to.be.equal(true);
  });

  it('should return "Classe de consumo não aceita" if inelegible', () => {
    const checkClientClass = new CheckClientClass();
    expect(checkClientClass.checkEligibility('rural')).to.be.equal('Classe de consumo não aceita');
  });
});