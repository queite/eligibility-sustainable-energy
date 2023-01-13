import { Request, Response } from "express";
import Eligibility from "../domain/eligibility/Eligibility";
import { Input, InputZodSchema } from "../types";

export default class EligibilityController {
  private consumerData: Input

  constructor(private req: Request, private res: Response) {
    this.req = req;
    this.res = res;
    this.consumerData = req.body;
  }

  checkEligibility() {
    const inputValidation = InputZodSchema.safeParse(this.consumerData);
    if( !inputValidation.success) {
      return this.res.status(400).json({message: 'Verifique os dados do cliente'})
    }
    const eligibility = new Eligibility(this.consumerData);
    return this.res.status(201).json(eligibility.checkEligibility())
  }
}