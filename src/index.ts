import { eligibleClient, ineligibleClient } from '../tests/mocks/eligibilitiMocks';
import Eligibility from './domain/eligibility/Eligibility';


const client1 = new Eligibility(eligibleClient)
console.log('client1 should be eligible', client1.checkEligibility())

const client2 = new Eligibility(ineligibleClient)
console.log('client2 should be ineligible', client2.checkEligibility())