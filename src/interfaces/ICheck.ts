export default interface ICheck {
  checkEligibility(string: string, string2?: string): string | string[] | boolean | boolean[]
}
