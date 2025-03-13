const questionsData = {
    "História": [
      { level: "Fácil", question: "Nome romano de 5 deuses gregos.", answer: "Júpiter, Netuno, Plutão, Marte, Apolo" },
      { level: "Médio", question: "Cite 7 apóstolos.", answer: "Pedro, João, Tiago, André, Filipe, Bartolomeu, Mateus" },
      { level: "Difícil", question: "Em qual território viviam os Incas?", answer: "Nos Andes, na região que hoje corresponde ao Peru, Bolívia, Equador e Chile" },
      { level: "Fácil", question: "Qual o nome do presidente brasileiro que tinha como apelido 'Jango'?", answer: "João Goulart" },
      { level: "Médio", question: "Quem era a 'dama de ferro'?", answer: "Margaret Thatcher" },
      { level: "Difícil", question: "Qual presidente brasileiro criou a lei das cotas?", answer: "Luiz Inácio Lula da Silva" },
      { level: "Fácil", question: "Onde fica Auschwitz?", answer: "Na Polônia" },
      { level: "Médio", question: "O que foi a Tríplice Aliança (WW2)?", answer: "Foi a aliança militar entre Alemanha, Itália e Japão durante a Segunda Guerra Mundial." },
      { level: "Difícil", question: "Qual é o animal símbolo de Roma?", answer: "A loba" },
      { level: "Fácil", question: "Em que ano o Titanic afundou?", answer: "1912" },
      { level: "Médio", question: "O que é a Crimeia?", answer: "Uma península localizada no Mar Negro, que foi anexada pela Rússia em 2014" },
      { level: "Difícil", question: "Qual o nome do atual líder da Coreia do Norte?", answer: "Kim Jong-un" },
      { level: "Fácil", question: "Quem foi o filósofo pré-socrático que propôs a teoria dos quatro elementos: terra, ar, fogo e água?", answer: "Empédocles" },
      { level: "Médio", question: "Qual é o nome do tratado que pôs fim à Primeira Guerra Mundial?", answer: "Tratado de Versalhes" },
      { level: "Difícil", question: "Que cidade europeia os otomanos tentaram conquistar várias vezes, mas nunca conseguiram?", answer: "Viena" },
      { level: "Fácil", question: "Qual país do norte da África foi parte do Império Otomano por séculos?", answer: "Egito" },
      { level: "Médio", question: "Em que ano o Império Otomano chegou oficialmente ao fim?", answer: "1923" },
      { level: "Difícil", question: "Na mitologia egípcia, quem pesava o coração dos mortos na balança da justiça?", answer: "Osíris" },
      { level: "Fácil", question: "Preencha as lacunas: O herói ____ derrotou o monstro _____ no labirinto de _____", answer: "Teseu, Minotauro, Creta" },
      { level: "Médio", question: "Na mitologia hindu, qual deus tem a cabeça de elefante?", answer: "Ganesha" },
      { level: "Difícil", question: "Na mitologia grega, qual era o nome da deusa primordial da noite, mãe das Moiras e das Hespérides?", answer: "Nix" },
      { level: "Fácil", question: "Segundo a mitologia japonesa, que criatura de nove caudas pode se transformar em uma bela mulher para enganar os humanos?", answer: "Kitsune" },
      { level: "Médio", question: "Na mitologia chinesa, qual guerreiro lendário é famoso por sua imortalidade e por desafiar os deuses celestiais?", answer: "Sun Wukong" },
      { level: "Difícil", question: "Que rei grego, amaldiçoado pelos deuses, foi forçado a rolar uma pedra montanha acima por toda a eternidade?", answer: "Sísifo" },
      { level: "Fácil", question: "Qual é o nome da esposa de Hades e rainha do submundo?", answer: "Perséfone" },
      { level: "Médio", question: "Qual é o nome da árvore sagrada que conecta os nove mundos na mitologia nórdica?", answer: "Yggdrasil" },
      { level: "Difícil", question: "Na mitologia nórdica, o que é o 'Bifrost'?", answer: "A ponte arco-íris que conecta os mundos" }
    ],
    "Geografia": [
      { level: "Fácil", question: "Qual é a capital do Azerbaijão?", answer: "Baku" },
      { level: "Médio", question: "Nomeie todos os 9 estados do Nordeste.", answer: "Maranhão, Piauí, Ceará, Rio Grande do Norte, Paraíba, Pernambuco, Alagoas, Sergipe, Bahia" },
      { level: "Difícil", question: "Qual a diferença entre Reino Unido, Grã Bretanha e Ilhas Britânicas?", answer: "O Reino Unido é composto pela Inglaterra, Escócia, País de Gales e Irlanda do Norte. A Grã Bretanha é a ilha que inclui Inglaterra, Escócia e País de Gales. As Ilhas Britânicas incluem a Grã Bretanha, a Irlanda do Norte e a República da Irlanda." },
      { level: "Fácil", question: "Quais são os países que formam os Balkans?", answer: "Albânia, Bósnia e Herzegovina, Bulgária, Croácia, Grécia, Macedônia do Norte, Montenegro, Romênia, Sérvia, Eslovênia" },
      { level: "Médio", question: "Cite 3 países que fazem fronteira com a Alemanha.", answer: "França, Polônia, Suíça" },
      { level: "Difícil", question: "Quais são as cores da bandeira da Lituânia?", answer: "Amarelo, verde e vermelho" },
      { level: "Fácil", question: "Qual foi o ministro britânico responsável pela concilidação do Brexit?", answer: "Boris Johnson" },
      { level: "Médio", question: "O que é o Acordo de Paris?", answer: "Tratado internacional sobre mudanças climáticas que visa limitar o aumento da temperatura global" },
      { level: "Difícil", question: "Qual é o antigo nome do Irã?", answer: "Pérsia" },
      { level: "Fácil", question: "Cite 3 pontos turísticos da França.", answer: "Torre Eiffel, Museu do Louvre, Catedral de Notre-Dame" },
      { level: "Médio", question: "Quais países fazem fronteira com o Equador?", answer: "Colômbia, Peru" },
      { level: "Difícil", question: "Qual é o maior arquipélago da Terra?", answer: "Indonésia" },
      { level: "Fácil", question: "Em que oceano fica Madagascar?", answer: "Oceano Índico" },
      { level: "Médio", question: "Cite 5 países centro-americanos.", answer: "Guatemala, Honduras, El Salvador, Nicarágua, Costa Rica" },
      { level: "Difícil", question: "Quantos fusos existem no Brasil?", answer: "4 fusos horários" },
      { level: "Fácil", question: "Em que país fica o Coliseu?", answer: "Itália" },
      { level: "Médio", question: "Qual o nome completo do Bolsonaro?", answer: "Jair Messias Bolsonaro" }
    ],
    "Filmes": [
      { level: "Fácil", question: "Cite 5 filmes do Leonardo DiCaprio.", answer: "Titanic, O Lobo de Wall Street, O Regresso, A Origem, O Aviador" },
      { level: "Médio", question: "Cite 5 filmes brasileiros.", answer: "Cidade de Deus, Central do Brasil, O Auto da Compadecida, Tropa de Elite, Se Eu Fosse Você" },
      { level: "Difícil", question: "Cite 3 atores que já interpretaram o Batman.", answer: "Christian Bale, Michael Keaton, Ben Affleck" },
      { level: "Fácil", question: "Filmes dos Vingadores, em ordem.", answer: "Vingadores, Vingadores: A Era de Ultron, Vingadores: Guerra Infinita, Vingadores: Ultimato" },
      { level: "Médio", question: "O que Robert Oppenheimer diz para Albert Einstein no final do filme 'Oppenheimer'?", answer: "'Agora somos a morte, a destruidora de mundos'" },
      { level: "Difícil", question: "Qual é o verdadeiro nome do personagem 'V' em 'V de Vingança' (2005)?", answer: "Eu não sei" },
      { level: "Fácil", question: "Qual é a primeira regra do Clube da Luta?", answer: "Você não fala sobre o Clube da Luta" },
      { level: "Médio", question: "No filme 'Mad Max: Estrada da Fúria' (2015), qual é o nome do vilão que governa a Cidadela?", answer: "Immortan Joe" },
      { level: "Difícil", question: "Qual o nome do motel onde se passa grande parte do filme 'Psicose' (1960)?", answer: "Bates Motel" },
      { level: "Fácil", question: "Qual é o verdadeiro nome do personagem 'Coringa' interpretado por Joaquin Phoenix em 'Coringa' (2019)?", answer: "Arthur Fleck" },
      { level: "Médio", question: "Em 'O Senhor dos Anéis', quantos membros compõem a Sociedade do Anel?", answer: "9" }
    ],
    "Livros": [
      { level: "Fácil", question: "Cite 5 autores que escreveram em português.", answer: "Machado de Assis, Clarice Lispector, Jorge Amado, Guimarães Rosa, Fernando Pessoa" },
      { level: "Médio", question: "Cite 3 livros do Machado de Assis.", answer: "Dom Casmurro, Memórias Póstumas de Brás Cubas, O Primo Basílio" },
      { level: "Difícil", question: "Quem foi o autor de Sherlock Holmes?", answer: "Arthur Conan Doyle" },
      { level: "Fácil", question: "Qual o país do Drácula?", answer: "Romênia" },
      { level: "Médio", question: "Cite 3 livros do Friedrich Nietzsche.", answer: "Assim Falou Zaratustra, Além do Bem e do Mal, Genealogia da Moral" },
      { level: "Difícil", question: "Quem é o autor da obra 'Crime e Castigo'?", answer: "Fiódor Dostoiévski" },
      { level: "Fácil", question: "Qual é o título do primeiro livro da série 'As Crônicas de Nárnia'?", answer: "O Leão, a Feiticeira e o Guarda-Roupa" }
    ],
    "Cultura": [
      { level: "Médio", question: "Cite 3 serial killers americanos.", answer: "Ted Bundy, Jeffrey Dahmer, John Wayne Gacy" },
      { level: "Médio", question: "Cite 5 séries da DC.", answer: "The Flash, Arrow, Supergirl, Titans, Doom Patrol" },
      { level: "Difícil", question: "Cite 5 museus do Recife.", answer: "Museu do Frevo, Museu do Estado, Museu do Sonho, Museu da Cidade, Museu do Mar" },
      { level: "Fácil", question: "Descreva três episódios de Black Mirror.", answer: "San Junipero, Nosedive, USS Callister" },
      { level: "Médio", question: "Quem disse 'Penso, logo existo'?", answer: "René Descartes" },
      { level: "Difícil", question: "Cite 3 quadros do Picasso.", answer: "Guernica, As Meninas das Laranjas, O Velho Guitarrista" },
      { level: "Fácil", question: "Quais são os nomes das tartarugas ninja?", answer: "Leonardo, Donatello, Michelangelo, Raphael" },
      { level: "Médio", question: "Quais são os nomes dos integrantes dos The Beatles?", answer: "John Lennon, Paul McCartney, George Harrison, Ringo Starr" },
      { level: "Difícil", question: "Os ready-mades foram símbolo de qual movimento artístico?", answer: "Dadaísmo" },
      { level: "Fácil", question: "Quem é o autor do Sítio do Pica-pau Amarelo?", answer: "Monteiro Lobato" },
      { level: "Médio", question: "Cite 3 membros do BTS.", answer: "RM, Jin, Jungkook" },
      { level: "Difícil", question: "Cite 5 albums da Taylor Swift.", answer: "Fearless, Red, 1989, Lover, Folklore" },
      { level: "Fácil", question: "Qual é o país de origem da história da Branca de Neve?", answer: "Alemanha" },
      { level: "Médio", question: "Quais são os personagens principais de Friends?", answer: "Rachel, Ross, Monica, Chandler, Joey, Phoebe" },
      { level: "Difícil", question: "Quais são os integrantes do Choque de Cultura?", answer: "Leandro, Nando, Juliano" },
      { level: "Fácil", question: "Qual é a nacionalidade do ator Pedro Pascal?", answer: "Chilena" }
    ],
    "Matemática": [
      { level: "Fácil", question: "Cite 5 números primos maiores que 15.", answer: "17, 19, 23, 29, 31" }
    ],
    "Ciência": [
      { level: "Fácil", question: "Quais são os planetas do sistema solar, em ordem?", answer: "Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno" },
      { level: "Médio", question: "Cite três estrelas.", answer: "Sol, Sirius, Alpha Centauri" },
      { level: "Difícil", question: "Cite três galáxias.", answer: "Via Láctea, Andrômeda, Galáxia do Triângulo" },
      { level: "Fácil", question: "Quais são as categorias dos elementos químicos na tabela periódica?", answer: "Metais, Não-metais, Gases nobres, Metaloides" },
      { level: "Médio", question: "Qual o nome da elemento químico que tem a sigla Hg?", answer: "Mercúrio" },
      { level: "Difícil", question: "Cite 5 infecções transmitidas sexualmente.", answer: "HIV, Sífilis, Gonorreia, Herpes genital, Clamídia" },
      { level: "Fácil", question: "Cite 5 vacinas usando contra a COVID.", answer: "Pfizer, Moderna, AstraZeneca, CoronaVac, Johnson & Johnson" },
      { level: "Médio", question: "Qual é o tipo sanguíneo doador universal?", answer: "O negativo" },
      { level: "Difícil", question: "Qual é o nome do processo biológico pelo qual as células se dividem para formar células filhas idênticas?", answer: "Mitoses" },
      { level: "Fácil", question: "Quem foi o primeiro ser humano a orbitar a Terra?", answer: "Yuri Gagarin" },
      { level: "Médio", question: "Qual é a unidade de medida de energia no sistema internacional?", answer: "Joule" }
    ],
    "Esportes": [
      { level: "Fácil", question: "Cite 5 esportes olímpicos de inverno.", answer: "Esqui alpino, Patinação artística, Hockey no gelo, Bobsled, Curling" },
      { level: "Médio", question: "Qual o nome do Pelé?", answer: "Edson Arantes do Nascimento" },
      { level: "Difícil", question: "Qual é o nome do torneio de tênis disputado na grama e considerado o mais antigo e prestigiado do mundo?", answer: "Wimbledon" },
      { level: "Fácil", question: "Em qual esporte o Brasil conquistou a primeira medalha de ouro em uma Olimpíada?", answer: "Vôlei" },
      { level: "Médio", question: "Quais são os nomes e sedes dos quatro Grand Slams do tênis?", answer: "Australian Open (Melbourne), Roland Garros (Paris), Wimbledon (Londres), US Open (Nova York)" },
      { level: "Difícil", question: "Qual é o único jogador de futebol a ganhar a Bola de Ouro enquanto jogava por um clube fora da Europa?", answer: "Ronaldo (Corinthians 2009)" }
    ],
    "Outros": [
      { level: "Fácil", question: "Cite 3 cryptomoedas.", answer: "Bitcoin, Ethereum, Litecoin" },
      { level: "Médio", question: "Quem do grupo não tem irmão?", answer: "Essa pergunta depende do grupo, forneça mais contexto para uma resposta precisa." },
      { level: "Difícil", question: "Conte até 10 em francês.", answer: "Un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix" },
      { level: "Fácil", question: "Cite 5 pares de nomes que tenham equivalentes no masculino e no feminino.", answer: "José / Josefa, João / Joana, Carlos / Carla, Pedro / Petra, Miguel / Miguela" },
      { level: "Médio", question: "Quais são os feriados de novembro?", answer: "Dia de Todos os Santos (1º de novembro), Proclamação da República (15 de novembro)" }
    ]
  };
  
  export default questionsData;
  