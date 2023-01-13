import cors from 'cors';
import express from 'express';
import EligibilityController from './controller/EligibilityController';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/eligibility', (req, res) => new EligibilityController(req, res).checkEligibility());

export default app;