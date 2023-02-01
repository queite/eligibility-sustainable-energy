import { cnpj, cpf } from 'cpf-cnpj-validator';
import { z } from 'zod';

export type ConnectionType = 'monofasico' | 'bifasico' | 'trifasico';

export type ClientClass = 'residencial' | 'industrial' | 'comercial' | 'rural' | 'poderPublico';

export type TaxClass = 'azul' | 'branca' | 'verde' | 'convencional';

export const InputZodSchema = z.object({
  numeroDoDocumento:z.string().refine((val) => (val.length === 11 && cpf.isValid(val))
  || (val.length === 14 && cnpj.isValid(val))
  , {
    message: 'CNPJ/CPF inválido',
  }),
  tipoDeConexao: z.custom<`${ConnectionType}`>((val) => [
    'monofasico',
    'bifasico',
    'trifasico'].includes(val as string)),
  classeDeConsumo: z.enum([
    'residencial',
    'industrial',
    'comercial',
    'rural',
    'poderPublico']),
  subclassesDeConsumo: z.enum([
  'administracaoCondominial',
  'agropecuariaRural',
  'baixaRenda',
  'comercial',
  'industrial',
  'poderPublicoEstadual',
  'poderPublicoMunicipal',
  'residencial',
  'servicosDeTelecomunicacao',
  'servicosDeTransporte',
  'templosReligiosos',
  ]),
  modalidadeTarifaria: z.enum(
    ['azul', 'branca', 'verde', 'convencional']),
  historicoDeConsumo: z.number().array().min(3).max(12)
});

export type Input = z.infer<typeof InputZodSchema>;

export type Ineligibility = 'Classe de consumo não aceita'
  | 'Modalidade tarifária não aceita'
  | 'Consumo muito baixo para tipo de conexão'[];
