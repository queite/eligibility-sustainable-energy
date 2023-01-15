import ICheck from '../../interfaces/ICheck';
import {
  ClientClass, Ineligibility, Input, TaxClass
} from '../../types';
import CheckClientClass from '../checkers/CheckClientClass';
import CheckMinConsumption from '../checkers/CheckMinConsumption';
import CheckTaxClass from '../checkers/CheckTaxClass';

export default class Eligibility {
  private clientClass: ClientClass;

  private consumptionHistory: number[];

  private taxClass: TaxClass;

  private connectionType: string;

  private checkClientClass: ICheck;

  private checkMinConsumption: ICheck;

  private checkTaxClass: ICheck;

  private ineligibility: Ineligibility;

  constructor(clientData: Input) {
    this.clientClass = clientData.classeDeConsumo;
    this.consumptionHistory = clientData.historicoDeConsumo;
    this.taxClass = clientData.modalidadeTarifaria;
    this.connectionType = clientData.tipoDeConexao;
    this.checkClientClass = new CheckClientClass();
    this.checkMinConsumption = new CheckMinConsumption(this.consumptionHistory);
    this.checkTaxClass = new CheckTaxClass();
    this.ineligibility = [];
  };

  private CO2Calc() {
    const consumptionSum = this.consumptionHistory.reduce((acc, current) => acc + current);
    if (this.consumptionHistory.length < 12) {
      const consumptionAverage = consumptionSum / this.consumptionHistory.length;
      const annualConsumptionProjection = consumptionAverage * 12;
      return Number(((annualConsumptionProjection * 84) / 1000).toFixed(2));
    };
    return Number(((consumptionSum * 84) / 1000).toFixed(2));
  };

  checkEligibility() {
    const checkResults = [
      this.checkClientClass.checkEligibility(this.clientClass),
      this.checkMinConsumption.checkEligibility(this.connectionType),
      this.checkTaxClass.checkEligibility(this.taxClass)
    ];
    this.ineligibility = checkResults.filter((result) => result !== true) as Ineligibility;
    if (this.ineligibility.length > 0) {
      return {
      elegivel: false,
      razoesInelegibilidade: this.ineligibility};
    };
      return {
      elegivel: true,
      economiaAnualDeCO2: this.CO2Calc()
    };
  };
};