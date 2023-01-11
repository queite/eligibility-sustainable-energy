import CheckClientClass from './entities/CheckClientClass';
import CheckMinConsumption from './entities/CheckMinConsumption';

const check = new CheckClientClass();
console.warn(check.checkEligibility('Rural'));
console.warn(check.checkEligibility('Comercial'));

const checkMinConsumption = new CheckMinConsumption([
  3878, // mes atual
  9760, // mes anterior
  5976, // 2 meses atras
  2797, // 3 meses atras
  2481, // 4 meses atras
  5731, // 5 meses atras
  7538, // 6 meses atras
  4392, // 7 meses atras
  7859, // 8 meses atras
  4160, // 9 meses atras
  6941, // 10 meses atras
  4597, // 11 meses atras
]);
console.log(checkMinConsumption.checkEligibility('monofasico'));
console.log(checkMinConsumption.checkEligibility('bifasico'));

const checkMinConsumption2 = new CheckMinConsumption([
  78, // mes atual
  160, // mes anterior
  376, // 2 meses atras
  100, // 3 meses atras
  481, // 4 meses atras
]);

console.log(checkMinConsumption2.checkEligibility('monofasico'));
console.log(checkMinConsumption2.checkEligibility('bifasico'));
