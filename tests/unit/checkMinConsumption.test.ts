import { expect } from "chai"
import CheckMinConsumption from "../../src/domain/checkers/CheckMinConsumption"
import { eligibleConsumption, ineligibleConsumption } from "../mocks/checkersMocks"

describe('CheckMinConsumptionClass', () => {
  it('should return true if elegible', () => {
    const checkMinConsumptionClass = new CheckMinConsumption(eligibleConsumption)
    expect(checkMinConsumptionClass.checkEligibility('monofasico')).to.be.eq(true)
  })
  it('should return "Consumo muito baixo para tipo de conexão" if inelegible', () => {
    const checkMinConsumptionClass = new CheckMinConsumption(ineligibleConsumption)
    expect(checkMinConsumptionClass.checkEligibility('monofasico')).to.be.eq('Consumo muito baixo para tipo de conexão')
  })
})