import { expect } from 'chai';
import Eligibility from '../../src/domain/eligibility/Eligibility';
import {
  eligibleClient,
  eligibleClientWithLessConsumptionRegister,
  ineligibleClient
} from '../mocks/eligibilitiMocks';

describe('Eligibility', () => {
  it('should return object with key "economiaAnualDeCO2" if client is eligible', () => {
    const checkEligibility = new Eligibility(eligibleClient);
    expect(checkEligibility.checkEligibility()).to.have.property('economiaAnualDeCO2');
  });

  it('should return object with key "razoesInelegibilidade" if client is ineligible', () => {
    const checkEligibility = new Eligibility(ineligibleClient);
    expect(checkEligibility.checkEligibility()).to.have.property('razoesInelegibilidade');
  });

  it('should return annual projection based on average if consumption history is less than twelve',
    () => {
      const checkEligibility = new Eligibility(eligibleClientWithLessConsumptionRegister);
      expect(checkEligibility.checkEligibility())
        .to.have.deep.eq({'elegivel': true, 'economiaAnualDeCO2': 5646.14});
  })
})