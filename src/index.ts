import CheckClientClass from './entities/CheckClientClass';

const check = new CheckClientClass();
console.warn(check.checkEligibility('Rural'));
console.warn(check.checkEligibility('Comercial'));
