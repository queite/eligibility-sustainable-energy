import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import invalidInput from '../mocks/apiMocks';
import { eligibleClient, ineligibleClient } from '../mocks/eligibilitiMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('api', () => {
  it('should return status 201 and object with key "razoesInelegibilidade" if client is ineligible', async () => {
    const response = await chai.request(app).post('/eligibility').send(ineligibleClient);
    expect(response.status).to.be.eq(201);
    expect(response.body).to.have.property('razoesInelegibilidade');
  });

  it('should return status 201 and object with key "economiaAnualDeCO2" if client is eligible', async () => {
    const response = await chai.request(app).post('/eligibility').send(eligibleClient);
    expect(response.status).to.be.eq(201);
    expect(response.body).to.have.property('economiaAnualDeCO2');
  });

  it('should return status 400 and an object with key "message" if there is no input', async () => {
    const response = await chai.request(app).post('/eligibility').send();
    expect(response.status).to.be.eq(400);
    expect(response.body).to.have.property('message');
  });

  it('should return status 400 and an object with key "message" if the input is invalid', async () => {
    const response = await chai.request(app).post('/eligibility').send(invalidInput);
    expect(response.status).to.be.eq(400);
    expect(response.body).to.have.property('message');
  });
});