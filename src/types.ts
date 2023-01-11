export type ConnectionType = 'monofasico' | 'bifasico' | 'trifasico';

export type ClientClass = 'residencial' | 'industrial' | 'comercial' | 'rural' | 'poderPublico';

export type TaxClass = 'azul' | 'branca' | 'verde' | 'convencional';

export type Input = {
  numeroDoDocumento: string,
  tipoDeConexao: ConnectionType,
  classeDeConsumo: ClientClass,
  modalidadeTarifaria: TaxClass,
  historicoDeConsumo: number[]
};

export type Ineligibility = 'Classe de consumo não aceita' | 'Modalidade tarifária não aceita' | 'Consumo muito baixo para tipo de conexão';
