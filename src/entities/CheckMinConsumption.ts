import ICheck from '../interfaces/ICheck';

export default class CheckMinConsumption implements ICheck {
  private minConsuption: Record<string, number> = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
  };

  constructor(private consumptionHistory: number[]) {
    this.consumptionHistory = consumptionHistory;
  }

  private consumptionAverage() {
    const sum = this.consumptionHistory.reduce((acc, current) => acc + current);
    console.log(sum / this.consumptionHistory.length)
    return sum / this.consumptionHistory.length;
  }

  checkEligibility(connectType: string): string | boolean {
    if (this.consumptionAverage() >= this.minConsuption[connectType]) {
      return true;
    }
    return 'Consumo muito baixo para tipo de conexão';
  }
}
