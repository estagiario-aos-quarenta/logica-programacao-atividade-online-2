/*Programa Cadastro de Evento
O programa cadastra uma lista de participantes e palestrantes de um evento e exíbe-a no final.

Algoritmo do programa:
1- ler a data do evento;
2- validar a data do evento: Se a data do evento for maior que a data atual, segue para o próxino passo, caso contrário, informa ao usuário que a data é inválida e
   pergunta se ele quer entrar com uma nova data. Em caso afirmativo, retorna ao passo anterior, caso contrário, segue para o próximo passo;
3- cadastrar evento;
4- cadastrar palestrante;
5- perguntar se o usuário quer cadastrar outro palestrante: em caso afirmativo, retorna ao passo anterior, caso contrário, segue para o próxino passo; 
6- verificar o tamanho da lista: caso seja igual a 100 participantes, encerra as inscrições, caso contrário, segue para o próximo passo;
7- ler a idade do participante: Se a idade do participante for maior que 18 anos, prossegue para o próximo passo, senão, informa que o participante
   deverá ter uma idade maior que 18 anos e pergunta se ele quer continuar cadastrando participantes. Em caso afirmativo, repete o passo;
8- cadastra o participante;
9- pergunta se quer continuar cadastrando participantes: em caso afirmativo, volta ao passo 6, caso contrário, exibe a lista de palestrantes e participantes e 
   finaliza o programa.
*/

//declarações
const imput = require('readline-sync');
let dataDoEvento;
let idadeDoParticipante;
let continuar;
let listaDeParticipantes = new Map([['Data do evento', undefined], ['Nome do evento', undefined], ['Palestrantes', Array()], ['Participantes', Array()]]);


// início do programa
do {
    console.clear();
    console.log('PROGRAMA CADASTRO DE EVENTOS\n');
    // lendo a data do evento
    dataDoEvento = imput.question('Data do evento (dd/mm/aaaa): ');
    // validando a data do evento
    if (new Date(dataDoEvento.split('/').reverse().join('/')) > new Date()) {
        // cadastra a data do evento
        listaDeParticipantes.set('Data do evento', dataDoEvento);
        // cadastra o evento
        listaDeParticipantes.set('Nome do evento', imput.question('Nome do evento: '));
        
        // cadastra palestrantes
        do {
            listaDeParticipantes.get('Palestrantes').push(imput.question('Nome do palestrante: '));
            continuar = imput.question('\nCadastrar outro palestrante? (s/n): ');
        } while (continuar == 's');
        
        console.log('\nAgora é hora de cadastrar os participantes!');
        
        // cadastra participantes
        do {
            // verifica o tamanho da lista
            if (listaDeParticipantes.get('Participantes').length < 2) {
                idadeDoParticipante = imput.questionInt('\nQual da idade do participante?: ');
                // verifica a idade do participante
                if (idadeDoParticipante >= 18) {
                     // cadastra o participante
                     listaDeParticipantes.get('Participantes').push(imput.question('Nome do participante: '));
                     continuar = imput.question('\nCadastrar Outro participante? (s/n): ');
                } else {
                     console.log('\nO participante deverá ter mais de 18 anos!');
                     continuar = 's';
                }
            
            } else {
                console.log('\nQue pena! Inscrições encerradas.\n');
                continuar = 'n';
            }
            
        } while (continuar == 's');
        
        // listando os palestrantes e participantes por evento
        console.log('\nLISTA DE PALESTRANTES E PARTICIPANTES:');
        for (let [chave, valor] of listaDeParticipantes) {
            if (typeof(valor) == 'string') {
                console.log(chave + ': ' + valor);
            } else {
                console.log('\n' + chave + ':');
                console.log('=============');
                for (let conteudo of valor) {
                    console.log(conteudo);
                }
            }
        }
    
    } else {
        console.log('Data inválida!\nA data do evento deverá ser maior que a data atual.\n');
        continuar = imput.question('Continuar? (s/n): ');
    }
    
} while (continuar == 's');

// fim do programa
