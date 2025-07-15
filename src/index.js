const player1 = {
    NOME:"Mario",
    VELOCIDADE:4,
    MANOBRABILIDADE:3,
    PODER:3,
    PONTOS:0
};

const player2 = {
    NOME:"Luigi",
    VELOCIDADE:3,
    MANOBRABILIDADE:4,
    PODER:4,
    PONTOS:0
};

async function rollDice(){
    
    return Math.floor(Math.random()*6)+1;
};

async function getRandomBlock() {
    let random =Math.random();
    let resultado= "";
    switch (true) {
        case random<0.33:
            resultado="RETA";
            break;
        case random<0.66:
            resultado="CURVA";
            break;
        default:
            resultado="CONFRONTO";
            break;
    }
    return resultado;
}

async function logRollResult (characterName, block, diceResult, attribut ) {
    console.log(`${characterName} 🎲 rolou o dado de ${block} resultado: ${diceResult} + ${attribut} = ${diceResult + attribut}`);
    
}

async function playRaCeEngine(character1,character2){

    for (let round = 1; round<=5; round++){
        console.log(`🏁Rodada${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco:${block}`)
        
        // roll dice
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // test skill
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;
        
        if(block === "RETA"){
            totalTestSkill1=diceResult1+character1.VELOCIDADE;
            totalTestSkill2=diceResult2+character2.VELOCIDADE;
            await logRollResult(character1.NOME, "VELOCIDADE", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "VELOCIDADE", diceResult2, character2.VELOCIDADE);
        }

        if(block === "CURVA"){
            totalTestSkill1=diceResult1+character1.MANOBRABILIDADE;
            totalTestSkill2=diceResult2+character2.MANOBRABILIDADE;
            await logRollResult(character1.NOME, "MANOBRABILIDADE", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "MANOBRABILIDADE", diceResult2, character2.MANOBRABILIDADE);
        }

        if(block === "CONFRONTO"){
            let powerTest1=diceResult1+character1.PODER;
            let powerTest2=diceResult2+character2.PODER; 
            console.log(`🥋 &{character1.NOME}🥊 conforntou ${character2.NOME}🥊`)  
            await logRollResult(character1.NOME, "PODER", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "PODER", diceResult2, character2.PODER);

            character2.PONTOS-= powerTest1>powerTest2 && character2.PONTOS >0 ? 1 : 0;
            character1.PONTOS-= powerTest2>powerTest1 && character1.PONTOS >0 ? 1 : 0;
            console.log(powerTest2 === powerTest1 ?"Confronto empatado! Nenhum ponto foi perdido!" : "")
            /* 
            if(powerTest1>powerTest2){
                if(character2.PONTOS >0){
                    character2.PONTOS--;
                }
            }
            if(powerTest2>powerTest1){
                if(character1.PONTOS >0){
                    character1.PONTOS--;
                }
            }
            if(powerTest2 === powerTest1){
                console.log("Confronto empatado! Nenhum ponto foi perdido!")
            }
            */

        }

        if(totalTestSkill1>totalTestSkill2){
            console.log(`${character1.NOME} marcou um ponto`);
            character1.PONTOS++;
        }else if (totalTestSkill2>totalTestSkill1){
            console.log(`${character2.NOME} marcou um ponto`);
            character2.PONTOS++;
        }
        console.log("__________________________________________")
    }
}

(async function main(){
    
    console.log(
        `🏁🚨 Incio da corrida entre ${player1.NOME} e ${player2.NOME} está começando...\n`
    )
    // o await é um metodo que faz com que o copilador espere a playRaCeEngine(player1, player2); ser executada.
    await playRaCeEngine(player1, player2);
    
})();