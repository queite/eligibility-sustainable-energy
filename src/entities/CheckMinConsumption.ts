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
    const average = this.consumptionHistory.reduce((acc, current) => acc + current);
    console.log(average / this.consumptionHistory.length);
    return average / this.consumptionHistory.length;
  }

  checkEligibility(connectType: string): boolean {
    if (this.consumptionAverage() >= this.minConsuption[connectType]) {
      return true;
    }
    return false;
  }
}
