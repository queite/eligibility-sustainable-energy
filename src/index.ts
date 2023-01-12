import CheckClientClass from './entities/CheckClientClass';
import CheckMinConsumption from './entities/CheckMinConsumption';
import Eligibility from './entities/Eligibility';


const check = new CheckClientClass();
console.log('should be false', check.checkEligibility('rural'));
console.log('should be true', check.checkEligibility('comercial'));

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
console.log('should be true', checkMinConsumption.checkEligibility('monofasico'));
console.log('should be true', checkMinConsumption.checkEligibility('bifasico'));

const checkMinConsumption2 = new CheckMinConsumption([
  78, // mes atual
  160, // mes anterior
  376, // 2 meses atras
  100, // 3 meses atras
  481, // 4 meses atras
]);

console.log('should be false', checkMinConsumption2.checkEligibility('monofasico'));
console.log('should be false', checkMinConsumption2.checkEligibility('bifasico'));

const client1 = new Eligibility({
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
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
    4597  // 11 meses atras
  ]
})
console.log('client1 should be ok', client1.checkEligibility())

const client2 = new Eligibility({
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "rural",
  "modalidadeTarifaria": "verde",
  "historicoDeConsumo": [
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
  ]
})
console.log(client2.checkEligibility())