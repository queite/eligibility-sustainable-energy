import { Input } from '../../src/types';

export const eligibleClient: Input = {
<<<<<<< HEAD
  'numeroDoDocumento': '14041737706',
  'tipoDeConexao': 'bifasico',
  'classeDeConsumo': 'comercial',
=======
  'numeroDoDocumento': '83295720053',
  'tipoDeConexao': 'bifasico',
  'classeDeConsumo': 'comercial',
  'subclassesDeConsumo': 'comercial',
>>>>>>> api
  'modalidadeTarifaria': 'convencional',
  'historicoDeConsumo': [
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
};

export const ineligibleClient: Input = {
<<<<<<< HEAD
  'numeroDoDocumento': '14041737706',
  'tipoDeConexao': 'bifasico',
  'classeDeConsumo': 'rural',
=======
  'numeroDoDocumento': '83295720053',
  'tipoDeConexao': 'bifasico',
  'classeDeConsumo': 'rural',
  'subclassesDeConsumo': 'agropecuariaRural',
>>>>>>> api
  'modalidadeTarifaria': 'verde',
  'historicoDeConsumo': [
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
};

export const eligibleClientWithLessConsumptionRegister: Input = {
<<<<<<< HEAD
  'numeroDoDocumento': '14041737706',
  'tipoDeConexao': 'bifasico',
  'classeDeConsumo': 'comercial',
=======
  'numeroDoDocumento': '83295720053',
  'tipoDeConexao': 'bifasico',
  'classeDeConsumo': 'comercial',
  'subclassesDeConsumo': 'comercial',
>>>>>>> api
  'modalidadeTarifaria': 'convencional',
  'historicoDeConsumo': [
    3878, // mes atual
    9760, // mes anterior
    5976, // 2 meses atras
    2797, // 3 meses atras
    2481, // 4 meses atras
    5731, // 5 meses atras
    7538, // 6 meses atras
    4392, // 7 meses atras
    7859, // 8 meses atras
  ]
};
