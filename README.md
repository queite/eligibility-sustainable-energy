# Lemon 🍋
## Backend Case

### Domain
<details>
<summary>main branch📑</summary>

- Nesta branch foi desenvolvida a lógica de negócio usando POO.
- Foram realizados testes unitários para cada classe criada.
- É possível visualizar a cobertura de testes.
- Para saber como rodar os testes e cobertura veja a seção ``Testes``
</details>


### API
<details>
<summary>api branch🔄️</summary>
</details>

### Testes
<details>
<summary>Como rodar os testes⚙️</summary>
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
npm run test
```
**🧪✅Rodando testes com cobertura**:
```
npm run test:coverage
```
</details>

### Regras de negócio
<details>
<summary>Critérios de Elegibilidade 👌</summary>

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