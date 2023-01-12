import { expect } from "chai"
import Eligibility from "../../src/domain/eligibility/Eligibility"
import { eligibleClient, ineligibleClient } from "../mocks/eligibilitiMocks"

describe('Eligibility', () => {
  it('should return object with key "economiaAnualDeCO2" if client is eligible', () => {
    const checkEligibility = new Eligibility(eligibleClient)
    expect(checkEligibility.checkEligibility()).to.have.property('economiaAnualDeCO2')
  })
  it('should return object with key razoesInelegibilidade if client is ineligible', () => {
    const checkEligibility = new Eligibility(ineligibleClient)
    expect(checkEligibility.checkEligibility()).to.have.property('razoesInelegibilidade')
  })
})