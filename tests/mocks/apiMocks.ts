export const invalidInput = {
  'numeroDoDocumento': '83295720053',
  'classeDeConsumo': 'Rural',
  'subclassesDeConsumo': 'agropecuariaRural',
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
}

export const invalidCNPJ = {
  'numeroDoDocumento': '10771772000080',
  'classeDeConsumo': 'comercial',
  'subclassesDeConsumo': 'comercial',
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
}

export const invalidDocResponse = {
  "field": [
    "numeroDoDocumento"
  ],
  "message": "CNPJ/CPF inválido"
}