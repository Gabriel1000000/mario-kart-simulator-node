# 🏎️ Mario Kart Simulator (Node.js)

Simulador de Corridas inspirado no universo Mario Kart, desenvolvido com Node.js. O objetivo é criar uma simulação divertida e interativa em linha de comando (CLI), onde personagens disputam posições com base em sorte e desempenho. Ideal para praticar lógica de programação, estruturas de dados e manipulação de tempo com JavaScript.

## 🎯 Desafio

> Desafio de projeto do Felipão: **MarioKart.js**  
> Crie uma lógica de simulação de corridas inspirada no clássico Mario Kart, levando em consideração regras e mecânicas definidas.  

| ![Mario Kart](docs/header.gif) |  
|:--:|  
| *Imagem ilustrativa do jogo* |

---

## 👥 Personagens disponíveis

<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="docs/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 4</p>
            <p>Manobrabilidade: 3</p>
            <p>Poder: 3</p>
        </td>
            <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="docs/peach.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 2</p>
        </td>
            <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="docs/bowser.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 5</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="docs/luigi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="docs/dk.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
    </tr>
</table>

## 🧠 Regras & Mecânicas

- Cada corrida é composta por 5 rodadas.
- Em cada rodada, será sorteado um **bloco de pista**:
  - **Reta:** os personagens rolam um dado de 6 lados e somam ao atributo `VELOCIDADE`.
  - **Curva:** rolam o dado e somam ao atributo `MANOBRABILIDADE`.
  - **Confronto:** rolam o dado e somam ao atributo `PODER`. O perdedor perde 1 ponto (sem ir abaixo de 0).
- Em cada rodada:
  - Quem tiver o maior resultado ganha 1 ponto.
- Ao final da corrida:
  - Quem tiver mais pontos vence.

---

## 🕹️ Como jogar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/mario-kart-simulator-node

# Acesse o diretório
cd mario-kart-simulator-node

# Instale as dependências (se necessário futuramente)
npm install

# Execute o simulador
node index.js
```
---

## 📈 Futuras melhorias

- [ ] Implementar escolha de personagens via terminal (CLI)
- [ ] Adicionar animações com `chalk` e `figlet` no terminal
- [ ] Criar modo torneio (melhor de 3)
- [ ] Salvar histórico de corridas em arquivo `.json`
- [ ] Interface web com placar em tempo real
- [ ] Suporte a múltiplos jogadores

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.  
Criado por **Gabriel Alves Varella da Costa** com fins educacionais.

---

> 🚧 Projeto em construção! Contribuições e sugestões são bem-vindas!