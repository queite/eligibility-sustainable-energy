# Lemon 🍋
## Backend Case

### 📑Domain
<details>
<summary>main branch</summary>

- Nesta branch foi desenvolvida a lógica de negócio usando POO e TypeScript.
- Foram realizados testes unitários para cada classe criada.
- É possível visualizar a cobertura de testes.
- Para saber como rodar os testes e cobertura veja a seção ``Testes``
</details>
<br>

### 🔄️API
<details>
<summary>api branch</summary>

- Nesta branch foi implementada uma API simples para entrega do resultado de elegibilidade do cliente.
- Foram adicionados testes de integração.
- Para saber como rodar os testes e cobertura veja a seção ``Testes``
</details>
<details>
<summary>Como rodar a aplicação</summary>

Clone o repositório:
```
git clone git@github.com:queite/lemon-case.git
```
Entre na pasta raiz:
```
cd lemon-case
```
Instale as depenências:
```
npm install
```
Acesse a branch api:
```
git checkout api
```
Rode a aplicação:
```
npm run dev
```
Teste a rota ``localhost:3000/eligibility`` com Thunder Client (rota e body já disponíveis) ou outra ferramenta de sua preferência.

<br>

<details>
<summary>Formato do body</summary>

**Cliente elegível**
```
{
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597
  ]
}
```
**Cliente inelegível**
```
{
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "rural",
  "modalidadeTarifaria": "verde",
  "historicoDeConsumo": [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160
  ]
}
```
</details>
</details>
<br>

### ⚗️Testes
<details>
<summary>Como rodar os testes</summary>
<br>

Clone o repositório:
```
git clone git@github.com:queite/lemon-case.git
```
Entre na pasta raiz:
```
cd lemon-case
```
Instale as depenências:
```
npm install
```
**⚗️Rodando apenas testes**:
```
npm test
```
**🧪✅Rodando testes com cobertura**:
```
npm run test:coverage
```
</details>
<details>
<summary>Relatório de testes</summary>

**Tests:** <br>
![tests](./img/tests.png)

**Coverage:** <br>
![coverage](./img/coverage.png)
</details>
<br>

### 👌Regras de negócio
<details>
<summary>Critérios de Elegibilidade</summary>

- **Classe de consumo da cliente**
    - Possíveis Valores: Comercial, Residencial, Industrial, Poder Público, e Rural.
    - Elegíveis: Comercial, Residencial e Industrial.
- **Modalidade tarifária**
    - Possíveis Valores: Branca, Azul, Verde, e Convencional.
    - Elegíveis: Convencional, Branca.
- **Consumo mínimo do cliente**
    - O cálculo deve ser feito utilizando a média dos 12 valores mais recentes do histórico de consumo.
        - Clientes com tipo de conexão Monofásica só são elegíveis caso tenham consumo médio acima de 400 kWh.
        - Clientes com tipo de conexão Bifásica só são elegíveis caso tenham consumo médio acima de 500 kWh.
        - Clientes com tipo de conexão Trifásica só são elegíveis caso tenham consumo médio acima de 750 kWh.
- Para calcular a projeção da **economia anual** de CO2, considere que para serem gerados 1000 kWh no Brasil são emitidos em média 84kg de CO2.
</details>