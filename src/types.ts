import { z } from 'zod';

export type ConnectionType = 'monofasico' | 'bifasico' | 'trifasico';

export type ClientClass = 'residencial' | 'industrial' | 'comercial' | 'rural' | 'poderPublico';

export type TaxClass = 'azul' | 'branca' | 'verde' | 'convencional';

export const InputZodSchema = z.object({
  numeroDoDocumento: z.string(),
  tipoDeConexao: z.custom<`${ConnectionType}`>((val) => [
    'monofasico',
    'bifasico',
    'trifasico'].includes(val as string)),
  classeDeConsumo: z.custom<`${ClientClass}`>((val) => [
    'residencial',
    'industrial',
    'comercial',
    'rural',
    'poderPublico'].includes(val as string)),
  modalidadeTarifaria: z.custom<`${TaxClass}`>((val) => ['azul',
    'branca',
    'verde',
    'convencional'].includes(val as string)),
  historicoDeConsumo: z.number().array()
})

export type Input = z.infer<typeof InputZodSchema>;

export type Ineligibility = 'Classe de consumo não aceita' | 'Modalidade tarifária não aceita' | 'Consumo muito baixo para tipo de conexão'[];
