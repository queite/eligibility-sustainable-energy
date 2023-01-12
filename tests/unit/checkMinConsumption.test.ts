import { expect } from "chai";
import CheckMinConsumption from "../../src/domain/checkers/CheckMinConsumption";
import { elegibleConsumption, inelegibleConsumption } from "../mocks/checkersMocks";

describe('CheckMinConsumptionClass', () => {
  it('should return true if elegible', () => {
    const checkMinConsumptionClass = new CheckMinConsumption(elegibleConsumption)
    expect(checkMinConsumptionClass.checkEligibility('monofasico')).to.be.eq(true)
  })
  it('should return "Consumo muito baixo para tipo de conexão" if inelegible', () => {
    const checkMinConsumptionClass = new CheckMinConsumption(inelegibleConsumption)
    expect(checkMinConsumptionClass.checkEligibility('monofasico')).to.be.eq('Consumo muito baixo para tipo de conexão')
  })
})