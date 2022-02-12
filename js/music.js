
// function includeA() {
//   const $test = document.querySelector('.teste')
//   console.log($test)

//   const a = document.createElement('a')
//   a.className = 'menu-item-action'
//   a.innerText = 'agora é um li'

//   console.log(a)
  
//   $test.appendChild(a)
  
// }

// includeA()

function buttonMusic() {
  // Incluir um "Nome do Botão"
  // let objectMusicArray = [
  //   {music: 'Ao Olhar Pra Cruz'},
  //   {music: 'Chegou A Hora JA21'},
  // ];
  
  let musicArray = [
    'Adore',
    'A Esperança É Jesus',
    'Achei Um Grande Amigo / Lar Feliz',
    'Aclame Ao Senhor',
    'A Minha Esperança',
    'Ao Olhar Pra Cruz',
    'Bendito Seja O Senhor / Oh Que Esperança',
    'Castelo',
    'Chegou A Hora JA21',
    'Como Agradecer 249',
    'Criança da Promessa',
    'Derramo Minha Vida',
    'Descansar (CD Jovem)',
    'Digo De Louvor',
    'Ele Me Amparou',
    'Em Espírito, Em Verdade',
    'Enquanto Eu Viver',
    'Entrego Minha Vida (Adoradores)',
    'Esconderijo',
    'Esta Na Hora (CD Jovem 2008)',
    'Eu Me Rendo (Vocal Livre)',
    'Eu Pertenço A Luz',
    'Fiel A Toda Prova',
    'Fixa Teus Olhos No Mestre',
    'Grande Alegria HA 489',
    'Grande Deus Adoradores',
    'Hino Dos Desbravadores',
    'Hoje Aqui',
    'InteiramenteFiel',
    'Lâmpada Para Os Meus Pés',
    'Lar Feliz 572',
    'Levanto A Cruz (Adoradores 4)',
    'Luz Bendita, Luz Gloriosa 227',
    'Mansão Sobre O Monte 501',
    'Maranata Avivah',
    'Medley Adoradores',
    'Meu Pastor Medley 237',
    'Meu Refúgio',
    'Muito Além Do Sol',
    'Não Desanimamos',
    'Não Desistir 150',
    'Não Há O Que Temer',
    'Não Mais Eu (Celebra SP)',
    'Não Tardará',
    'Noite De Natal',
    'Nos Braços De Jesus',
    'Obrigado (Acústico)',
    'Olhe Ao Redor',
    'O Melhor Lugar Do Mundo',
    'O Senhor Está Aqui',
    'O Senhor É o Meu Abrigo',
    'Ouve A Minha Oração',
    'Perto De Nós',
    'Pode Cair O Mundo',
    'Porque Ele Vive',
    'Preciso De Ti',
    'Que Prazer é Ser de Cristo 271',
    'Que Prazer é Ser de Cristo (Norton Hall Band)',
    'Quero Me Entregar (Diante do Trono)',
    'Rei dos Reis 73',
    'Renova - Me',
    'Revolução (Melissa Barcelos)',
    'Santo Somente é O Senhor',
    'Saudade (Coletânia Jovem)',
    'Só Em Ti',
    'Sonda Me Vocal Livre',
    'Sou de Jesus CD Jovem 2006',
    'Te Agradeço (Diante Do Trono)',
    'Tesouro (Matheus Rizzo)',
    'Teu Amor Não Falha',
    'Toma Meu Coração',
    'Tudo O Que Eu Vivi (Vocal Livre)',
    'Tudo Por Ele',
    'Um Dia De Esperança',
    'Um Milagre Adoradores',
    'Vem Me Mudar',
    'Verei Jesus',
    'Vim Para Adorar-Te',
    'Volto Pra Te Agradecer',
  ];
  
  // Incluir uma variável
  let musicVariable = [
    'javascript:adore()',
    'javascript:aEsperancaEJesus()',
    'javascript:acheiUmGrandeAmigoLarFeliz()',
    'javascript:aclameAoSenhorDianteDoTroco()',
    'javascript:aMinhaEsperancaCDJovem()',
    'javascript:aoOlharPraCruz()',
    'javascript:benditoSejaOSenhorHoQueEsperanca()',
    'javascript:castelo()',
    'javascript:chegouAHoraJA21()',
    'javascript:comoAgradecer()',
    'javascript:criancaDaPromessa()',
    'javascript:derramoMinhaVida()',
    'javascript:descansarCDJovem()',
    'javascript:dignoDeLouvor()',
    'javascript:eleMeAmparou()',
    'javascript:emEspiritoEmVerdade()',
    'javascript:enquantoEuViver()',
    'javascript:entregoMinhaVida()',
    'javascript:esconderijo()',
    'javascript:estaNaHoraCDJovem2008()',
    'javascript:euMeRencoVocalLivre()',
    'javascript:euPertencoALuz()',
    'javascript:fielATodaProva()',
    'javascript:fixaTeusOlhosNoMestre()',
    'javascript:grandeAlegriaHA489()',
    'javascript:grandeDeusAdoradores()', 
    'javascript:hinoDosDesbravadores()',   
    'javascript:hojeAqui()',
    'javascript:inteiramenteFiel()',
    'javascript:lampadaParaOsMeusPes()',
    'javascript:larFeliz572()',
    'javascript:levantoACruzAdoradores()',
    'javascript:luzBenditaLuzGloriosa227()',
    'javascript:mansaoSobreOMonte()',
    'javascript:maranataAvivah()',
    'javascript:medleyAdoradores()',
    'javascript:meuPastorMedley()',
    'javascript:meuRefugio()',
    'javascript:muitoAlemDoSol551()',
    'javascript:naoDesanimamos()',
    'javascript:naoDesistir150()',
    'javascript:naoHaOQueTemer()',
    'javascript:naoMaisEuCelebraSP()',
    'javascript:naoTardara()',
    'javascript:noiteDeNatal()',
    'javascript:nosBracosDeJesus()',
    'javascript:obrigadoAcustico()',
    'javascript:olheAoRedor()',
    'javascript:oMelhorLugarDoMundo()',
    'javascript:oSenhorEstaAqui()',
    'javascript:oSenhorEoMeuAbrigo()',
    'javascript:ouveAMinhaOracao()',
    'javascript:pertoDeNos()',
    'javascript:podeCairOMundo()',
    'javascript:porqueEleVive()',
    'javascript:precisoDeTi()',
    'javascript:quePrazerESerDeCristo271()',
    'javascript:quePrazerESerDeCristoNortonHallBand()',
    'javascript:queroMeEntregarDianteDoTrono()',
    'javascript:reiDosReis73()',
    'javascript:renovaMe()',
    'javascript:revolucaoMelissaBarcelos()',
    'javascript:santoSomenteEOSenhor()',
    'javascript:saudadeColetaniaJovem()',
    'javascript:soEmTi()',
    'javascript:sondaMeVocalLivre()',
    'javascript:souDeJesusjovem2006()',
    'javascript:teAgradecoDianteDoTrono()',
    'javascript:tesouroMatheusRizzo()',
    'javascript:teuAmorNaoFalha()',
    'javascript:tomaMeuCoracao()',
    'javascript:tudoOQueEuViviVocalLivre()',
    'javascript:tudoPorEle()',
    'javascript:umDiaDeEsperanca()',
    'javascript:umMilagreAdoradores()',
    'javascript:vemMeMudar()',
    'javascript:vereiJesus()',
    'javascript:vimParaAdorarTe()',
    'javascript:voltoPraTeAgradecer()',
  ]
  
  // 'javascript:chegouAHoraJA21()',
  
  for (let i = 0; i < musicArray.length; i++) {
    let keepArray = musicArray[i]
    // console.log(keepArray)
    let keepArrayVariable = musicVariable[i]
    // console.log('esse é o keep ' + keepArrayVariable)
    
    //CREATE LI
    const acessUL = document.querySelector('#menu')
    const createLI = document.createElement('li')
    createLI.className = 'menu-item'
    acessUL.appendChild(createLI)
    // console.log(createLI)

    //CREATE A
    const createA = document.createElement('a')
    createA.setAttribute('href', keepArrayVariable)
    createA.className = 'menu-item-action'
    createLI.appendChild(createA)
    createA.innerText = keepArray

    //CREATE SPAN
    // const createSPAN = document.createElement('span')
    // createSPAN.setAttribute('href', "")
    // createLI.appendChild(createSPAN)
    // console.log(createLI)

    //CRETE BUTTON
    // let acessSectionButton = document.querySelector('.button-section')
    // let createButton = document.createElement('BUTTON')
    // createButton.setAttribute('onclick', keepArrayVariable);
    // createButton.innerText = keepArray
    // // console.log(createButton)

    // acessSectionButton.appendChild(createButton)

  }
}

function buttonMusic2() {
  // Incluir um "Nome do Botão"
  let musicArray = [
    'Descansar (CD Jovem)',
    'Tudo Por Ele',
    'Como Agradecer',
    'Grande Alegria HA 489',
    'Levanto A Cruz',
    'Ouve A Minha Oração',
    'Nos Braços De Jesus',
  ];
  // Incluir uma variável
  let musicVariable = [
    'javascript:descansarCDJovem()',
    'javascript:tudoPorEle()',
    'javascript:comoAgradecer()',
    'javascript:grandeAlegriaHA489()',
    'javascript:levantoACruzAdoradores()',
    'javascript:ouveAMinhaOracao()',
    'javascript:nosBracosDeJesus()',
  ]

  let acessSectionButton = document.querySelector('.button-section')
  
  for (let i = 0; i < musicArray.length; i++) {
    let keepArray = musicArray[i]
    let keepArrayVariable = musicVariable[i]
    console.log(keepArray)
    // console.log(keepArrayVariable)

    let createButton = document.createElement('BUTTON')
    createButton.setAttribute('onclick', keepArrayVariable);
    createButton.innerText = keepArray
    // console.log(createButton)

    acessSectionButton.appendChild(createButton)
  }
}

//! NÃO ALTERAR NADA ABAIXO

function substituirEsseTexto() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    substituir este texto pela cifra
    `
}

// ----------------- FUNÇÃO ADICIONA LETRA E CIFRA -----------------------

function grandeAlegriaHA489() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
  <h3>Grande Alegria HA 489</h3>
  Tom: <c>F</c>
  
  <d>Coro:</d>

  <c>C         F        F7</c>
  Grande alegria inundou
  <c>        Bb</c>
  Meu coração
  <c>        F/C</c>
  Ao descobrir que Cristo
  <c>Dm7         G7  C7</c>
  Logo vai voltar!
  <c>C7         F         F7</c>
  Grande alegria explodiu
  <c>      Bb</c>
  A emoção
  <c>B°       F/C </c>   
  Pelo que Cristo fez
  <c>  Bb/C    C7     F  F7</c>
  E faz pra me salvar
  
  <d>Versus:</d>

  <c>  Bb</c>
  Olhando ao redor
  <c>    C/Bb      Am7  Dm7</c>
  Eu ve - jo a dor
  <c>    Gm7           C7    F  F7</c>
  Pessoas sofrendo sem amor
  <c>  Bb</c>
  Comendo miséria
  <c>C/Bb    Am7    Dm7</c>
  Pa - ra não morrer
  <c>    G7      F/A</c>
  Tentando na vi - da
  <c>C#/A#  B° C4   C7</c>
  Não    sofrer!
  
  <c>  Bb</c>
  Olhando ao redor
  <c>  C/Bb  Am7  Dm7</c>
  Eu vejo fé
  <c>    Gm7</c>
  Num mundo que
  <c>        C7   F2  F7</c>
  Quer mudar até
  <c>    Bb</c>
  Mas esta mudança
  <c>C/Bb     Am7    Dm7</c>
  Nun - ca vai chegar
  <c>    Gm7</c>
  Se não quando
  <c>        Bbm7/Db     C   C7</c>
  Cristo  re - tor - nar
  
  <d>Coro:</d>

  <c>C         F        F7</c>
  Grande alegria inundou
  <c>        Bb</c>
  Meu coração
  <c>        F/C</c>
  Ao descobrir que Cristo
  <c>Dm7         G7  C7</c>
  Logo vai voltar!
  <c>C7         F         F7</c>
  Grande alegria explodiu
  <c>      Bb</c>
  A emoção
  <c>B°       F/C  </c>  
  Pelo que Cristo fez
  <c>  Bb/C    C7     F  F7</c>
  E faz pra me salvar
  
  <d>Versus:</d>
  
  <c>    Bb</c>
  Olhando ao redor
  <c>    C/Bb   Am7  Dm7</c>
  Eu vejo o fim
  <c>    Gm7</c>
  De tudo que tem
  <c>  C7       F  F7</c>
  Valor pra mim
  <c>    Bb</c>
  Os sonhos da vida
  <c>C/Bb  Am7   Dm7</c>
  Todos pelo chão
  <c>  G7      F/A    C#/A# B°   C4   C7</c>
  O mundo é só de - so - la - ção
  
  <c>    Bb</c>
  Olhando ao redor
  <c>    C/Bb   Am7  Dm7</c>
  Eu vejo o céu
  <c>  Gm7</c>
  Fechado e coberto
  <c>C7     F2  F7</c>
  Por um véu
  <c>  Bb</c>
  O brilho do mundo
  <c>  C/Bb    Am7      Dm7</c>
  Então se  a - pa - gou
  <c>    Gm7</c>
  E a vinda de Cristo
  <c>  Bbm7/Db      C   C7</c>
  Então     brilhou

  <d>Coro:</d>
  
  <c>C         F        F7</c>
  Grande alegria inundou
  <c>        Bb</c>
  Meu coração
  <c>        F/C</c>
  Ao descobrir que Cristo
  <c>Dm7         G7  C7</c>
  Logo vai voltar!
  <c>C7         F         F7</c>
  Grande alegria explodiu
  <c>      Bb</c>
  A emoção
  <c>B°       F/C    </c>
  Pelo que Cristo fez
  <c>  Bb/C    C7     F  F7</c>
  E faz pra me salvar
    `
}

function descansarCDJovem() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
  <h3>Descansar (CD Jovem)</h3>
  Tom: <c>G</c>

  Intro: <c>Bm7  A  Em7  Bm7  A  G2  </c>
         <c>Bm7  A  Em7  Bm7  A  G2  D </c>

  <c>            Em7/G </c>
  Não quero viver pensando no amanhã 
  <c>         A/D    D </c>
  eu quero ser feliz 
  <c>     Em7/G </c>
  Dias vem e vão não irei temer  
  <c>          A/D    D</c>
  posso confiar em Ti 
  <c>Bm7              G2  </c>     
    Se o futuro incerto é 
  <c>Bm7                  G2 </c>          
    basta olhar com os olhos da fé      
  <c>  A9(4)</c>
  E  descansar nos braços do Pai 

  <c>Bm7    A9       Em7      G9 </c>
  Descansar  confiando em Tua proteção 
  <c>Bm7    A9         Em7      G9 </c>
  Descansar  vou me entregar em tuas mãos 
  <c>Bm7    A9         Em7        G9       G9</c>
  Descansar sei que cuidará de mim Senhor  
  <c>  Em7  D/F#   G      </c>           
  Ensina-me   a descansar 

  (<c> Cadd9   Bm7  A  G9  G9  D</c> )

  <c>    Em7/G </c>
  Cada passo que eu der seja aonde estiver 
  <c>           A/D    D </c>
  Quero entregar a Ti 
  <c>    Em7/G                             A/D  D </c>
  Cada decisão vou depor em Tuas mãos e esperar 
  <c>Bm7                 G9 </c>
    Se das aves Deus cuida 
  <c>        Bm7         F#m/A    G9 </c>
  Sei que tenho muito mais  valor 
  <c>      Em7    Cmaj7 </c>
  Posso esperar    e descansar nos braços do Pai 

  <c>Bm7    A9       Em7      G9 </c>
  Descansar  confiando em Tua proteção 
  <c>Bm7    A9         Em7      G9 </c>
  Descansar  vou me entregar em tuas mãos 
  <c>Bm7    A9         Em7        G9       G9</c>
  Descansar sei que cuidará de mim Senhor  
  <c>  Em7  D/F#   G    </c>             
  Ensina-me   a descansar 

  <c>C                   G/B            A/D    D </c>
  Só em Teus braços encontro paz pra repousar 
  <c>C              G/B            Em7   D/F#  G2 </c>
  Mesmo que os temores me vençam  vou descansar. 

  <c>C#m7  B9     F#m7     A9 </c>
          Confiando em Tua proteção 
  <c>C#m7  B9       F#m7     A9 </c>
          Vou me entregar em tuas mãos 
  <c>C#m7  B9        F#m7    A9         D9 </c>
          Sei que cuidará de mim Senhor 
  <c>  F#m7     A9      </c>     
  Ensina-me a descansar 

  (<c> C#m7  B9  F#m7  Dmja7  E  E </c>)
    `
}

function naoMaisEuCelebraSP() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
  <h3>Não Mais Eu ( Celebra SP )</h3>
  Tom: <c>D</c> 

  Intro: <c>Bm7 Dmaj7 Dmaj9/F# Gmaj7</c>
         <c>Bm7 Dmaj7 Dmaj9/F# Gmaj7</c>

  <c>        D</c> 
  Foi na cruz, foi na cruz
  <c>          A4</c> 
  Em que ao fim percebi
  <c>      Em7              Bm7</c> 
  Meu pecado recaiu em Jesus
  <c>      G                     D</c> 
  Foi então pela fé, que meus olhos abri
  <c>       A4         A            D</c> 
  Que prazer sinto agora em sua cruz
  
  <c>    A4          A</c> 
  Eu irei para a cruz
  <c>      G        D</c> 
  Onde pude perceber
  <c>      A4           A      G  D</c> 
  Esse amor que por mim foi pago
  <c>    A4       A</c> 
  Sua mão me curou
  <c>     G          Bm</c> 
  Sua morte me salvou
  <c>    G6       A4          D</c> 
  Eu irei, eu irei para a cruz
  
  <c>        D</c> 
  Quão perdido estou
  <c>       A4</c> 
  Quão vazio o coração
  <c>        Em7             Bm7</c> 
  Não sou digno de tanto amor
  <c>       G                    D</c> 
  Foi então pela fé, que meus olhos abri
  <c>       A4         A            D</c> 
  Que prazer sinto agora em sua cruz
  
  <c>    A4          A</c> 
  Eu irei para a cruz
  <c>      G        D</c> 
  Onde pude perceber
  <c>      A4           A      G  D</c> 
  Esse amor que por mim foi pago
  <c>    A4       A</c> 
  Sua mão me curou
  <c>     G          Bm</c> 
  Sua morte me salvou
  <c>    G6       A4          D</c> 
  Eu irei, eu irei para a cruz

  <d>Intro:</d> <c>Bm7 Dmaj7 Dmaj9/F# Gmaj7</c> 
  
  <c>         Bm7</c> 
  Não mais eu, não mais eu
  <c>   Dmaj7</c> 
  É Jesus quem vive em mim
  <c>Dmaj9/F#</c> 
  Cristo vive em mim
  <c>Gmaj7</c> 
  Cristo vive em mim
  
  <c>         Bm7</c> 
  Não mais eu, não mais eu
  <c>   Dmaj7</c> 
  É Jesus quem vive em mim
  <c>Dmaj9/F#</c> 
  Cristo vive em mim
  <c>Gmaj7</c> 
  Cristo vive em mim
  
  <c>         Bm7</c> 
  Não mais eu, não mais eu
  <c>   Dmaj7</c> 
  É Jesus quem vive em mim
  <c>Dmaj9/F#</c> 
  Cristo vive em mim
  <c>Gmaj7</c> 
  Cristo vive em mim
  
  <c>    A4          A</c> 
  Eu irei para a cruz
  <c>      G        D</c> 
  Onde pude perceber
  <c>      A4           A      G  D</c> 
  Esse amor que por mim foi pago
  <c>    A4       A</c> 
  Sua mão me curou
  <c>     G          Bm7</c> 
  Sua morte me salvou

  <d>Versão Joyce</d>

  <c>G6       A4              D</c> 
  Eu irei, eu irei para a cruz
  <c>    G6       A4          Bm7</c> 
  Eu irei, eu irei para a cruz

  <d>Final:</d> <c>Bm7 Dmaj7 Dmaj9/F# Gmaj7</c> 


  <d>Versão CELEBRA SP</d>

  <c>    G6       A4          Em7 D/F#</c> 
  Eu irei, eu irei para a cruz
  <c>    G6       A4          Bm7 </c> 
  Eu irei, eu irei para a cruz

  <d>Final:</d> <c>Bm7 Dmaj7 Dmaj9/F# Gmaj7</c> 
          <c>Bm7 Dmaj7 Dmaj9/F# Gmaj7</c> 
    `
}

function maravilhasCDJovem() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Maravilhas</h3>
  Tom: <c>E</c>

  Intro: <c>E E Esus4 E Esus4 A A/B E</c>

  <c>    A B  E      A9    C#m  B</c>
  Meu coração se alegra no Senhor
  <c>    A    B  E      D9</c>
  Proclama a Sua grandeza
  <c>  A/C# B   E    A     C#m   B</c>
  O Seu  perdão alcança todos nós
  <c>    A  B       E       D9</c>
  Sua graça nos cobre de bênçãos
  
  <c>    E/G# A    B4  B   E/G#   A      B4</c>  
  Seu nome santo é,      santo é o Senhor
  
  <c>            E                       B</c>
  Maravilhas Ele fez, nos mostrou o Seu poder
  <c>              C#m     A     B4     B  A</c>
  Ele é o nosso Rei dos reis, Jesus
  <c>            E               B</c>
  Maravilhas Ele fez, Ele operou e mim                
  <c>              C#m   A   C#m  B4  B A</c>
  Seu poder me resgatou, Je - sus

    ( <c>E Esus4 A A/B E</c> )
  
  <c>    A B  E      A9    C#m  B</c>
  Meu coração se alegra no Senhor
  <c>    A    B  E      D9</c>   ( <c>A B C# D C# B A B C# B</c>)
  Proclama a Sua grandeza
  <c>  A/C# B   E    A     C#m   B</c>
  O Seu  perdão alcança todos nós
  <c>    A  B       E       D9</c>
  Sua graça nos cobre de bênçãos
  
  <c>    E/G# A    B4  B   E/G#   A      B4  </c>
  Seu nome santo é,      santo é o Senhor
  
  <c>            E                       B</c>
  Maravilhas Ele fez, nos mostrou o Seu poder
  <c>              C#m     A     B4     B  A</c>
  Ele é o nosso Rei dos reis, Jesus
  <c>            E               B</c>
  Maravilhas Ele fez, Ele operou e mim                
  <c>              C#m   A   C#m  B4  B A</c>
  Seu poder me resgatou, Je - sus
  
  <c>      A       E          B        C#m</c>
  O Seu nome eu vou louvar e vou cantar
  <c>    A       E          B       </c> 
  Seu nome eu vou louvar e vou cantar
  <c>    A       E          B        C#m</c>
  Seu nome eu vou louvar e vou cantar
  <c>    A       E           B      </c>   
  Seu nome eu vou louvar, vou cantar
  
  <c>      A       E          B        C#m</c>
  O Seu nome eu vou louvar e vou cantar
  <c>    A       E          B        </c>
  Seu nome eu vou louvar e vou cantar
  <c>    A       E          B        C#m</c>
  Seu nome eu vou louvar e vou cantar
  <c>    A       A           B B        B B A </c>        
  Seu nome eu vou louvar, vou cantar
  
  <c>            E                       B</c>
  Maravilhas Ele fez, nos mostrou o Seu poder
  <c>              C#m     A     C#m  B4  B9 A9</c>
  Ele é o nosso Rei dos reis, Je - sus
  <c>            E               B</c>
  Maravilhas Ele fez, Ele operou e mim                
  <c>              A    E    C#m  B4  B A</c>
  Seu poder me resgatou, Je - sus
  
  <c>      E</c>
  O Seu nome eu vou louvar e vou cantar
  <c>    B</c>
  Seu nome eu vou louvar e vou cantar
  <c>    A       A          E        C#m</c>
  Seu nome eu vou louvar e vou cantar
  <c>      B4                  B9  B9      A9 B9 A9 E</c>
  O Seu nome eu vou louvar, vou cantar
    `
}

function noiteDeNatal() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Noite de Natal ( Resumo )</h3>
  Tom: <c>Eb</c>

  Intro: <c>Eb Cm Ab Bb</c>

  <d>Coro:</d>  
  <c>Eb                              Eb  Bb/D</c>
  Ouçam os sinos tocando a melo - di - a
  <c>Cm            Bb_Ab  Eb_Bb</c>
  De boas novas de alegri-a
  <c>Eb                                Eb Bb/D </c>
  Paz sobre a Terra e a todos felicida-de
  <c>Cm                       Bb_Ab Bb </c>
  Cantam os anjos, é noite de Natal.

  <d>Versus:</d>
  
  <c>Eb/G Ab  Bb       Cm </c>
  Ou - çam novas de paz
  <c>      Eb/G Ab Bb        Eb</c>
  E alegri - a  vindas do céu
  <c>   Eb/G Ab  Bb         Cm </c>
  Os an - jos com seu louvor
  <c>Db            Bbsus</c>
  Vêm anunciar: Cristo já nasceu.

  <d>Coro:</d>
  Tom: <c>F</c>

  <c>F                               F   C/E</c>
  Ouçam os sinos tocando a melo - di - a
  <c>Dm             F/Bb C</c>
  De boas novas e alegria
  <c>F                                 F  C/E</c>
  Paz sobre a Terra e a todos felicida-de
  <c>Dm                 F/Bb F/C   F/A</c>
  Cantam os anjos, é noite de Natal.

  <d>Versus:</d>

  <c>F/A Bb C       Dm</c>
  Juntos terra e céu
  <c>   F/A Bb C         F</c>
  Louvan-do com gratidão
  <c>  F/A Bb  C          Dm </c>
  Sentindo o a-mor de Deus
  <c>Eb        Bb  Eb    Bb   Eb</c>
  Emanuel - a - nun - ci - ai
  <c>Eb/D F/C    Cm7  Gm7 Cm7  Gm7  Cm7</c>
  Vem para Reinar. Che-gou   o   Rei
  <c>Ab/C Bb/Ab Ab    Bb/AB Ab    G</c>
  Com uma só voz Vamos   celebrar 

  <d>Coro:</d>
  Tom: <c>G</c>

  <c>G        D/G          D/F#  Em7 D/E_Em7</c>
  Vamos celebrar com a - le - gri - a
  <c>G/C Gsus2/C G/D</c> 
  É    na  -  tal
  <c>G     D/G                     D/F#  Em7 D/E_Em7</c>
  Cristo veio a este mundo que a-le - gri - a 
  <c>G/C Gsus2/C G/D </c>
  É natal

  <d>Coro:</d>

  <c>G        D/G                    D/F#  Em7 D/E_Em7</c>
  Ouçam os sinos tocando a melodi - a
  <c>Em7 Bm7 Em7   D  G/C   G/D </c>
  De boas novas de a - legria
  <c>G           G                        D/F#  </c>
  Paz sobre a Terra e a todos, felicida-de
  <c>Em7   Bm7 Em7    D G/C Gsus2/C G/D </c>
  Cantam os anjos, o Rei   Nas - ceu

  <d>Coro:</d>

  <c>G        D/G                    D/F#  Em7 D/E_Em7</c>
  Ouçam os sinos tocando a melodi - a
  <c>Em7 Bm7 Em7   D  G/C   G/D </c>
  De boas novas de a - legria
  <c>G           G                        D/F#  </c>
  Paz sobre a Terra e a todos, felicida-de
  <c>Em7   Bm7 Em7    D G/C  Gsus2/C D        G</c>
  Cantam os anjos, é noi - te     de     natal

  <d>Final:</d>
  <c>G G/F# Em G/D Cmaj7 G2/B Cmaj7 Am7 G/D D </c>
  <c>G Bm/F# Em G/D Cmaj7 G2/B Cmaj7 G/D D E7M</c>
    `
}

function adore() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Adore (Chris Tomlin)</h3>
  Tom: <c>G</c>

  Intro: <c>A2 Amaj7 D/A Dmaj9 D6 Dmaj9</c>

  <d>Versus:</d>

  <c>A   D/A    E/A</c>
  Até nós descestes
  <c>E/F#  F#m C#m/E D2</c>
  Vin - do   do   céu
  <c>D    E/D    A/C#   Bm7   Esus E</c>
  Homem se tornou, E-ma - nuel
  <c>A    D/A   E/A</c>
  Numa manjedoura
  <c>E/F#  F#m  C#m/E D2</c>
  Sim - ples nas - ceu
  <c>D    E/D   A/C#</c>
  Para nos salvar
  <c>  Bm7  Esus</c>
  E resgatar

  <d>Coro:</d>

  <c>    A2</c>
  Louvai
  <c>Bm7        A2/C#</c>
  Venha O adorar
  <c>   D  E/D D/E Bm/E F#m2 E/G#      A2</c>
  Oh Ve-nha a - do - rá - lo,  Ao Deus
  <c>Bm7          A/C#</c>
  Homem que se fez
  <c>   D    E/D D/E Bm/E F#m2 E/G#</c>
  Oh ve - nha a - do - ra - lo
  <c>E7sus A2   ( Dmaj9 D2 )</c>
  Lou - vai

  Tom: <c>Bb</c>

  <d>Versus:</d>

  <c>   Bb/F</c>
  Os Sábios e Pastores
  <c>F/G Gm Dm/F  Eb2</c>
  A   se cur - var
  <c>Eb   F/Eb   Bb/D   Cm7    Fsus F</c>
  Anjos lá no céu  à paz cantar
  <c>Bb    EbBb  F/Bb</c>
  Hoje oferecemos
  <c>F/G Gm  Dm/F Ebmaj7</c>
  Em  seu al - tar
  <c>Eb     F/Eb     Bb/D   Cm7     Fsus F</c>
  Nos - so res-pi-rar, e nosso amor

  <d>Coro:</d>

  <c>   Bb2</c>
  Louvai
  <c>Cm7        Bb2/D </c>
  Venha O adorar
  <c>   Eb F/Eb Eb/F Cm/F Gm2 F/A      Bb2</c>
  Oh Ve-nha   a - do - rá - lo, Ao Deus
  <c>Cm7          Bb2/D</c>
  Homem que se fez
  <c>   Eb   F/Eb Eb/F Cm/F Gm2  F/A </c>
  Oh ve - nha   a - do - ra - lo
  <c>F7sus Bb2</c>
  Lou - vai

  <d>Ponte:</d>

  <c>Bb2         Cm7                         Bb/D</c>
    Todo Céu a cantar para o Rei dos reis
  <c>Bb/D            Eb2             Gm2</c>
    O Bebê que nasceu para nos salvar
  <c>             F2/A </c>
  E nos libertar
  <c>Bb2         Cm7                         Bb/D</c>
    Todo Céu a cantar para o Rei dos reis
  <c>Bb/D            Eb2             Gm2</c>
    O Bebê que nasceu para nos salvar
  <c>            F2/A </c>
  E nos libertar

  Tom: <c>C </c>

  <d>Coro:</d>

  <c>   C</c>
  Louvai
  <c>Dm7        C/E</c>
  Venha O adorar
  <c>   F  G/F F/G Dm/G  Am2 G/B      C2</c>
  Oh Ve-nha  a - do - rá - lo, Ao Deus
  <c>Dm7          D/E </c>
  Homem que se fez
  <c>   F  G/F F/G Dm/G  Am2 G/B </c>
  Oh ve-nha  a - do - ra - lo
  <c>G7sus C2   ( Cmaj7 F/C Fmaj9 F6 Fmaj9 )</c>
  Lou - vai

  <d>Final:</d>

  <c>   C2                  F</c>
  Oh venha adorá - lo
  <c>Fmaj7/A   G/B  C2    ( Fmjaj9 F6 Fmaj9 F6 C2 )</c>
  A         Je - sus 
    `
}

function criancaDaPromessa() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Criança da Promessa</h3>
  Tom: <c>C</c>

  <D>Versus:</D>
  <c>C2       C2/E</c>
  Sob as estrelas
  <c>   F    G   C2  C</c>
  Se vê a pro-mes-sa
  <c>F          C/E</c>
  Um Deus me-ni-no
  <c>  Dm7       Gsus G</c>
  Bebê que se fez
  <c>C2        C2/F</c>
  Gloria que desce
  <c>  Esus  E7/G   Am</c>
  Naquele ber - cinho
  <c>Dm7     C/E</c>
  Vem redimir-nos
  <c>     F        Gsus G</c>
  E ao mundo salvar

  <D>Coro:</D>
  
  <c>C        G/B        Am    C/G</c>
  Glória a Deus nas alturas
  <c>F           C/E       Gsus  G</c>
  Paz para os homens também
  <c>C        G/B        Am    C/G </c>
  Gloria a Deus nas alturas
  <c>    F        C/E      Gsus  G</c>
  Pra sempre e sempre, amém
  <c>    Dm       Gsus    G F  </c>
  Pra sempre e sempre, amém.

  (<c> C/E Dm7 C2/E Ab Bb C2 </c>)

  <D>Versus:</D>

  <c>C2  C2/E      F    G  C2 C</c>
  Ajoelhados ao lado do berço
  <c>F         C/E       Dm7     Gsus</c>
  Vem os pastores, ao Deus adorar.
  <c>E7/G# Am          C2/E  </c>   
     O amor que transborda 
  <c>  Esus  E7/G#   Am</c>
  daquele       momento
  <c>  Dm7      C/E        F        Gsus G</c>
  Dissipa as trevas pra nos libertar

  <D>Coro:</D>

  <c>C        G/B        Am    C/G</c>
  Glória a Deus nas alturas
  <c>F           C/E       Gsus  G</c>
  Paz para os homens também
  <c>C        G/B        Am    C/G </c>
  Gloria a Deus nas alturas
  <c>    F        C/E      Gsus  G</c>
  Pra sempre e sempre, amém
  <c>Dm           Gsus    Csus C  C/B  </c>
  Pra sempre e sempre, a - mém.

  <D>Versus:</D>

  <c>Am  Em/G     Dm/F  Dm      Am  Fm/Ab</c>
  Ajoelhai e ou-vi a voz dos an - jos
  <c>  C/G G/F   C/E F     C/G</c>
  Natal,    Natal   é Natal
  <c>  Gsus Em/G  E/G# Am </c>
  Jesus  nas - ceu
  <c>  G/B G/F  C/E Fmaj7 Dm/F C/G   Gsus</c>
  Natal,   Natal,      Na - tal,
  <c>G  Gsus G  Ab      Ab/Gb</c> 
  Je-sus  nasceu

  Tom: <c>Db</c>
  <D>Coro:</D>

  <c>Db       Ab/C       Bbm   Db/Ab</c>
  Glória a Deus nas alturas
  <c>Gb          Db/F      Absus  Ab</c>
  Paz para os homens também 
  <c>Db       Ab/C       Bbm   Db/Ab </c>
  Gloria a Deus nas alturas
  <c>    Gb       Db/F     Absus Ab</c>
  Pra sempre e sempre, amém
  <c>    Ebm      Absus   Ab  Bbm  Bbm/Ab</c>
  Pra sempre e sempre, a - mém
  <c>    Ebm7     Db2/F </c>
  Pra sempre e sempre
  <c>    Gb       Db2/F</c>
  Pra sempre e sempre
  <c>    Cb    Gb/Bb Ebm7   Absus</c>
  Pra sem - pre e sempre        
      
  AMÉM!
  (<c> Db Ab/C Gb/Bb Db/Ab Gb Db/F Ebm Db Db Gb/Bb</c> )

  <c>Dbsus/Ab        Db A</c>
   Sem - pre amém 

    `
}

function olheAoRedor() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Olhe Ao Redor</h3>
  Tom: <c>G</c>

  Intro: <c>C/D G2 Am/G G Esus/F# B7b9 Em11 </c>
         <c>G/D C2 D/C G2/B A9 C/D D7susb9 G2</c>

  <d>Versus:</d>
  
  <c>          Am7(4)</c>
  Não fique o - cupado pra
  <c>            C/D        D9</c>
  Um pequeno beijo dar  
  <c>          G2       Em7(4)</c>
  A quem você amar
  <c>        Am7(4)</c>
  Nem esperar um pouco mais
  <c>                        C/D    D9</c>
  Pra um forte abraço poder dar
  <c>            G2  G/A G/A# B7</c>
  A quem precisar  a   a   Ar
  <c>              Em        Bm7</c>
  Pois há tanta gente, chorando
  <c>Em7     Am7(4)</c>
  Gente morrendo
  <c>C2 D/C C Am11      D     GMaj9/B Cmaj7</c>
  Gen-te pe-din-do amor, a   nós   o-o-os

  <d>Coro:</d>

  <c>C/D  Am/D  G/D  G2        Am/G </c>
  O - lhe_ao re - dor, pois  é   
  <c>G    Esus/F# B7b9       Em11</c>
  na -  tal     A - che alguém,
  <c>    G/D                C</c>
  Não guarde o amor, que você tem
  <c>C/D  Am/D  G/D  G2        Am/G </c>
  O - lhe_ao re - dor, pois  é   
  <c>G    Esus/F# B7b9       Em11</c>
  na -  tal     A - che alguém,
  <c>  Em7/D            C2         D/C</c>
  Espalhe o amor que você tem
  <c>          G2/B        A9</c>
  É o que o mun-do necessita: 
  <c>C/D      D7susb9  G2</c>
      Amor

  <d>Versus:</d>

  <c>D/E  Em      Bm7  Am7(4)</c>
  Como esperar mais um    minuto?
  <c>              C/D </c>
  O tempo corre em segundos…
  <c>D9              G2    Em7(4)</c>
    Difícil acompanhar
  <c>              Am7(4)</c>
  Vemos pessoas tão   sinceras
  <c>                C/D     </c>  
  Com suas vidas tão singelas
  <c>D9       G2  G/A G/A# B7</c>
  Como ajudar?
  <c>              Em        Bm7</c>
  Pois há tanta gente, chorando
  <c>Em7     Am7(4)</c>
  Gente morrendo
  <c>C2 D/C C  Am11    D    GMaj9/B Cmaj7</c>
  Gen-te pe-dindo amor, a nós    ooo

  <d>Coro:</d>

  <c>C/D  Am/D  G/D  G2        Am/G </c>
  O - lhe_ao re - dor, pois  é   
  <c>G    Esus/F# B7b9       Em11</c>
  na -  tal     A - che alguém,
  <c>    G/D                C</c>
  Não guarde o amor, que você tem
  <c>C/D  Am/D  G/D  G2        Am/G </c>
  O - lhe_ao re - dor, pois  é   
  <c>G    Esus/F# B7b9       Em11</c>
  na -  tal     A - che alguém,
  <c>  Em7/D            C2         D/C</c>
  Espalhe o amor que você tem
  <c>          G2/B        A9</c>
  É o que o mun-do necessita: 
  <c>C/D      D7susb9  G2</c>
      Amor

  <d>Ponte:</d>

  <c>            G/D  D/C  B7+    B7+/D#</c>
  Que todos rece - bam  o dom
  <c>Em       Em7/D        C   C</c>
  Para espa-lhar mais amor
  <c>G/B      Am7(4) Am/G      D2/F#</c>
  Por onde  for    e a quem for
  <c>B/D#    Esus  E</c>
  Compartilhar

  Tom: <c>A</c>
  <d>Coro:</d>

  <c>D/E D2/F#  E2/G# A2       Bm/A </c>
  O - lhe ao re -- dor, pois é   
  <c>A  F#sus/G# C#7b9      F#m11</c>
  na - tal     A - che alguém,
  <c>    A/E                D</c>
  Não guarde o amor, que você tem
  <c>D/E Bm/E  A/E    A2       Asus2,4</c>
  O - lhe ao re -- dor, pois é   
  <c>A  F#sus/G# C#7b9      F#m</c>
  na - tal     A - che alguém,
  <c>    F#m/E            D2</c>
  Espalhe o amor que você tem
  <c>E/D        A2/C#        B9</c>
    É o que o mun - do necessita: 
  <c>D/E      E7susb9 A2 F#m7 </c>
      Amor - or
  <c>B9   E7susb9        A2</c>
      A - mor   oOoOo  or
    `
}

function naoHaOQueTemer() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Não Há o Que Temer (Adoradores)</h3>
  Tom: <c>A</c>
  Intro: <c>A A7M D9/A 
          A A7M D9/A</c>
  
  <c>            D             A9sus</c>
  Eu sou o Senhor, Rei de Israel
  <c>A          D               F#m</c>
  Santo Redentor, começo e o fim
  <c>          E4                Bm7</c>
  Sou o Criador, O verdadeiro Deus
  <c>         D7M           E4</c>
  Eu sou a cura, Sou o Poder

  <c>           D                 A9</c>
  Eu sou o Amém, Estrela da manhã
  <c>             D               F#m</c>
  Eu Morri na Cruz, trouxe Salvação
  <c>              E4                 Bm7</c>
  Conheço a tua dor, ouço o teu clamor
  <c>        D7M              E4 E D/E</c>
  E minha destra, não falhará

  <c>A                 E4                Bm7</c>
    Não há o que temer, contigo eu estou
  <c>A/C#     D7M  D                         A</c>
  Não te assombres, porque eu sou o teu Deus
  <c>            E4   A/C#          Bm7</c>
  Te fortalecerei,  Te  sustentarei
  <c>    A/C#  D          E4    A</c>
  Com minha mão, eu serei fiel

  (<c> A A7M D9/A 
    A A7M D9/A</c> ) 
      
  <c>            D              A9</c>
  Eu sou o Senhor, Rei de Israel
  <c>           D               F#m</c>
  Santo Redentor, começo e o fim
  <c>          E4                Bm7</c>
  Sou o Criador, O verdadeiro Deus
  <c>         D7M           E4</c>
  Eu sou a cura, Sou o Poder

  <c>          D                 A9</c>
  Eu sou o Amém, Estrela da manhã
  <c>A            D                F#m</c>
  Eu Morri na Cruz, trouxe Salvação
  <c>              E4                 Bm7</c>
  Conheço a tua dor, ouço o teu clamor
  <c>        D7M              E4 </c>
  E minha destra, não falhará

  <c>A                 E4                Bm7</c>
    Não há o que temer, contigo eu estou
  <c>A/C#     D7M  D                         A</c>
  Não te assombres, porque eu sou o teu Deus
  <c>            E4   A/C#          Bm7</c>
  Te fortalecerei,  Te  sustentarei
  <c>    A/C#  D          E4    A</c>
  Com minha mão, eu serei fiel

  (<c> A E/A D/A A</c> )

  <c>A                 E4                Bm7</c>
    Não há o que temer, contigo eu estou
  <c>A/C#     D7M  D                         A</c>
  Não te assombres, porque eu sou o teu Deus
  <c>            E4   A/C#          Bm7</c>
  Te fortalecerei,  Te  sustentarei
  <c>    A/C#  D          E4    A</c>
  Com minha mão, eu serei fiel

  (<c> A A7M D9/A 
    A A7M D9/A</c> ) 
    `
}

function entregoMinhaVida() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Entrego Minha Vida (Adoradores)</h3>
  Tom: <c>A</c>

  Intro: <c>A D/F# G D </c>
          <c>A D/F# G D</c>

  <c>A               Bm7(11)</c>
  Hoje eu entrego todos meus temores
  <c>D                    A</c>
  Todas as doenças espirituais
  <c>A             Bm7(11)</c>
  Hoje eu renovo o  meu compromisso
  <c>D9                       A</c>
  De usar os meus talentos para o Senhor
  <c>F#m7                        E</c>
  Quero ser ungindo por Jesus
  <c>Bm7                    D</c>
  Ter o dobro do azeite, ser santificado

  Coro:

  <c>  A                      E</c>
  Entrego a minha vida com todo meu amor
  <c>   Bm7             D    </c>        
  De todo coração eu rendo o meu louvor
  <c>A                  F7m7 E</c>
  Ergo as minhas mãos     para te adorar
  <c>Bm7            D</c>
  Faça seu poder se manifestar (em mim)

  ( <c>A D/F# G D </c>)

  <c>A               Bm7(11)</c>
  Hoje eu entrego todos meus temores
  <c>D                    A</c>
  Todas as doenças espirituais
  <c>A             Bm7(11)</c>
  Hoje eu renovo o  meu compromisso
  <c>D9                       A</c>
  De usar os meus talentos para o Senhor
  <c>F#m7                         E</c>
  Quero ser ungindo por Jesus
  <c>Bm7                    D</c>
  Ter o dobro do azeite, ser santificado

  Coro:

  <c>  A                      E</c>
  Entrego a minha vida com todo meu amor
  <c>   Bm7             D     </c>       
  De todo coração eu rendo o meu louvor
  <c>A                  F7m7 E</c>
  Ergo as minhas mãos     para te adorar
  <c>Bm7            D</c>
  Faça seu poder se manifestar (em mim)

  <c>  A                      E</c>
  Entrego a minha vida com todo meu amor
  <c>   Bm7             D    </c>        
  De todo coração eu rendo o meu louvor
  <c>A                  F7m7 E</c>
  Ergo as minhas mãos     para te adorar
  <c>Bm7            D</c>
  Faça seu poder se manifestar (em mim)
    `
}

function aEsperancaEJesus() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>A Esperança É Jesus</h3>
  Tom: <c>Eb</c>

  [Intro] <c>Eb/Bb Bb Eb2 Cm7 Fm7</c>
          <c>Bb7 Bb Bb/C Bb/D</c>
  
  <c>    Eb2            Ab   Csus C</c>
  Não há esperança alguma
  <c>       Fm                    Bb</c>
  Pra um mundo onde Deus não está
  <c>    Eb                  Ab</c>
  Não há esperança de amor   e de paz
  <c>       Fsus       F          Bbsus Bb </c> 
  Onde o ódio deixa marcas fatais
  <c>    Eb              Ab   Csus C</c>
  Não há esperança de vida
  <c>  Fm                    Bb</c>
  Naqueles que não amam a Deus
  <c>    Eb2                Ab2 </c>  
  Não há esperança de um mundo de paz
  <c>     Fsus        F         Bbsus Bb</c>
  Se o homem deixa Deus para trás
  
  <c>                  Eb  </c>         
  A esperança é Jesus
  <c>    Cm     Fm7</c>
  Ele é o ca-mi-nho
  <c>                 Ab/Bb</c>
  A esperança é Je-sus
  <c>             Bb    Eb </c>     
  Nossa luz en-tre espinhos
  <c>       Bb6      Bb     Eb </c>
  A espe-ran-ça é Jesus
  <c>     Eb/G     Ab        Eb/G</c>
  Segu-ran-ça de   salvação
  <c>       Fsus</c>
  Onde o mun-do
  <c>        F          Abm</c>
  Pode achar solução
  <c>Abm         Ab/Bb           Eb Csus C</c>
      A espe - ran - ça é Jesus

  <d>Tom: F</d>
  
  <c>   F                 Bb   Dsus D</c>
  Só há esperança e certeza
  <c>  Gm                  C</c>
  Naquele que é vencedor
  <c>   F               Bb2</c>
  Só há esperança no no-me de Deus
  <c>        Gsus          G            Csus C</c>
  Para um po-vo que não tem mais amor
  
  <c>                   F</c>
  A esperança é Jesus
  <c>    Dm     Gm7</c>
  Ele é o ca-mi-nho
  <c>                  Bb/C </c>         
  A esperança é Jesus
  <c>            C      F</c>
  Nossa luz entre espinhos
  <c>      C6      C     F</c>
  A esperança é Jesus
  <c>     F/A      Bb         F/A</c>
  Segu-ran-ça de   salvação
  <c>       Gsus </c>
  Onde o mundo
  <c>       G           Bbm</c>
  Pode achar solução
  <c>Bbm         Bbm/C           F Bb/C</c>
      A espe - ran - ça é Jesus
  
  <c>              C     F</c>
  A esperança é Jesus
  <c>    Dm     Gm7</c>
  Ele é o ca-mi-nho
  <c>                  Bb/C </c>         
  A esperança é Jesus
  <c>            C      F</c>
  Nossa luz entre espinhos
  <c>      C6      C     F</c>
  A esperança é Jesus
  <c>    F/A       Bb        F/A</c>
  Segu-ran-ça de   salvação
  <c>      Gsus </c>
  Onde o mundo
  <c>      G           Bbm</c>
  Pode achar solução
  <c>Bbm         Bbm/C            Dm</c>
    A espe - ran - ça é Jesus

  <c>Bbm         Bbm/C            F</c>
    A espe - ran - ça é Jesus
    `
}

function larFeliz572() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Lar Feliz 572</h3>
  Tom: <c>F</c>

  <c>F   F         Bb6     F</c>
  Eu avisto uma terra feliz
  <c>      F                 C</c>
  Onde irei para sempre morar
  <c>      F          Bb6     F</c>
  Há mansões neste lindo país
  <c>    F             Bb6  F/C   F</c>
  Que Jesus foi, no Céu, preparar
  <c>      F          C</c>
  Vou morar, vou morar
  <c>      C7               F</c>
  Neste lar perenal e feliz
  <c>    Gm/F F       F2/A  Bb</c>
  Vou mo - rar, vou mo - rar
  <c>C/Bb  F/C     C7       F</c>
  Neste lar perenal e feliz

  <c>F    F         Bb6     F </c>
  Cantarei neste lindo país
  <c>      F                 C</c>
  Belos hinos ao meu Salvador
  <c>      F      Bb6        F</c>
  Pois ali viverei bem feliz
  <c>      F            Bb6  F/C      F</c>
  Sem temor, sem triste - za, nem dor
  <c>       F           C</c>
  Vou cantar, vou cantar
  <c>      C7               F</c>
  Neste lar perenal e feliz
  <c>    Gm/F  F       F2/A  Bb</c>
  Vou can - tar, vou can-tar
  <c>C/Bb  F/C     C7       F</c>
  Neste lar perenal e feliz

  <c>F    F        Bb6      F </c>
  Deixarei este mundo afinal
  <c>     F             C</c>
  Para ir a Jesus adorar
  <c>      F         Bb6       F</c>
  Neste lar mui feliz e eternal
  <c>      F        Bb6   F/C        F</c>
  Com Jesus para sem-pre'hei de estar
  <c>         F             C</c>
  Hei de estar, hei de estar
  <c>      C7               F</c>
  Neste lar perenal e feliz
  <c>    Gm/F  F       F2/A  Bb</c>
  Hei de estar, hei de'es-tar
  <c>C/Bb  F/C     C7       F</c>
  Neste lar perenal e feliz
    `
}

function mansaoSobreOMonte() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Mansão Sobre o Monte</h3>
  Tom: <c>C</c>

  <c>C         C            F       C</c>
  Aguardo o dia   de emoção sem par
  <c>            G7                  C</c>
  No qual terei    um belíssimo lar
  <c>        C         F        C</c>
  Entre colinas   e vales formosos
  <c>G         G                   C </c> 
  Donde se avista a cidade eternal
  
  <c>C  G4/D C/E F                C</c>
  Te-rei  uma casa no alto do monte
  <c>G6         G                     C</c>
  Com flores lindas por todo o jardim
  <c>C  G4/D C/E F        G/F        C </c>   
  A - ves cantando nas copas frondosas
  <c>G6       G                  C</c>
  Re-ju-bi-lando na vida sem fim
  
  <c>C           C         F        C</c>
  Manhãs bem claras sem nuvens escuras
  <c>        G7                       C</c>
  O sol radiante está sempre a brilhar
  <c>      C          F          C</c>
  Animaizinhos sem susto ou temores
  <c>G        G                       C</c>  
  Entre crianças a correr e a brincar
    `
}

function aMinhaEsperancaCDJovem() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>A Minha Esperança</h3>
  Tom: <c>Bb</c>
  
  [Intro]  <c>Bb Eb Bb F Eb F Bb</c>
  
  <d>Estrofe:</d>
  
  <c>Bb     </c>
    A minha esperança está no Senhor 
  <c>     Bb               Eb              Bb</c>
  Se a vida apresenta motivos pra desanimar
  <c>                  Eb/Bb     Bb</c>
  A minha esperança está no Senhor
  <c>      Bb                Cm/Bb      Bb</c>
  Se as nuvens escuras não querem passar
  <c>  F                 Gm       F</c>
  A minha esperança está no Senhor
  <c>     Gm               Eb</c>
  Se alguém que eu amo vier me ferir
  <c>  Bb              Cm/Bb      Bb</c>
  A minha esperança está no Senhor
  <c>      Gm                   Eb</c>
  Se às vezes me esqueço de amar ou sorrir
  <c>  Bb              Cm/Bb      Bb</c>
  A minha esperança está no Senhor
  
  <d>Coro:</d>

  <c>    F                  Gm</c>
  Se existem motivos pra desanimar
  <c>      Eb               F</c>
  Se as nuvens escuras espalham temor
  <c>   F                  Gm</c>
  Preciso aprender a sorrir e cantar
  <c>  Eb        F       Bb       Bb  </c>    
  A minha esperança está no Senhor

  (<c> Eb Bb F</c> )

  <d>Estrofe:</d>

  <c>   C                            F/G       C</c>
  Eu quero erguer minha voz em louvor e cantar
  <c>  C                 F/C     C</c>
  A minha esperança está no Senhor
  <c>  C                   Dm/C</c>
  De dia ou de noite em qualquer lugar
  <c>  G                 Am       G</c>
  A minha esperança está no Senhor
  <c>   Am                   F</c>
  Em qualquer caminho por onde eu passar
  <c>  C                Dm/C       C</c>
  A minha esperança está no Senhor
  <c>   Am                  F</c>
  Eu quero dizer: vale a pena confiar
  <c>  C                Dm/C       C</c>
  A minha esperança está no Senhor
    
  <d>Coro:</d>

  <c>    G                  Am</c>
  Se existem motivos pra desanimar
  <c>      F                G</c>
  Se as nuvens escuras espalham temor
  <c>   G                   Am</c>
  Preciso aprender a sorrir e cantar
  <c>  F         G        C</c>
  A minha esperança está no Senhor  
  
  (<c> F  C  G</c> )
  
  <d>Final:</d>

  <c>C        F         C    G</c>
    A minha esperança está no Senhor 
  <c>  C        F         C    G</c>
    A minha esperança está no Senhor 
  <c>   F           C C G  C C</c>
  Está no Senhor
    `
}

function oSenhorEoMeuAbrigo() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>O Senhor É o Meu Abrigo</h3>
  Tom: <c>G</c>

  <c>G             C/G</c>
    O Senhor é o meu abrigo 
  <c>D/F#      C/E    C/D</c>
      Seguro Rocha E-terna 
  <c>G              C/G </c>
    É só Nele que eu confio 
  <c>D/F#      C/E     C/D D</c>
      Só Ele vence a guerra 
  <c>Em               A</c>
    Contra meus inimigos 
  <c>G/D              Em</c>
      Não preciso temer 
  <c>Em             A    C/D</c>
    O Senhor é comi-go 
  <c>     G  C/G G</c>
  Me dá poder 


  <c>D/F# C/E D/F#    G  C/G</c>
    Ele dá   o   poder 
  <c>D/F# C/E  C/D  Em Em7 A C/D</c>
    Ele da....o poder 
  <c>D    Em   A  C/D</c>
  O Senhor
  <c>         G   C/D</c>
  Me dá poder 
  
  <c>G             C/G</c>
    Quando tudo está perdido 
  <c>D/F#           C/E  C/D </c>
      Eu tenho Alguém comigo 
  <c>G                C/G  </c>
    Dou um grito de esperança 
  <c>D/F#        C/E   C/D D</c>
      E ergo a minha lança 
  <c>Em               A</c>
    Contra meus inimigos 
  <c>G/D              Em</c>
    Não preciso temer 
  <c>Em             A    C/D</c>
    O Senhor é comi-go 
  <c>         G  C/G G</c>
  Me dá poder


  <c>D/F# C/E D/F#    G  C/G</c>
    Ele dá   o   poder 
  <c>D/F# C/E  C/D  Em Em7 A C/D</c>
    Ele da....o poder 
  <c>D    Em   A  C/D</c>
  O Senhor
  <c>         G   C/D</c>
  Me dá poder 
    `
}

function benditoSejaOSenhorHoQueEsperanca() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Bendito Seja O Senhor / Oh Que Esperança</h3>
  Tom: <c>G</c>

  Intro: 
  <c>   G    C/G           G C/G</c>
  Bendito se-ja o Senhor 
  <c>   G    C/G           G C/G</c>
  Bendito se-ja o Senhor 
  <c>     G/B   C        B/D#  Em</c>
  Eu O louva-rei, O e-xalta-rei 
  <c>Am/C  G/D     D7          G</c>
  Ben - di - to seja o Senhor

  <c>G D7/A G/B C Am7 D D/F#</c>
  Ó que espe-ran - ça 
  <c>G       C2/E D7 C/G G</c>
  vibra em nos-so ser
  <c>G   D/F# G   C2/E G/D A/C#    Dsus D</c>
  Pois a - guarda - mos  o   Senhor 
  <c>G  D7/A  G/B  C Am7 D D/F# G     C2/E D7 C/G G</c>
  Fé pos - su - i -   mos    que Jesus  nos dá 
  <c>Am G/B Am/C G/D  D  C/D D   G  C/G</c>
  Fé na  pro - mes-sa que nos fez

  <c>G    C/G           G C/G</c>
  Bendito se-ja o Senhor 
  <c>   G    C/G           G C/G</c>
  Bendito se-ja o Senhor 
  <c>     G/B   C        B/D#  Em</c>
  Eu O louva-rei, O e-xalta-rei 
  <c>Am/C  G/D     D7          G</c>
  Ben - di - to seja o Senhor
    `
}

function estaNaHoraCDJovem2008() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Está na Hora (CD Jovem 2008)</h3>
  Tom: <c>F</c> 
    
  [Intro] <c>F  F/A  Bb  C  Bb/D  C/E</c>
          <c>Am7  Gm7  Csus4(9) Fsus4  F </c>
  
  <d>[Verso]</d>
  <c>Csus4(9)  F      Gm/F         G°/F        F</c> 
    Está na hora, a minha redenção já não demora
  <c> Gm/F           G°/F          F  C/E</c> 
  O mal que fere a alma vai sumir
  <c>       Bb/D         G°/Db          C9</c> 
  Está na hora, quero ver o céu se abrir
  <c>        F       Gm/F             G°/F     F</c> 
  Está na hora, sinais do fim, me avisam é agora
  <c>  Gm/F         G°/F        F  Eb(6)(9)</c> 
  A minha fé vai se concretizar
  <c>        Bb/D       G°/Db        Csus4(9)</c> 
  Está na hora quero ver Jesus voltar

  <d>[Coro]</d>
  <c>BbMaj7/C Bb/C F            Bb       Csus4 C</c> 
    Está    na  hora, de aquecer o coração 
  <c>  Bb/D         C/E F/A</c> 
  e amar o meu irmão
  <c>        Gm7 Gm/F   Ebmaj7</c> 
  Como eu a-mo a mim mesmo
  <c>   Bb/C   F          Bb         Csus4 C </c>         
    Está na hora, de viver a pregação 
  <c>    Bb/D        C/E F/A</c> 
  e sa-ir da mornidão
  <c>      Gm7        F/G   G7  F/C   C</c> 
  Por Jesus intensamente me apaixonar
  <c>C/D      Gm7    F/A    Bb   B°      Csus4(9)</c> 
    E Estar pronto para quando Ele voltar
  <c>        F     Eb(6)(9) Bb(add9)/D</c> 
  Está na Hora    
  
  <d>[Verso]</d>
  <c>        F/C     Bb/C                    C6</c> 
  Está na hora, a minha redenção já não demora
  <c>  Bbmaj7/C                   B° Bbm Bbm6</c> 
  O mal que fere a alma vai sumir
  <c>        Gm7   F/A  Bbmaj7 B°       Csus4(9)</c> 
  Está na hora, quero ver o céu se abrir
  <c>        F       Bb/F                      FM7</c> 
  Está na hora, sinais do fim, me avisam é agora,
  <c> Bbmaj7/F        Bbmaj7/C        B° Bbm Bbm6</c> 
  A mi - nha fé vai se    concretizar
  <c>        Gm7  F/A  Bbmaj7  B°     Csus4(9)</c> 
  Está na hora quero ver Jesus voltar
  
  <d>[Coro]</d>
  <c>        F   Fmaj7       Bbmaj7     Csus4 C</c>            
  Está na hora,     de aquecer o coração 
  <c>   Bb/D         C/E F/A</c> 
  e a-mar o meu irmão.
  <c>        Gm7  Gm/F Ebmaj7</c> 
  Como eu amo a mim mesmo
  <c>  Bb/C  F  Fmaj7      Bbmaj7     Csus4 C</c> 
  Está na hora,     de viver a pregação 
  <c>    Bb/D        C/E F/A</c> 
  e sa-ir da mornidão
  
  <c>      Gm7         F/G  G7  F/C        C</c> 
  Por Jesus intensamente me apai.....xonar
  <c>Dm9     Gm7    F/A   Bb     B°      Csus4(9)</c> 
    Estar pronto para quando Ele voltar
  <c>             Csus7(b9)    F      F</c> 
  Está na Ho  ...Ho.........ra
    `
}

function coracaoIgualAoTeu() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Coração Igual Ao Teu</h3>
  Tom: <c>F</c>

  [Intro] <c>Bb9 F/A Dm7 F/A Bb Bb/D  Eb/G  F</c>
  
  [Primeira Parte]
  
  <c>        Bb                         F/A</c>
  Se tu olhares senhor pra dentro de mim
  <c>       Gm7          C</c>
  Nada encontrará de bom
  <c>    Bb           C/Bb</c>
  Mas um desejo eu tenho
  <c>    F  C/E     Dm7</c>
  De ser transformado
  <c>   Gm7           F/A</c>
  Preciso tanto do teu perdão
  <c>Bb            Csus4   C</c>
  Dá-me um novo coração
  
  [Refrão]
  
  <c>F            F/A          Bb9      Gm7 C7</c>
  Dá-me um coração igual ao teu, meu mes-tre
  <c>F            Eb/G  F/A    Bb</c>
  Dá-me um coração igual ao teu
  <c>     C    C/Bb      Am7 Dm7</c>
  Coração disposto a obedecer
  <c>   Am7                Dm7</c>
  Cumprir todo o teu querer
  <c>Gm7            Bb/C         Bb9</c>
  Dá-me um cora__ção igual ao teu
  
  (<c> F/A Dm7 F/A Bb Bb/D  Eb/G  F</c>)
  
  [Primeira Parte]
  
  <c>        Bb                         F/A</c>
  Se tu olhares senhor pra dentro de mim
  <c>       Gm7          C</c>
  Nada encontrará de bom
  <c>    Bb           C/Bb</c>
  Mas um desejo eu tenho
  <c>    F  C/E     Dm7</c>
  De ser transformado
  <c>   Gm7           F/A</c>
  Preciso tanto do teu perdão
  <c>Bb            Csus4   C</c>
  Dá-me um novo coração
  
  [Refrão]
  
  <c>F            F/A          Bb9      Gm7 C7</c>
  Dá-me um coração igual ao teu, meu mes-tre
  <c>F            Eb/G  F/A    Bb</c>
  Dá-me um coração igual ao teu
  <c>     C    C/Bb      Am7 Dm7</c>
  Coração disposto a obedecer
  <c>   Am7                Dm7</c>
  Cumprir todo o teu querer
  <c>Gm7            Bb/C         Bb9</c>
  Dá-me um cora__ção igual ao teu
  
  <c>F            F/A          Bb9      Gm7 C7</c>
  Dá-me um coração igual ao teu, meu mes-tre
  <c>F            Eb/G  F/A    Bb</c>
  Dá-me um coração igual ao teu
  <c>     C    C/Bb      Am7 Dm7</c>
  Coração disposto a obedecer
  <c>   Am7                Dm7</c>
  Cumprir todo o teu querer
  <c>Gm7            Bb/C         F</c>
  Dá-me um cora__ção igual ao teu
  
  [Ponte]
  
  <c>   A                     Dm7</c>
  Ensina-me a amar o meu irmão
  <c>     C</c>
  A olhar com teus olhos
  <c>    F              F/A</c>
  Perdoar com teu perdão
  <c>Bb           C/Bb</c>
  Enche-me com teu espírito
  <c>Am7          Dm7</c>
  Endireita os meus caminhos
  <c>C  Bb</c>
  Oh Deus, dai-me
  <c>   C    F    F/A</c>
  Um novo coração
  
  <c>Bb           C/Bb</c>
  Enche-me com teu espírito
  <c>Am7          Dm7</c>
  Endireita os meus caminhos
  <c>C  Bb</c>
  Oh Deus, dai-me
  <c>    C   F   Dsus4</c>
  Um novo coração
  
  [Refrão]
  
  <c>G            G/B          C9       Am7 D</c>
  Dá-me um coração igual ao teu, meu mestre
  <c>G            F/A   G/B    C</c>
  Dá-me um coração igual ao teu
  <c>     D     D/C      Bm7 Em7</c>
  Coração disposto a obedecer
  <c>   Bm7                Em7</c>
  Cumprir todo o teu querer
  <c>Am7          C/D          Em   D</c>
  Dá-me um coração igual ao teu
  
  <c>Am7          D            G</c>
  Dá-me um coração igual ao teu
  
  <c>     D     D/C      Bm  Em7</c>
  Coração disposto a obedecer
  <c>   Bm7                Em7</c>
  Cumprir todo o teu querer
  <c>Am7          C/D          G</c>
  Dá-me um coração igual ao teu
    `
}

function fixaTeusOlhosNoMestre() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Fixa teus Olhos no Mestre HA360</h3>
  tom: <c>F</c>

  Intro: Tocar o Coro

  <c>F                      Bb7+ Gm/Bb</c>
  Se amargas tristezas da vi - da 
  <c>   F/C        Am/C       F</c>
  Curvarem-te a fronte em dor, 
  <c>  F                    B°/F C/E</c>
  E vendo a esperança perdi - da, 
  <c>  F        C/G        C   Dm7 C/E</c>
  Caíres nas mãos do temor,
  
  CORO:
  <c>F         C        Dm7 F7/C</c>
  Fixa teus olhos no Mes-tre,
  <c>   Bb        Gm/Bb  B°  C</c>
  Confia no bom Sal - va-dor;
  <c>    F    C7/G F/A F  C#° Dm  Bb </c>     
  Fruirás,  na  lu--ta ter-res-tre,
  <c>   F/C        C2/7       F </c>
  Maravilhas do Seu doce amor.
  
  <c>F                        Bb7+ Gm/Bb</c>
  Se as ondas cruéis do oce-a - no 
  <c>   F/C    Am/C      F</c>
  Quiserem a nave tragar,
  <c>     F                  B°/F C/E</c>
  E as vagas do mal tão in-sa - no 
  <c>  F         C/G      C  Dm7 C/E</c>
  Fizerem-te a fé vacilar,
  
  <c>F                        Bb7+ Gm/Bb</c>
  Se aflito, sem fé, sem co-ra - gem, 
  <c>  F/C       Am/C       F</c>
  Vagando nas sendas do mal,
  <c>   F                  B°/F  C/E</c>
  Do mundo seguindo a mi-ra - gem, 
  <c>    F       C/G      C  Dm7 C/E</c>
  Não ouves a voz divinal,
    `
}

function saudadeColetaniaJovem() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Saudade (Coletânia Jovem)</h3>
  Tom: <c>C</c>

  [Intro] <c>C9  G/C  Bb/C  F/C  C  G/C  Bb/C  F/C</c>
  
  <c>C  C9             C/E     F      C9     Am7    G4  G</c>
  Da linda pátria estou tão longe, triste eu   estou
  <c>C  C9         C/E    F     C9       G        C    G/C</c>
  Eu tenho de Jesus saudade, quando será  que vou?
  <c>  Bb/C  F/C</c>
  
  
  <c>C   C9         C/E    F     C9  Am7   G4  G</c>
  Cristo me deu fiel promessa vem me buscar
  <c>C   C9        C/E    F       C9       G    F/A  G/B  C</c>
  Meu coração está com pressa, eu quero já voar
  
  <c>G      G/F   C/E          F    Dm    G4  G G7</c>
  Meus pecados eram muitos, e culpado  sou
  <c>C   C9           C/E    F      C9      G      C</c>    
  Mas o Seu sangue põe-me limpo, eu para pátria vou
  <c>G/C  Bb/C  F/C</c>
  
  
  <c>C    C9           C/E    F     C9  Am7    G4  G</c>
  Qual filho do seu lar saudoso, eu  quero  ir
  <c>C    C9         C/E     F      C9          G     C</c>   
  Qual passarinho para o  ninho, eu quero ao céu subir
  <c>G/B Am7</c>
  
  
  <c>G   G/F   C/E            F      Dm    G4  G</c>
  É fiel, a vinda é certa, quando não o sei
  <c>C   C9         C/E   F      C9         G    C     Bb</c>
  Mas Ele me achará   alerta, com Ele ao céu irei!
  
  <c>G#   G#/F#    C#/F         F#       D#m G#4 G# G#7</c>
  Passarinhos,  belas flores fazem-me almejar
  <c>C#   C#9          C#/F  F#     C#       G#    C#</c>  
  As   maravilhas e esplendores, do meu celeste lar
  <c>F#/C#  A#m G# F# C#</c>
    `
}

function obrigadoAcustico() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Obrigado (Acústico)</h3>
  Tom: <c>F</c>

  <c>F7M             Bb7M    C/A#</c>
        Eu Te  agradeço, Senhor
  <c>        Am7          Dm7(9)</c>
  Pelo carinho, pelo amor
  <c>          Gm7  C7(9-)  C7                  F7M  C6/F</c>
  Pelo cuidado         que tens por mim
  <c>            Bb7M         C/A#</c>
  Toma minha vida em Tuas mãos
  <c>        Am7             Dm7(9)</c>
  Meu coração vem transformar
  <c>              Gm7    C7(9-)  C7      F7M</c>
  Em Cristo um novo ser       cada vez mais
  
  <c>F7M             Bb7M    C/A#</c>
        Eu Te  agradeço, Senhor
  <c>        Am7          Dm7(9)</c>
  Pelo carinho, pelo amor
  <c>      Dm7(9)/A  Gm7  C7(9-)  C7          Dm7(9)</c>
  Pelo cui-------dado        que tens por mim
  
  (<c> D#7M D  D/F# </c>)
  
  <c>            Bb7M         C/A#</c>
  Toma minha vida em Tuas mãos
  <c>        Am7             Dm7(9)</c>
  Meu coração vem transformar
  <c>          Dm7(9)/A  Gm7     C7        F7M</c>
  Em Cristo um        novo ser cada vez mais
  
  <c>            Bb7M A#m6</c>
  Quanta esperança
  <c>            Am7  D7(9-)</c>
  Santa harmonia
  <c>D7       Gm7          C7</c>
  Ouço uma voz me chamar
  <c>            F7M  D#/F F/D#</c>
  Voz de perdão
  
  <c>          Bb7M        C/A#</c>
  Brilho celeste, então
  <c>            Am7        D7(4)    D7(9-)  D/F#   Gm7</c>
  toca minha face com ternura e diz:  "Meu    filho
  <c>            C7(9-)  C7          F7M</c>
  descanso e paz    em Mim vais achar"
  <c>          Bb7M  A#m6             F7M  Dm7(9)</c>
  Cristo Te amo      Tu és minha luz
  <c>          Gm7   C7(9-)  C7   F7M</c>
  Eu te agradeço  Que---rido Jesus
    `
}

function acheiUmGrandeAmigoLarFeliz() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Achei Um Grande Amigo / Lar Feliz</h3>
  Tom: <c>D</c>

  <c>  D                       G         D</c>
  Achei um grande amigo, Jesus o salvador
  <c>                                      A</c>
  Contarei quão grandes coisas fez por mim
  <c>    D                   G        D</c>
  Estando eu perdido, indigno pecador
  <c>                      A              D</c>
  Resgatou-me agora eu sirvo a Ele enfim
  
  <c>    G                   D</c>
  Em Seu amor imenso por mim morreu na cruz
  <c>                                  A</c>
  E o perdão dos meus pecados outorgou
  <c>  D                 G             D</c>
  Assim me regozijo vivendo em sua luz
  <c>                A            D</c>
  Aleluia Jesus Cristo me salvou
  
  <c>      D                  G           D</c>
  Por esse grande amigo desejo aqui viver
  <c>                                A</c>
  E com Ele sempre estar em comunhão
  <c>    D                   G           D</c>
  Servi-lo fielmente, seguindo seu querer
  <c>                    A           D</c>
  Vou a Cristo consagrar meu coração
  
  <c>      D        G       D</c>
  Eu avisto uma terra feliz
  <c>                        A</c>
  Onde irei para sempre morar
  <c>        D         G       D</c>
  Há mansões nesse lindo país
  <c>      D           A        D</c>
  Que Jesus foi ao Céu preparar
  <c>      D           A                         D</c>
  Vou morar, vou morar, nesse lar perenal e feliz
  <c>      D           G         D        A      D</c>
  Vou morar, vou morar, nesse lar perenal e feliz
  
  [Solo] <c>D  A  D  G</c>
         <c>D  A  D</c>
  
  <c>    D                    G                D</c>
  Já vem chegando o dia, a Bíblia assim nos diz
  <c>                                A</c>
  Em que Cristo a esse mundo voltará
  <c>    D                   G          D</c>
  Momento mui alegre que dia tão feliz
  <c>                      A            D</c>
  Sim que dia esplendoroso então será
  <c>    G                     D</c>
  E assim com Ele sempre no céu habitarei
  <c>                          A</c>
  Já liberto do pecado e da dor
  <c>  D                     G              D</c>
  E lá constantemente seu rosto então verei
  <c>      D              A             D</c>
  Estarei pra sempre junto ao Salvador
  <c>      D              A             D</c>
  Estarei pra sempre junto ao Salvador
    `
}

function hinoDosDesbravadores() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Hino Dos Desbravadores</h3>
  Tom: <c>G</c>
  [Intro] <c>C C6 C#° G/D G/D G/F C/E E° G4/F G7</c>
          <c>C C6 C#° G/D G/F C/E Cm6/Eb G/D D7 G </c>
  
  <c>D7  G        G°       G     D7/A G/B  </c>   
  Nós somos os desbravadores,  os  servos 
  <c>  B7(b13)   C  E7/B  Am</c>
  do Rei dos reis
  <c>Am7             Am6 Am7 D7  </c>          
  Sempre avante assim mar-chamos  
  <c>Dsus D7 D7(b9) D79   G</c>
  fi - éis às    Suas leis
  <c>D7 G        G°          G  D7/A G/B  </c>    
  De-vemos ao mundo anunciar  as  novas da 
  <c>B7(b13)     C</c>
  sal - va - ção
  <c>C/G  C       C6  C#° G/D   G/F C/E  Cm6/Eb </c>
  Que Cristo virá  em  bre - ve  dar    o    
  <c>  G/D  D7  G</c>
    ga- lar- dão
  
  (<c> C C6 C#° G/D G/F C/E Am7(b5)/Eb Dsus4 D </c>) 
    `
}

function precisoDeTi() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Preciso De Ti</h3>
  Tom: <c>A</c>

  [Intro] <c>G  D/F#  A  E</c>
          <c>G  D/F#  A  E</c>
  
  [Primeira Parte]
  
  <c>           A             F#m7</c>
  Preciso de Ti preciso do teu perdão
  <c>            A               F#m7</c>
  Preciso de Ti quebranta meu coração
  <c>C#m     D               Bm7                F#m</c>
  Como a corça anseia por águas, assim tenho sede
  <c>C#m7       D             C#m  Bm7             E4  E</c>
  Como terra seca, assim é minh'alma preciso de Ti
  
  [Refrão]
  
  <c>   F#m      C#m    D              C#m   Bm</c>
  Distante de Ti, Senhor, não posso vi----ver
  <c>           Esus4     E</c>
  Não vale a pena existir
  <c>  C#m7           D                        C#m  Bm7</c>
  Escuta o meu clamor, mais que o ar que eu res--piro
  <c>    Bm/A   E/G#  Bm7  A  E</c>
  Preciso de Ti
  
  <c>   F#m      C#m    D              C#m   Bm</c>
  Distante de Ti, Senhor, não posso vi----ver
  <c>           Esus4     E</c>
  Não vale a pena existir
  <c>  C#m7           D                        C#m  Bm7</c>
  Escuta o meu clamor, mais que o ar que eu res--piro
  <c>    Bm/A   G  D A E</c>
  Preciso de Ti
  
  [Segunda Parte]
  
  <c>               F#m7         Dmaj7</c>
  Não posso esquecer, o que fizeste por mim
  <c>              C#m7           Bm7</c>
  Como alto é o céu, Tua misericórdia é sem fim
  <c>C#m7    D                    Bm                 F#m</c>
  Como um pai se compadece dos filhos assim Tu me amas
  <c> C#m7     D            C#m   Bm     Bm7      E4  E</c>
  Afasta as minhas transgres---sões preciso de Ti
  
  [Refrão]
  
  <c>   F#m      C#m    Dmaj7          C#m   Bm7</c>
  Distante de Ti, Senhor, não posso vi----ver
  <c>           Esus4     E</c>
  Não vale a pena existir
  <c>  C#m7           D                        C#m  Bm7</c>
  Escuta o meu clamor, mais que o ar que eu res--piro
  <c>    Bm/A   E/G#  Bm7  A  E</c>
  Preciso de Ti
  
  <c>   F#m      C#m    Dmaj7          C#m   Bm7</c>
  Distante de Ti, Senhor, não posso vi----ver
  <c>           Esus4     E</c>
  Não vale a pena existir
  <c>  C#m7           D                        C#m  Bm7</c>
  Escuta o meu clamor, mais que o ar que eu res--piro
  <c>    Bm/A   E/G#  Bm7  A  E</c>
  Preciso de Ti

  <c>   F#m      C#m    D              C#m   Bm</c>
  Distante de Ti, Senhor, não posso vi----ver
  <c>           Esus4     E</c>
  Não vale a pena existir
  <c>  C#m7           D                        C#m  Bm7</c>
  Escuta o meu clamor, mais que o ar que eu res--piro
  <c>    Bm/A   G  D A E</c>
  Preciso de Ti

  <c>           G  D/F#</c>
  Preciso de Ti
  <c>            F7M  G</c>
  Preciso de Ti
  <c>            A9  D9/F#</c>
  Preciso de Ti
  <c>            F7M  G</c>
  Preciso de Ti
  <c>           A9  D9/F#</c>
  Preciso de Ti
  <c>            F7M  G</c>
  Preciso de Ti
    `
}

function deHojeEmDiante() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>De Hoje Em Diante</h3>
  Tom: <c>D</c>

  Intro:<c> D(add9) Dsus4</c>

  <c>D                         Bm    </c>         
    De hoje em diante escolho viver com jesus
  <c>G                     Em7           D/A     </c>          
    Como um barco que alcança o porto eu encontrei sua 
  <c>A4 A</c>
  luz
  <c>A#°           A#°/B  Bm  D/A      G   </c>
    De hoje em di-a-nte  escolho amar 
  <c>Em7             D/F#</c>
    pois eu tenho paz  
  <c>        E7/G#   E7(4)  Asus4</c>
  Que só Jesus  po-de  dar
  
  <c>  G/A          A7</c>
  De hoje em diante:
  
  <c>D           F#m/C# Bm              Bm/A</c>
    Senhor do universo  És  minha esperança
  <c>G                 Em7        D/A      A4 A7</c>
    Santifica os propósitos do meu coração
  <c>D             F#m/C# Bm          Bm/A  F#m/A   G  </c>
    Contigo ao meu lado  Não tenho mais o que temer
  <c>Em7              G/A            D   G/D D</c>
    Pois tu és a razão do meu viver
  
  <c>Eb                    Cm         </c>
    Acima de tudo escolho  Viver com Jesus
  <c>Ab               Fm7          Eb/Bb               Bb4 Bb</c>
    Em resposta ao grande preço que já foi pago na cruz
  <c>B°             B°/C Cm    Eb/Bb      Ab</c>
    Eu sigo seus passos pra não me perder
  <c>Fm7           Eb/G       F7/A    F7sus4  Bbsus4</c>
    Descobri que és minha razão  de vi  -  ver
  
  <c>  Ab/Bb       Bb7</c>
  De hoje em diante: 

  <c>Eb           Gm7/D  Cm              Cm/Bb</c>
    Senhor do universo   És  minha esperança
  <c>Ab                Fm7       Eb/Bb    Bb4 Bb</c>
    Santifica os propósitos do meu coração
  <c>Eb              Gm7/D Cm        Cm/Bb  Gm/Bb  Ab </c>
    Contigo ao meu lado  Não tenho mais o que temer
  <c>Fm              Ab/Bb         Eb</c>
    Pois tu és a razão do meu viver
  
  (<c> A/B  B7 </c>)
  
  <c>E            G#m/D# C#m            C#m/B</c>
    Senhor do universo  És  minha esperança
  <c>A                 F#m7       E/B     B4 B7</c>
    Santifica os propósitos do meu coração
  <c>E               G#m7/D# C#m       C#m/B  G#m/B   A</c> 
    Contigo ao meu lado    Não tenho mais o que temer
  <c>F#m             A/B       B    E</c>
    Pois tu és a razão do meu viver

    (<c> E/D# C#m C#m/B </c>)

  <c>F#m              A/B    B      E</c>
    Pois Tu és a razão do meu viver
  <c>      A9/E</c>
    A Razão 
  <c>F#m         A/B           E  </c>
    Tu és a razão do meu viver

    (<c> F#m/E B/E E</c> )
    `
}

function quePrazerESerDeCristoNortonHallBand() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Que Prazer é Ser de Cristo (Norton Hall Band)</h3>
  Tom: <c>E</c>

  Intro:<c> E C#m E C#m</c>
  
  1.
  <c>E </c>          
  Que prazer é ser de Cristo,
  <c>C#m</c>
  NEle crer e confiar,
  <c>E    </c>     
  Aceitar os Seus ensinos,
  <c>C#m</c>
  Sua paz e amor gozar!
  
  Coro:
  <c>E    </c>          
  Cristo! Cristo! Já confio
  <c>C#m</c>
  Em Teu nome, em Teu  poder.
  <c>A</c>
  Cristo! Cristo! bem-amado,
  <c>B</c>
  Faze em mim a fé  crescer.

  (<c> E C#m </c>)
  
  2.
  <c>E  </c>           
  Oh, que bênção crer em Cristo,
  <c>C#m</c>
  Crer no sangue que verteu!
  <c>E  </c>          
  Pois os meus pecados todos
  <c>C#m</c>
  Sepultou e os esqueceu!
  
  3.
  <c>E   </c>      
  Oh, quão bom é crer em Cristo,
  <c>C#m</c>
  Ter certeza do perdão!
  <c>E      </c>  
  Receber de Cristo mesmo,
  <c>C#m</c>
  Vida, paz e salvação.
  
  4.
  <c>E    </c>    
  Sim, feliz eu sou em Cristo,
  <c>C#m</c>
  DEle aqui desejo ser;
  <c>A                    A   A#</c>
  Quero, pois, humilde-men-te,
  <c>B</c>
  Ao Senhor obedecer.

  (<c> E C#m </c>)
    `
}

function teAgradecoDianteDoTrono() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Te Agradeço (Diante do Trono)</h3>
  Tom: <c>D</c>
  [Intro] <c>G  D9  G  D9</c></c>
  
  [Primeira Parte]
  
  <c>      D9             G</c></c>
  Por tudo o que tens feito
  <c>      D9               A</c></c>
  Por tudo o que vais fazer
  <c>      D9     D/C    G/B</c></c>
  Por tuas promessas e tudo o que és
  <c>      D/A         A</c></c>
  Eu quero te agradecer
  <c>                G  D9</c></c>
  Com todo o meu ser
  
  [Pré-Refrão]
  
  <c>        G</c></c>
  Te agradeço
  <c>        D9</c></c>
  Meu Senhor
  <c>        G</c></c>
  Te agradeço
  <c>        D9</c></c>
  Meu Senhor
  
  [Refrão]
  
  <c>        D9                       D/C</c></c>
  Te agradeço por me libertar e salvar
  <c>  G/B</c></c>
  Por ter morrido em meu lugar
  <c>        D9  D/F#  G</c></c>
  Te agrade---ço
  <c>                D9  D/F#  G</c></c>
  Jesus, te agrade---ço
  <c>            D9  D/F#  G</c></c>
  Eu te agrade---ço
  <c>        Em   D9</c></c>
  Te agrade---ço
  
  (<c> G  D9 </c></c>)
  
  [Primeira Parte]
  
  <c>      D9             G</c></c>
  Por tudo o que tens feito
  <c>      D9               A</c></c>
  Por tudo o que vais fazer
  <c>      D9     D/C    G/B</c></c>
  Por tuas promessas e tudo o que és
  <c>      D/A         A</c></c>
  Eu quero te agradecer
  <c>                G  D9</c></c>
  Com todo o meu ser
  
  [Pré-Refrão]
  
  <c>        G</c></c>
  Te agradeço
  <c>        D9</c></c>
  Meu Senhor
  <c>        G</c></c>
  Te agradeço
  <c>        D9</c></c>
  Meu Senhor
  
  [Refrão]
  
  <c>        D9                       D/C</c>
  Te agradeço por me libertar e salvar
  <c>  G/B</c>
  Por ter morrido em meu lugar
  <c>        D9  D/F#  G</c>
  Te agrade---ço
  <c>                D9  D/F#  G</c>
  Jesus, te agrade---ço
  <c>            D9  D/F#  G</c>
  Eu te agrade---ço
  <c>        Em   D9</c>
  Te agrade---ço
  
  [Pré-Refrão]
  
  <c>        G</c>
  Te agradeço
  <c>        D9</c>
  Meu Senhor
  <c>        G</c>
  Te agradeço
  <c>        D9</c>
  Meu Senhor
  
  [Refrão]
  
  <c>        D9                       D/C</c>
  Te agradeço por me libertar e salvar
  <c>  G/B</c>
  Por ter morrido em meu lugar
  <c>        D9  D/F#  G</c>
  Te agrade---ço
  <c>                D9  D/F#  G</c>
  Jesus, te agrade---ço
  <c>            D9  D/F#  G</c>
  Eu te agrade---ço
  <c>        Em   D9</c>
  Te agrade---ço
    `
}

function pertoDeNos() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Perto De Nós</h3>
  Tom: <c>Bb</c>

  Intro: <c>Bb  Eb/Bb  Ebm6/Bb  Bb9 </c>
         <c>Bb  Eb/Bb  Ebm6/Bb  Eb/F</c>

  <c>Bb   Eb/Bb Ebm6/Bb                  Bb(9)</c>
  Seja dia,  quando o sol só quer brilhar
  <c>Dm7  Eb     F/A                       Bb</c>
  Seja noite, quando a vontade é de chorar
  <c>Eb               F/Eb</c>
  Não é possível viver sem esperança
  <c>Eb            F        Gm</c>
  sem alegria e sem confiança
  <c>Eb               F/Eb   </c>    
  Deus está muito além do infinito
  <c>Gb7M     Ebm7     Fsus4  C/D</c>
  mas está perto de nós

  <c>G         C/G                     G</c>
  O amor de Deus não dá pra se guardar
  <c>           F       C/D        G</c>
  quem conhecer jamais esquecerá
  <c>           C/G                     G</c>
  Ninguém mostrou amor tão grande assim
  <c>          F        C/D      G C/G Eb/F Eb/F</c>
  Ele há de ser fiel até o fim

  <c>Bb       Eb/Bb Ebm6/Bb              Ab7(9)</c>
  Deus faz tudo,  pra ficar perto de você
  <c>Dm7 Eb   F/A                  Bb</c>
  Ele sabe como melhor lhe proteger
  <c>Eb               F/Eb</c>
  Não é possível viver sem esperança
  <c>Eb             F       Gm</c>
  sem alegria e sem confiança
  <c>Eb               F/Bb        Dm</c>
  Deus está muito além do infinito
  <c>Gb7M     Ebm7     Fsus4  C/D</c>
  mas está perto de nós

  <c>G         C/G                     G</c>
  O amor de Deus não dá pra se guardar
  <c>           F       C/D        G</c>
  quem conhecer jamais esquecerá
  <c>           C/G                     G</c>
  Ninguém mostrou amor tão grande assim
  <c>          F        C/D      G </c>
  Ele há de ser fiel a-té o fim

  <c>G         G C/G                        G</c>
    O amor de Deus não dá pra se guardar
  <c>              F           C/D     </c>
  quem conhecer   jamais esquecerá
  <c>  G      G  C/G                     G</c>
  Ninguém mos-trou amor tão grande assim
  <c>          F        C/D      G C/G Eb/F Eb/F</c>
  Ele há de ser fiel a-té o fim

  <c>G         C/G                     G</c>
  O amor de Deus não dá pra se guardar
  <c>           F       C/D        G</c>
  quem conhecer jamais esquecerá
  <c>           C/G                     G</c>
  Ninguém mostrou amor tão grande assim
  <c>          F        C/D      G F C</c>
  Ele há de ser fiel a-té o fim
  <c>           C               C    C  G</c>
  Ele há de ser fiel a-té o fim
    `
}

function aclameAoSenhorDianteDoTroco() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Aclame Ao Senhor</h3>
  Tom: <c>A</c>

  Intro:<c> A E A E</c>

    [Primeira Parte]

  <c>A2          E</c>
    Meu Jesus, Salvador
  <c>F#m7     E       D</c>
  Outro igual não há
  <c>          A/C# D        A/E</c>
  Todos os dias  quero louvar
  <c>   F#m7       G  D/F#  E  E</c>
  As maravilhas de teu amor

  [Pré-Refrão]

  <c>A2        E</c>
    Consolo, abrigo
  <c>F#m7      E            D</c>
  Força e refúgio é o Senhor
  <c>                A/C#</c>
  Com todo o meu ser
  <c>    D          A/E</c>
  Com tudo o que sou
  <c>F#m7       G    D/F# E4  E</c>
  Sempre te ado - ra - rei

  [Refrão]

  <c>  A2         F#m7       D          E4   E</c>
  Aclame ao Senhor toda a Terra e cantemos
  <c>  A2        F#m7      D        E4  E</c>
  Poder, majestade e louvores ao Rei
  <c>    F#m7       F#m7/E    D7M</c>
  Montanhas se prostrem e rujam os mares
  <c>    E  D/F#   E/G#  E</c>
  Ao som de teu no - me
  <c>  A2       F#m7      D           E4     E</c>
  Alegre te louvo por teus grandes feitos
  <c>    A2       F#m7        D     E4   E</c>
  Firmado estarei, sempre te amarei
  <c>F#m7   F#m7/E     D7M     D/E        A   E</c>
  Incomparáveis são tuas promessas prá mim

  [Primeira Parte]

  <c>A2          E</c>
    Meu Jesus, Salvador
  <c>F#m7     E       D</c>
  Outro igual não há
  <c>          A/C# D        A/E</c>
  Todos os dias  quero louvar
  <c>   F#m7       G  D/F#  E  E</c>
  As maravilhas de teu amor

  [Pré-Refrão]

  <c>A2        E</c>
    Consolo, abrigo
  <c>F#m7      E            D</c>
  Força e refúgio é o Senhor
  <c>                A/C#</c>
  Com todo o meu ser
  <c>    D          A/E</c>
  Com tudo o que sou
  <c>F#m7       G    D/F# E4  E</c>
  Sempre te ado - ra - rei

  [Refrão]

  <c>  A2         F#m7       D          E4   E</c>
  Aclame ao Senhor toda a Terra e cantemos
  <c>  A2        F#m7      D        E4  E</c>
  Poder, majestade e louvores ao Rei
  <c>    F#m7       F#m7/E    D7M</c>
  Montanhas se prostrem e rujam os mares
  <c>    E  D/F#   E/G#  E</c>
  Ao som de teu no - me
  <c>  A2       F#m7      D           E4     E</c>
  Alegre te louvo por teus grandes feitos
  <c>    A2       F#m7        D     E4   E</c>
  Firmado estarei, sempre te amarei
  <c>F#m7   F#m7/E     D7M     D/E  </c>    
  Incomparáveis são tuas promessas 

  <c>  A2         F#m7       D          E4   E</c>
  Aclame ao Senhor toda a Terra e cantemos
  <c>  A2        F#m7      D        E4  E</c>
  Poder, majestade e louvores ao Rei
  <c>    F#m7       F#m7/E    D7M</c>
  Montanhas se prostrem e rujam os mares
  <c>    E  D/F#   E/G#  E</c>
  Ao som de teu no - me
  <c> B2        G#m7      E            F#4    F#</c>
  Alegre te louvo por teus grandes feitos
  <c>   B2       G#m7        E     F#4    F#</c>
  Firmado estarei, sempre te amarei
  <c>G#m7   G#m7/F#    E7M      F# </c>    
  Incomparáveis são tuas promessas

  <c>B2          G#m7        E          F#4 F# </c>  
  Aclame ao Senhor toda a Terra e cantemos
  <c>  B2        G#m7      E        F#4    F#</c>
  Poder, majestade e louvores ao Rei
  <c>  G#m7       G#m7/F#    E7M</c>
  Montanhas se prostrem e rujam os mares
  <c>   F#  E/G#   F#/A#</c>
  Ao som de teu nome
  <c> B2       G#m7      E            F#4    F#</c>
  Alegre te louvo por teus grandes feitos
  <c>   B2       G#m7        E     F#4    F#</c>
  Firmado estarei, sempre te amarei
  <c>G#m7    G#m7/F#    E      F#</c>
  Incomparáveis são tuas promessas
  <c>B2     G#m7       E       F#</c>
  Incomparáveis são tuas promessas
  <c>G#m7    G#m7/F#    E      E/F#       B2   x vezes</c>
  Incomparáveis são tuas promessas prá mim
    `
}

function queroMeEntregarDianteDoTrono() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Quero Me Entregar</h3>
  Tom: <c>D</c>
  [Intro] <c>C C G/B G/B C C G/B G/B </c>
          <c>C G/B Gm6/Bb Gm6/Bb</c>

  <c>   D9</c>
  Em meio a tempestade
  <c>  Bm7(11)</c>
  In-ten-sa escuridão
  <c>   Em7</c>
  Se tudo está perdido
  <c>    Gm6</c>
  Não vejo solução

  <c>   D9</c>
  Se minha vida toda
  <c>  Bm7(11)</c>
  Pa-re-ce esmorecer
  <c>  Em7                C#m7(b5)    F#7(#5)</c>
  E todo sofrimento eu não compreender

  <c>   Bm          Bm7M</c>
  Preciso ser lembrado
  <c>      Bm7      Bm7/A  E9/G#</c>
  que estás a me ampa - rar
  <c>  Gm6         </c>
  E tudo aquilo que me aflige
  <c>D/A            A9sus4  </c> 
  quero te entregar

  <c>D                     F#m7   B7(#5)</c>
  Quero minha vida entregar
  <c>Em7           G/A         D            B(b°)</c>
  Quero que tua graça venha me envolver
  <c>      Am7         D/C</c>
  Quero renascer de novo
  <c>      G/B        C7(9) C9/Bb</c>
  Meu passado esquecer
  <c>      D/A         G/A             C   </c>
  Quero ver o teu poder me transformar
  (<c> G/B Gm6/Bb</c> )


  <c>   D9</c>
  Em meio ao sucesso
  <c> Bm7(11)</c>
  E ê - xito sem fim
  <c>  Em7                 Gm6</c>
  Coberto de vitórias e bênçãos só para mim
  <c>   D9                        Bm7(11)</c>
  Se todos os meus sonhos eu pu-der realizar
  <c>   Em</c>
  Sem o menor esforço
  <c>   C#m7(b5)      F#7(#5)</c>
  Eu tu - do alcan - çar

  <c>   Bm          Bm7M       Bm7   Bm7/A </c>        
  Preciso ser lembrado que  tudo  vem   de   
  <c>E9/G#</c>
  ti
  <c>  Gm6</c>
  E como conseqüência
  <c>   D/A           A9sus4  G/B  A/C#</c>
  Eu quero a ti servir

  <c>D                     F#m7   B7(#5)</c>
  Quero minha vida entregar
  <c>Em7           G/A         D            B(b°)</c>
  Quero que tua graça venha me envolver
  <c>      Am7         D/C</c>
  Quero renascer de novo
  <c>      G/B        C7(9) C9/Bb</c>
  Meu passado esquecer
  <c>      D/A         G/A             D   </c>
  Quero ver o teu poder me transformar
  (<c> G/B A/C# </c>)


  <c>D                     F#m7   B7(#5)</c>
  Quero minha vida entregar
  <c>Em7           G/A         D            B(b°)</c>
  Quero que tua graça venha me envolver
  <c>      Am7         D/C</c>
  Quero renascer de novo
  <c>      G/B        C7(9) C9/Bb</c>
  Meu passado esquecer
  <c>      D/A         G/A             C </c> 
  Quero ver o teu poder me transformar

  [Final]<c>  C G/B G/B  C  C  D</c>
    `
}

function derramoMinhaVida() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  Tom: <c>G</c>
  [Intro] <c>G G C9 C9</c>      ( Piano )
          <c>G G C9 C9</c>      ( Banda )  
          <c>Em7 Em7 D4 D4</c>
  
  <c>G9                  D4</c>
  Unjo teus pés, meu Rei
  <c>    C9            Em7       D/F#</c>
  Prostrado derramo meu coração
  <c>Em                   Bm7</c>
  Unjo teus pés, meu Rei
  <c>    Am7           D4</c>    
  Prostrado derramo meu coração
  
  <c>    Em7                D4</c>
  Não sei o que vão pensar de mim
  <c>    Bm7                C9</c>
  Não sei se me entenderão
  <c>         G/B  Am7</c>
  Mas sem querer exagerar
  <c>    G/B</c>
  Nem mesmo impressionar
  <c>    C9                  D4</c>
  Te oferto tudo o que sou
  
  <c>  G9</c>
  Derramo minha vida
  <c>Em7                     C9</c>
  Tudo que tenho aos Teus pés, meu Senhor
  <c>  D4       </c>
  Aceite o louvor
  <c>  G9</c>
  Derramo essas lágrimas
  <c>Em7                     C9</c>
  São minha oferta a quem tanto me amou
  <c>     D4    </c>
  Quem me perdoou
  
  <c>G9                  D4</c>
  Unjo teus pés, meu Rei
  <c>    C9            Em7       D/F#</c>
  Prostrado derramo meu coração
  <c>Em                   Bm7</c>
  Unjo teus pés, meu Rei
  <c>    Am7           D4 </c>   
  Prostrado derramo meu coração
  
  <c>    Em7                D4</c>
  Não sei o que vão pensar de mim
  <c>    Bm7                C9</c>
  Não sei se me entenderão
  <c>         G/B  Am7</c>
  Mas sem querer exagerar
  <c>    G/B</c>
  Nem mesmo impressionar
  <c>    C9                  D4</c>
  Te oferto tudo o que sou
  
  <c>  G9</c>
  Derramo minha vida
  <c>Em7                     C9</c>
  Tudo que tenho aos Teus pés, meu Senhor
  <c>  D4       </c>
  Aceite o louvor
  <c>  G9</c>
  Derramo essas lágrimas
  <c>Em7                     C9</c>
  São minha oferta a quem tanto me amou
  <c>     D4    </c>
  Quem me perdoou
  
  <c>Am7                    G/B</c>
    Quem mais perdoaste, mais te amará
  <c>                   Eb7M</c>
  Por isso que eu te amo tanto
  <c>      Eb7M           D4</c>
  Eu te amo tanto Senhor!
  
  <c>  G9</c>
  Derramo minha vida
  <c>Em7                     C9</c>
  Tudo que tenho aos Teus pés, meu Senhor
  <c>  D4       </c>
  Aceite o louvor
  <c>  G9</c>
  Derramo essas lágrimas
  <c>Em7                     C9</c>
  São minha oferta a quem tanto me amou
  <c>     D4    </c>
  Quem me perdoou
  
  <c>  G9</c>
  Derramo minha vida
  <c>Em7                     C9</c>
  Tudo que tenho aos Teus pés, meu Senhor
  <c>  D4       </c>
  Aceite o louvor
  <c>  G9</c>
  Derramo essas lágrimas
  <c>Em7                     C9</c>
  São minha oferta a quem tanto me amou
  <c>     D4             C         G9</c>
  Quem me perdoou
    `
}

function revolucaoMelissaBarcelos() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Revolução (Melissa Barcelos</h3>
  Tom: <c>G</c>

  Intro:  <c>G D/F# C4/F C/E</c> 
          <c>G D/F# C4/F C/E</c>

  <c>G                   D/F#</c>
  Neste altar de adoração
  <c>  C9/E         C9</c>
  Estou senhor diante de Ti
  <c>G                 D/F#</c>
  Me esvazio de mim mesmo
  <c>    C9/E        C9</c>
  Pra dar lugar a Tua presença
  <c>Em              B/E</c>
  Já posso ate sentir
  <c>C9/E                  F</c>
  A essência que vem de Ti

  (refrão)
  <c>G                     D/F#                C7/E</c>
  Vem transborda este lugar com a chuva de poder
  <c>              C7           D4        G</c>
  Eu quero mergulhar em Teus rios de amor
  <c>              D/F#</c>
  Recebo a Tua unção
  <c>              Am7    G/B         C7          D7(4)     G</c>
  Aceito a condição de ser moldado só por Tuas mãos Senhor

  ( <c>... D/F# C4/F C/E</c> )

  <c>G                 D/F#</c>
  Toma toda imperfeição
  <c>     C/E      C9</c>
  Transforma um vaso perfeito
  <c>G                D/F#</c>
  Faz em mim uma revolução
  <c>  C9/E     C9</c>
  Trocando o velho por novo
  <c>Em                 B/E</c>
  Que eu possa me tornar
  <c>C9/E                 F</c>
  O mais sincero adorador

  (refrão)
  <c>G                     D/F#                C7/E</c>
  Vem transborda este lugar com a chuva de poder
  <c>              C7           D4        G</c>
  Eu quero mergulhar em Teus rios de amor
  <c>              D/F#</c>
  Recebo a Tua unção
  <c>              Am7    G/B         C7          D7(4) </c>    
  Aceito a condição de ser moldado só por Tuas mãos Senhor

  (repete 3x)
  <c>Em     C9        G         D/F#   D </c>        
  Te amo, te adoro, te louvo eu te exalto Senhor

  <c>Em    C9/E      G/D        D    </c>                        
  Te amo, te adoro, te louvo eu te exalto Senhor

  <c>Em     C9        G         D/F#   D  </c>       
  Te amo, te adoro, te louvo eu te exalto Senhor

  <c>Em    C9/E      G/D        D   </c>                         
  Te amo, te adoro, te louvo eu te exalto Senhor

  ( <c>G D/F# C4/F C/E </c>) 2x

  <c>G                     D/F#                C7/E</c>
  Vem transborda este lugar com a chuva de poder
  <c>              C7           D4        G</c>
  Eu quero mergulhar em Teus rios de amor
  <c>              D/F#</c>
  Recebo a Tua unção
  <c>              Am7    G/B         C7          D7(4) </c>    
  Aceito a condição de ser moldado só por Tuas mãos Senhor

  ( <c>G D/F# C4/F C9    C9    C9    C9</c> )
    `
}

function tudoOQueEuViviVocalLivre() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Tudo O Que Eu Vivi (Vocal Livre)</h3>
    Tom: <c>E</c>
    [Intro] <c>E</c>

    <c>E                     </c>
    Não que eu seja tanta coisa
    <c>                C#m7</c>
    Sou um grão de areia na imensidão
    <c>A                        Am</c>
    Mas cabe quase o mundo inteiro no meu peito
    <c>E              </c>
    Carrego todas as memórias
    <c>          C#m7</c>
    Todos os sabores que daqui provei
    <c>A                Am</c>
    Levo comigo os abraços que ganhei
    <c>B                  Am6(9)/C</c>
    Mas se tiver que definir em uma só palavra
    <c>C#m7</c>
    Resumir a minha historia numa só canção
    <c>A</c>
    Se dessa vida eu levasse um só nome
    <c>Bsus        </c>
    Ele é Cristo!

    <c>E</c>
    Tudo o que eu vivi, todos os amores
    <c>E/D#</c>
    Terras que pisei, amigos que ganhei
    <c>      A</c>
    Não, nada é melhor
    <c>              Bsus             A6   E7/G#</c>
    Não, nada me falta eu encontrei  meu Cris-to
    <c>E</c>
    Tudo o que eu vivi, todos os castelos
    <c>E/D#</c>
    Tudo que alcancei, tudo que eu nem sei
    <c>A</c>
    Nada é melhor
    <c>                Bsus          A6   </c>
    Não quero mais nada, eu encontrei   o meu   
    <c>      E      </c>
    Jesus!

    <c>E</c>
    Ele é a paz da minha estrada
    <c>             E</c>
    A doce companhia do meu coração
    <c>A                     Am</c>
    O ombro amigo onde despejo minhas mágoas
    <c>E</c>
    O meu sorriso mais sincero
    <c>            C#m7</c>
    Esperança em cada novo amanhecer
    <c>A                    Am6</c>
    O amor seguro que ninguém pode roubar

    [ Bastante intensidade ]

    <c>B                     Am6(9)/C</c>
    Que minha boca esteja cheia da sua palavra
    <c>C#m7</c>
    Seja o tema incansável da minha canção
    <c>A                </c>                  
    Que minha vida só aponte esse nome, 
    <c>Bsus</c>
    Cristo!

    <c>E</c>
    Tudo o que eu vivi, todos os amores
    <c>B/D#</c>
    Terras que pisei, amigos que ganhei
    <c>      A</c>
    Não, nada é melhor
    <c>              Bsus             A6    E7/G# </c>
    Não, nada me falta eu encontrei  meu Cristo

    <c>E</c>
    Tudo o que eu vivi, todos os castelos
    <c>B/D#</c>
    Tudo que alcancei, tudo que eu nem sei
    <c>A/C#</c>
    Nada é melhor
    <c>                Bsus            A6</c>
    Não quero mais nada eu encontrei  o meu

    <c>    A7               C#m7</c>
    Pode ser um Rei com poder nas mãos
    <c>        B     B/A</c>
    Mas do mal, escravo, sim
    <c>    E</c>
    De tudo o que eu vivi, de todos os amores

    <c>E       E/D#      D9</c>
    Eu prefiro o  meu Jesus
    <c>    A/C#    Am9/C</c>
    E servi-Lo até   o fim

    <c>C#m               B/D# E</c>
    Tudo o que eu vivi,    todos os castelos
  <c>E/G# A7</c>
       Tudo o que alcancei, tudo o que eu nem sei
    <c>F#m7</c>
    Nada é melhor
    <c>                Bsus  </c>                   
    Não quero mais nada, eu encontrei o meu 
    <c>E   E/D#</c>
    Jesus
    <c>A/C#</c>
    Nada é melhor
    <c>              B4/D#</c>
    Não quero mais nada
    `
}

function levantoACruzAdoradores() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Levanto a Cruz (Adoradores 4)</h3>
    Tom: <c>C</c>

    [Intro] <c>C  F/C  C   G  Am  C/E F</c>
            <c>C  F/C  C   G  Am  C/E F</c>
    
    <c>C        F/C    C     G       Am</c>
      Levanto a  cruz; a cruz de Jesus
    <c>   C/E       F    C           F/C    C      G      Am</c>
    Proclamo seu nome,  para que toda  terra conheça o Pai
    <c>   C/E              F             F   Am     G</c>
    Me prosto aos teus pés, Cristo um dia se fez homem
    <c>            F/A   C/E   F              F     Am   G</c>
    Vencendo a morte com poder e com seus braços estendidos
    <c>          F/A          C/E         F   F</c>
    Sobre uma cruz nos deu vida outra vez
    
    <c>          C           Am    G</c>
    Rei vitorioso; Cristo Je - sus
    <c>         Am        C/E      F</c>
    Filho de Deus nós estamos aqui
    <c>           C            Am   G</c>
    Não por direito ou mérito algum
    <c>    Am            C/E   F    F</c>
    Na cruz nos somos resgatados
    
    <c>C        F/C    C     G       Am</c>
      Levanto a  cruz; a cruz de Jesus
    <c>   C/E        F   C          F/C     C      G      Am</c>
    Proclamo seu nome,  para que toda  terra conheça o Pai
    <c>   C/E              F              F  Am      G</c>
    Me prosto aos teus pés, Cristo um dia se fez homem
    <c>            F/A   C/E   F               F    Am   G</c>
    Vencendo a morte com poder e com seus braços estendidos
    <c>          F/A          C/E         F   F</c>
    Sobre uma cruz nos deu vida outra vez
    
    <c>          C           Am    G</c>
    Rei vitorioso; Cristo Je - sus
    <c>         Am        C/E      F</c>
    Filho de Deus nós estamos aqui
    <c>           C            Am   G</c>
    Não por direito ou mérito algum
    <c>    Am            C/E   F  </c>  
    Na cruz nos somos resgatados
    
    <c>          C           Am    G</c>
    Rei vitorioso; Cristo Je - sus
    <c>         Am        C/E      F</c>
    Filho de Deus nós estamos aqui
    <c>           C            Am   G</c>
    Não por direito ou mérito algum
    <c>    Am            C/E   F  </c>  
    Na cruz nos somos resgatados
    
    <c>          C           Am    G</c>
    Rei vitorioso; Cristo Je - sus
    <c>         Am        C/E      F</c>
    Filho de Deus nós estamos aqui
    <c>           C            Am   G</c>
    Não por direito ou mérito algum
    <c>    Am            C/E   F  </c>  
    Na cruz nos somos resgatados
    
    <c>C      G      Am    C/E  F </c>  
    Santo, Santo, San - to  Deus
    <c>C      G      Am    C/E  F</c>
    Santo, Santo, San - to  Deus
    <c>C      G      Am    C/E  F    F C</c>
    Santo, Santo, San - to  Deus
    <c>C      G      Am    C/E  F    F C</c>
    Santo, Santo, San - to  Deus....
    
    <c>C        F/C  C       G        Am</c>
      Levanto a  cruz; a cruz de Jesus
    <c>    G         F</c>
    Proclamo seu nome
    `
}

function emEspiritoEmVerdade() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Em Espírito, Em Verdade</h3>
    Tom: <c>A</c>

    Intro: <c>A E/A D/A E/A</c>

    [Parte 2]
    <c>      A          E/G#</c>
    Em espirito em verdade
    <c>      D               A  </c>      
    Te adoramos,    te adoramos  (2x)

    [Parte 2]

    <c>        F#m F#m/F    F#m/E  B9/D#</c>
    Rei dos reis      e senhor
    <c>        D       E      A  </c>
    Te entregamos nosso viver.
    <c>        F#m F#m/F   F#m/E  B9/D#</c>
    Rei dos reis      e senhor
    <c>        D     Bm       E   </c>
    Te entregamos nosso viver.

    [Refrão]

    <c>             D A/C# A  F#m  E </c> 
    Pra te-a adorar o  rei dos reis
    <c>              D  A/C# A   F#m   E</c>
    Foi que eu nasci  o   rei Je - sus
    <c>      C#m         F#m</c>
    Meu prazer é te louvar
    <c>        E      D</c>
    Meu prazer é estar
    <c>    E/G#      E     A</c>
    Nos a - trios do senhor
    <c>      E/G#     F#m</c>
    Meu prazer é viver
    <c>    E       D         E       A</c>
    Na casa de deus onde flui o amor
    
    (<c> E/G# D E A </c>)
    `
}

function benditaSegurancaIBAB() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Bendita Segurança</h3>
    Tom: <c>C</c>

    Intro:  <c>C F Am Am7 G</c>
            <c>C F Am G</c>

    <c>         C    F           C</c>
    Que segurança!  Sou de Jesus!
    <c>          Am7 D4 D             G  G4 G</c>
    Eu já desfruto     bênçãos da luz!
    <c>            C   F             C</c>
    Sei que herdeiro  sou de meu Deus;
    <c>       Dm7 G               C</c>
    Ele me leva  à glória dos Céus!

    <d>Coro:</d>                
    <c>           C     F             C</c>
    Canta, minh'alma!  Canta ao Senhor!
    <c>          Am7   D             G</c>
    Rende-Lhe sempre  honra e louvor!
    <c>          C      F             C</c>
    Canta, minh'alma!  Canta ao Senhor!
    <c>          Dm7   G            C  Fmaj7 Am7 G</c>
    Rende-Lhe sempre  honra e louvor!

    <c>          C   F            C</c>
    Sendo submisso  sempre ao bem,
    <c>           Am7  D            G</c>
    Sinto os enlevos  puros do além;
    <c>          C     F             C</c>
    Anjos, descendo,  trazem do alvor
    <c>        Dm7  G4 G               C  F</c>
    Ecos da graça,    bênçãos do amor.

    <d>Coro:</d>                
    <c>           C     F             C</c>
    Canta, minh'alma!  Canta ao Senhor!
    <c>          Am    D             G</c>
    Rende-Lhe sempre  honra e louvor!
    <c>          C      F             C</c>
    Canta, minh'alma!  Canta ao Senhor!
    <c>          Dm7   G            C  F Am G</c>
    Rende-Lhe sempre  honra e louvor!
    <c>C  F     Am G</c>
    Oh oh  ooô  oh

    <c>          C   F                C</c>
    Sempre vivendo  em Seu grande amor,
    <c>       Am7 D             G</c>
    Me regozijo  em meu Salvador;
    <c>       C    F          C</c>
    Esperançoso,  vivo na luz;
    <c>          Dm7 G            C</c>
    Quanta bondade  tem meu Jesus!

    <d>Coro:</d>                
    <c>           C     F             C</c>
    Canta, minh'alma!  Canta ao Senhor!
    <c>          Am7  Am D             G</c>
    Rende-Lhe sempre     honra e louvor!
    <c>           C     F             C</c>
    Canta, minh'alma!  Canta ao Senhor!
    <c>          Dm7   G            C  F Am  C G</c>
    Rende-Lhe sempre  honra e louvor!
    <c>C  F     Am G         C</c>
    Oh oh  ooô  oh
  `
}

function umDiaDeEsperanca() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Um Dia De Esperança</h3>
    Tom: <c>Dm ou F</c>
    [Intro] <c>Dm7  Gm7  Bb/C BbM7 F2/A  F4/G </c>
    
    <c>C4               F      F#º          F4/G  </c>        
    Deus nos deu um dia na semana pra pensarmos
    <c>            Bb/C</c>
    no que Ele fez
    <c>D  D7 Gm7        Gm7+         Gm7  </c>         
    Se-pa-rado, Abençoado, Santificado dia de 
    <c>C/G   Bb/C</c>
    lou - vor
    <c>C7       F2        Eb/F   F7  </c>  
    Di-- a   lindo escolhido    como 
    <c>BbM7           Db/Eb</c>
    verdadeiro memorial
    <c>Eb/Db  F/C              Ab2/C        Bb/C </c>         
    Pra lembrarmos  constantemente que o grande
    <c>             C7sus4 C7</c>
    Deus é o Criador
    
    <c> C7sus4      Bb/D C/E     F   </c>        
    O Sábado é um dia  de Esperança, de 
    <c>   F/A           BbM7             C7sus4</c>
    lembrança de descanso pleno do labor
    <c>  Bb/D   C/E    F           F/A  </c>             
    É dia   de Esperança, de aliança entre um 
    <c>Bb              C7sus4</c>
    povo e o seu Senhor
    <c> A/C#       Dm            Cm7  Eb/F </c>      
    É dia de alegria, de harmonia é dia de 
    <c>   Bb       F/A</c>
    canção e poesia
    <c>Dm         Gm7     C7sus4            F</c>
    Tempo abenço-a-do,    Santo dia do Senhor
    
  <c>C7sus4         F            F#º   </c>      
    Livre  de cuidados  desta vida, nós 
    <c>  F4/G              Bb/C</c>
    voltamos para o Salvador
    <c>D  D7  Gm7     Gm7+         Gm7 </c>       
    Es-tu- damos a palavra aprendemos mais do 
    <c>   C/G  Bb/C</c>
    Seu a - mor
    <c>C7         F        Eb/F   F7     BbM7  </c>   
    Nesse     dia tão precioso    dedicamos 
    <c>            Db/Eb</c>
    tempo pra servir
    <c>Eb/Db   F/C       Ab/C          Bb/C </c>         
    Aos que tanto necessitam de atenção e um 
    <c>          C7sus4</c>
    pouco de amor
    
    <c>  C7sus4      Bb/D C/E     F  </c>         
    O Sábado é um dia  de Esperança, de 
    <c>   F/A          BbM7             C7sus4</c>
    lembrança de descanso pleno do labor
    <c>  Bb/D   C/E    F           F/A  </c>             
    É dia   de Esperança, de aliança entre um 
    <c>Bb              C7sus4</c>
    povo e o seu Senhor
    <c> A/C#       Dm            Cm7  Eb/F </c>      
    É dia de alegria, de harmonia é dia de 
    <c>   Bb       F/A</c>
    canção e poesia
    <c>Dm7         Gm7    C7sus4            F</c>
    Tempo abenço-a-do,    Santo dia do Senhor
    
    <c>      Bbm7           Eb/Bb     F  </c>    
    De um Sábado a outro Sábado adoremos juntos
    <c>Bb/F   F</c>
    ao Senhor
  <c>F/A  Bbm7               Gm7(b5) </c>            
    Na terra renovada, por toda eternidade 
    <c> F/C        C7sus4    D7sus4</c>
    exaltaremos Seu amor

    Tom: <c>G</c>
    
    <c>  C/E         D/F#          G </c>           
    O Sábado é um dia   de Esperança, de 
    <c>   G/B          CM7               D7sus4</c>
    lembrança de descanso pleno do labor
    <c>  C/E  D/F#     G          G/B  </c>             
    É dia   de Esperança, de aliança entre um 
    <c>C              D7sus4</c>
    povo e o seu Senhor
    <c>  B/D#       Em           Dm7   F/G </c>         
    É dia de alegria, de harmonia é dia de 
    <c>    C       G/B</c>
    canção e poesia
    <c>Em7         Am7                G/B   D/E  </c>         
    Tempo abenço-a-do, tempo tão sagrado,  
    <c>Em7        Am7    D7sus4</c>
    tempo incomparável
                        <c>EbMaj7 Cm7 Am7(b5) G</c>
    Santo dia do Senhor
  `
}

function sondaMeVocalLivre() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Sonda Me (Vocal Livre)</h3>
    Tom: <c>C</c>

    Intro:  <c>F G Am G/B C9</c> 2x
            <c>F G Am G/B C9</c>  ( baixo e pratos)
           <c> F G Am G/B </c>

    <c>C9          C7M(9)     Am            G</c>
    Sonda-me, Senhor   e   me conhece
    <c>F9         C/E     Dm7   G</c>
    Quebranta o meu coração
    <c>    C            C7M(9)      Am7           G</c>
    Transforma-me conforme   a   Tua palavra    
    <c>  F9       G/F              E7(#9#5)   Am</c>
    E enche-me até que em mim se ache só a Ti
    <c>G      F  G Am   G/B C9  F   G</c>
    En____tão,  usa - me Senhor
    <c>Am      G/B</c>
    Usa-me
    
    <c>          C               Em7</c>
    Como um farol que brilha à noite
    <c>      Am            C/E</c>
    Como ponte sobre as águas
    <c>      F         C/E</c>
    Como abrigo no deserto
    <c>      F          G</c>
    Como flecha que acerta o alvo
    <c>    C         G/B       Am </c>            
    Eu quero ser usado da maneira que te 
    <c>G</c>
    agrade
    <c>  C/E      F9            C/E</c>
    Em qualquer hora e em qualquer lugar
    <c>    F9          G</c>
    Eis aqui a minha vida
    <c>    Am  G    F#79 11(b5)</c>
    Usa-me, Se  -  nhor
    <c>F</c>
    Usa-me

    Baixo e bateria: (<c> F G Am G/B C9 
                      F G Am G/B </c>)
    
    <c>C9         C7M(9)/B      Am          Am/G C7M/E</c>
    Sonda-me, Senhor     e   me conhece
    <c>F9         C/E      Dm7   G/B</c>
    Quebranta o meu coração
    <c>      C         C7M(9)/B     Am7          Am/G C7M/E</c>
    Transforma-me conforme   a   Tua palavra    
    <c>  F9       G/F              E7(#9#5)   Am</c>
    E enche-me até que em mim se ache só a Ti
    <c>G      F  G Am   G/B C9  F   C/G</c>
    En____tão,  usa - me Senhor
    <c>Gsus4 </c>
    Usa-me

    Banda entra pesado:

    <c>          C               Em</c>
    Como um farol que brilha à noite
    <c>      Am            G</c>
    Como ponte sobre as águas
    <c>C/E    F         C/E</c>
    Como abrigo no deserto
    <c>      F          G</c>
    Como flecha que acerta o alvo
    <c>    C         Em       Am  </c>           
    Eu quero ser usado da maneira que te 
    <c>G</c>
    agrade
    <c>  C/E      F9            C/E</c>
    Em qualquer hora e em qualquer lugar
    <c>    F9          G</c>
    Eis aqui a minha vida
    <c>E/G#  Am  G    F#79 11(b5)</c>
    Usa - me, Se  -  nhor
    <c>F        G</c>
    Usa-me

    <c>C9          C7M/E             F    C9/E</c>
    Sonda-me, quebranta-me, transforma-me
    <c>Dm7(9)     F9   G</c>
    Enche-me e usa-me    
    
    <c>C9          C7M/E             F    C9/E</c>
    Sonda-me, quebranta-me, transforma-me
    <c>Dm7(9)     F9   G</c>
    Enche-me e usa-me  

    <c>C9          C/E               F    C/E</c>
    Sonda-me, quebranta-me, transforma-me
    <c>Dm7(9)   F9   G   C/E </c>
    Enche-me Senhor

    <c>          C               Em</c>
    Como um farol que brilha à noite
    <c>      Am            G</c>
    Como ponte sobre as águas
    <c>C/E    F         C/E</c>
    Como abrigo no deserto
    <c>      F          G       F/A G/B</c>
    Como flecha que acerta o alvo
    <c>    C         Em       Am   </c>          
    Eu quero ser usado da maneira que te 
    <c>G</c>
    agrade
    <c>  C/E      F             C/E</c>
    Em qualquer hora e em qualquer lugar
    <c>    F           G</c>
    Eis aqui a minha vida
    <c>E7/G#   Am  G   F</c>
    Usa  -  me, Se-nhor
    <c>F        G</c>
    Usa-me

    <c>C9           Am       G       F</c>
    Sonda-me, quebranta-me, transforma-me
    <c>Dm7        F9          F G Am G/B C9</c>
    Enche-me e usa-me, Senhor

    <c>F G Am G/B        C9</c>
  `
}

function podeCairOMundo() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Pode Cair O Mundo</h3>
  Tom: <c>G</c>
  INTRO:<c>G D/F# Em D4 D Em Em7/D </c>
      <c>C D4 D7/C G/B C9 G/D D4 G9</c>

  <c>  G                         C/G</c>
  O mundo corre em busca de sucesso
  <c>    G                            C/G</c>
  E a vida em tanta guerra se   desfaz
  <c>  G                              C9/G</c>
  O homem sonha as glórias do progresso
  <c>    C    D     Em    G/B   D4  D</c>
  Mas anda velozmente pa-ra trás
  <c>   G                          C9/G</c>
  Só Deus concede a glória verdadeira
  <c>   G          G7/F#      C9/E</c>
  Só nEle a vida tem real valor
  <c>  C                        D7/C</c>
  É Ele quem promete um mundo novo
  <c>    C            F#/A#            B4 B</c>
  Sem medo, sem tristeza e sem rancor

  Refrão:

  <c>  G  G7/F#      Em            D4  D</c>
  A gló-ria desta terra é passageira
  <c>  Em    G/D    C             D4 D</c>
  A vida passa e tudo que ela traz
  <c>    G    G/B   C7+</c>
  Não temo o  futuro
  <c>    Am7           D</c>
  Pois tenho Deus comigo
  <c>D7/C  G/B   C9   G/D   D7      G9  C9/G</c>
  Pode cair o mundo,   estou em  paz

  <c>  G                 G7    C/G</c>
  Entrega Teu caminho ao Senhor
  <c>C/E  D/F#  G9    G        G/B   C9</c>
    Confia nEle, e o mais Ele fará
  <c>  C9                  D7/C</c>
  É esse o sucesso verdadeiro
  <c>  C9            F#/A#            B F#7/C# B/D#</c>
  Estar no mundo mas em Deus confiar

  Refrão:

  <c>  G  G7/F#      Em            D4  D</c>
  A gló-ria desta terra é passageira
  <c>  Em    G/D    C             D4 D</c>
  A vida passa e tudo que ela traz
  <c>    G    G/B   C7+</c>
  Não temo o  futuro
  <c>    Am7           D4</c>
  Pois tenho Deus comigo
  <c>D7/C  G/B   C9   G/D   D7      G9  G </c>
  Pode cair o mundo,   estou em  paz

  [Ponte]

  <c>Em            Bm7      Em</c>
  Na batalha contra o mal
  <c>                  D/G    A4   A  G9/B</c>
  Cristo é o grande vencedor
  <c>    C7+              D/G   C7+</c>
        Ele é o nosso general
  <c>        D           B4   B</c>
  Ele é o Nosso  Salvador

  Refrão:

  <c>  G  G7/F#      Em            D4  D</c>
  A gló-ria desta terra é passageira
  <c>  Em    G/D    C             D4 D</c>
  A vida passa e tudo que ela traz
  <c>    G    G/B   C7+</c>
  Não temo o  futuro
  <c>    Am7           D4</c>
  Pois tenho Deus comigo
  <c>D7/C  G/B   C9       G/D  D4</c>
  Pode cair o mundo  
  <c>D7/C  G/B   C9    G/D</c>
  Pode cair o mundo        
  <c>  D7       G  </c>
  estou em  paz
  `
}

function fielATodaProva() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
    <h3>Fiel a Toda Prova</h3>
    Tom: <c>F</c>
    [Intro]: <c>C C7 </c>
            <c>F F7/Eb Bb/D Bbmin/Db </c>
            <c>F/C Bm7(b5) G7 Gmin7 C7</c>

  <c>F2   F2        F2           Bb/F Bb/F</c>
  Paro pra pensar nos desafios des-te meu 
  <c>  Bb/F</c>
  viver
  <c>C7/G C7/G    D2/E  C            C7(b9)    C7(b9)</c>
  Paro pra ouvir   o que a voz de Deus quer me 
  <c>     F</c>
  dizer
  <c>    Cm/Eb Cm/Eb        D74 D7</c>
  São tantas as  pressões
  <c>    Gm7   Gm7          Eb Eb7</c>
  Que tenho que enfrentar
  <c>  F4/C   F/C     Bbm7(b5)</c>
  Mas bem a-ci-ma de - las
  <c>Gm7               Csus C</c>
  Sei que está meu Pai

  [Refrão]

  <c>C74         F2</c>
  Quero ser fiel a toda prova
  <c>                G7sus/D          Dm7M</c>
  Fiel em qualquer tempo, qualquer hora
  <c>Dm          Gm7</c>
  Quero ser fiel no que é pouco
  <c>          Csus         Bb/D</c>
  Para ser fiel no que é muito
  <c>C/E         F          F7/Eb</c>
  Quero ser fiel a toda prova
  <c>           Bb/D         Bbm/Db</c>
  Não por uma mera obrigação
  <c>                F/C             Bm7(b5)</c>
  Mas em resposta ao amor tão grande
  <c>G7         Gm7     C7(b9)</c>
  Que um dia inundou
  <c>           F</c>
  O meu coração

  (<c> Bb F/A  Ab Bb6/C C </c>)

  <c>F2    F2      F2                   Bb/F  Bb/F</c>
  Posso triunfar  conheço alguém que já venceu
  <c>     Bb/F</c>
  por mim
  <c>C7/G C7/G      C/E                 C7(b9) </c>
  Posso me apegar   à forte mão de um Deus tão 
  <c>C7(b9)    F</c>
  grande assim
  <c>  Cm/Eb  Cm/Eb    D74 D7</c>
  Em meio à provação
  <c>  Gm7           Eb Eb7</c>
  Começo a louvar
  <c> F4/C   F/C    Bbm7(b5)</c>
  E Seu poder do al-to
  <c>Gm7            Csus C</c>
  Vem me alcançar

  [Refrão]

  <c>C74         F2</c>
  Quero ser fiel a toda prova
  <c>                G7sus/D          Dm7M</c>
  Fiel em qualquer tempo, qualquer hora
  <c>Dm          Gm7</c>
  Quero ser fiel no que é pouco
  <c>          Csus         Bb/D</c>
  Para ser fiel no que é muito
  <c>C/E         F          F7/Eb</c>
  Quero ser fiel a toda prova
  <c>           Bb/D         Bbm/Db</c>
  Não por uma mera obrigação
  <c>                F/C             Bm7(b5)</c>
  Mas em resposta ao amor tão grande
  <c>G7         Gm7     C7(b9)</c>
  Que um dia inundou
  <c>           F</c>
  O meu coração

  [Final]

  <c>Bbm7     Eb  Eb7/Db</c>
  Deus Poderoso
  <c>F/C        Bbm7(b5)</c>
  Pai tão grandioso
  <c> Gsus          G7             Gm7     Csus Am/C </c>
  Envie em meu axílio Seu anjo mais poderoso!

  <c>C74         F2</c>
  Quero ser fiel a toda prova
  <c>                G7sus/D          Dm7M</c>
  Fiel em qualquer tempo, qualquer hora
  <c>Dm          Gm7</c>
  Quero ser fiel no que é pouco
  <c>          Csus         Bb/D</c>
  Para ser fiel no que é muito


  <c>C74         F          F7/Eb</c>
  Quero ser fiel a toda prova
  <c>           Bb/D         Bbm/Db</c>
  Não por uma mera obrigação
  <c>                F/C           Bm7(b5)</c>
  Mas em resposta ao amor tão grande
  <c>Gm7         Am7   D7(b9)</c>
  ao amor tão grande
  <c>Gm7        F/A</c>
  ao mor tão grande
  <c>G/B        Csus     C7(b9)</c>
  Que um dia inundou
  <c>           F</c>
  O meu coração
  `
}

function tesouroMatheusRizzo() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
    <h3>Tesouro (Matheus Rizzo)</h3>

    Tom: <c>C</c>

    <c> C            C5+     C6               C7</c>
    Aonde quer que seja que escondas teu tesouro
    <c>  F                   C   </c>
    Ali também está teu coração
    <c> C              C5+           C6                C7</c>
    Se aqui na terra o esconderes, ladrões podem roubá-los
    <c>   F                     C7</c>
    Ou pode escondê-lo lá no céu
    
    <c>        F    C/E   Dm  G7    C    G/B   Am Am/G</c>
    Há um tesouro no final da jornada dessa vida
    <c>    F C/E    Dm    G7    C Gm7 C7</c>
    Ele é  a  razão do meu viver
    <c> F     C/E   Dm  G7       C        G/B     Am  Am/G</c>
    Cristo é o Tesouro, é a razão pela qual eu vivo
    <c>    F          G             F  C/E  Dm  C </c>
    E será o meu tesouro até morrer
    
    <c>   C           C5+          C6             C7</c>
    Se pensas hoje aonde vais ou qual será o caminho
    <c>  F                        C5+</c>
    Existe um mapa para todos nós
    <c>  C            C5+            C6           C7</c>
    Se nós o lermos e o seguir-mos aonde ele indica
    <c>         F                             C7</c>
    Não nos perderemos, só temos que escolher

  `
}

function grandeDeusAdoradores() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Grande Deus Adoradores</h3>
  Tom: <c>D</c>
  Intro: <c>E    E  D  A   E    E  D  A </c>

  <c>    E              A/E    E  </c>       
  Em Tua presença quero estar,  
  <c>    E               A/E  E  </c>   
  completo quero me entregar 
  <c>         E/G#   A    D/A   A </c>        
  Dar graças e   cantar,  
  <c>            E       A/E  E    D   A </c>            
  dar graças e cantar.
  <c>   E                A/E     E</c>    
  Em Tua presença quero estar,   
  <c>    E               A/E  E </c>   
  completo quero me entregar 
  <c>          E/G#   A    D/A   A  </c>       
  Dar graças e     cantar,   
  <c>                 E       A/E  E </c>
  dar graças e cantar.          

  <c>            B                    B </c>
  Pois Tu, Senhor,  É o nosso Criador 
  <c>         C#m                          C#m </c>
  Nas Tuas mãos       estão a terra e o mar 
  <c>      B                   B </c>
  O universo se ajoelha e louva,  
  <c>             A/E    E </c>
  Teu nome exaltado   é. 
  <c>E           B               B </c>
    No esplendor da Tua Santidade  
  <c>       C#m              E/G#  A </c>
  É onde eu       preciso Te adorar 
  <c>            E/B   B4                  E</c>
  Ó Rei dos reis,             grande Deus! 

  ( <c>E  D  A   E    E  D  A </c> )

  <c>  E                A/E   E </c>     
  Jesus eu quero Te aclamar,   
  <c>    E           A/E  E </c>
  com alegria Te louvar 
  <c>       E/G# A D/A A  </c>       
  Enquanto eu viver,   
  <c>            E  A/E  D A  </c>          
  enquanto eu viver.     

  <c>  E                A/E   E  </c>    
  Jesus eu quero Te aclamar,   
  <c>    E           A/E  E </c>
  com alegria Te louvar 
  <c>       E/G# A D/A A </c>        
  Enquanto eu viver,   
  <c>            E  A/E  E</c>            
  enquanto eu viver. 

  <c>            B                    B</c> 
  Pois Tu, Senhor,  É o nosso Criador 
  <c>         C#m                          C#m </c>
  Nas Tuas mãos       estão a terra e o mar 
  <c>      B                   B </c>
  O universo se ajoelha e louva,  
  <c>             A/E    E </c>
  Teu nome exaltado   é. 
  <c>E           B               B </c>
    No esplendor da Tua Santidade  
  <c>       C#m              E/G#  A </c>
  É onde eu       preciso Te adorar 
  <c>            E/B   B4                  E</c>
  Ó Rei dos reis,             grande Deus! 

  <c>            B                    B </c>
  Pois Tu, Senhor,  É o nosso Criador 
  <c>         C#m                          C#m </c>
  Nas Tuas mãos       estão a terra e o mar 
  <c>      B                   B </c>
  O universo se ajoelha e louva,  
  <c>             A/E    E </c>
  Teu nome exaltado   é. 
  <c>E           B               B </c>
    No esplendor da Tua Santidade  
  <c>       C#m              E/G#  A </c>
  É onde eu       preciso Te adorar 
  <c>            E/B   B4                  E</c>
  Ó Rei dos reis,             grande Deus! 

  (<c> E  D  A   E    E  D  A E </c>)
  `
}

function umMilagreAdoradores() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Um Milagre Adoradores</h3>
  Tom: <c>Db</c>
  [Intro]  <c>Eb Eb Gb Gb Db Db Eb Eb </c>

  <c>   Eb</c>
  Tu És o Deus que fez o céu
  <c>   Eb                           Ab/Eb</c>
  Senhor do impossível, Rei de Israel
  <c>  Eb                       Eb</c>
  Porém confesso que pedi milagres que jamais me 
  <c>      Ab/Eb   Ab/Eb      </c>                      
  acontece ...  ram
  <c>   Bb/D                            Ab/C    </c>    
  Já li no salmo que És meu  bom Pastor, nada vai 
  <c>      Eb   Eb</c>
  me faltar
  <c>    Bb/D                               Ab/C   </c>       
  Mas Pai, me ensine, por que o vale da sombra no 
  <c>        Eb    Eb</c>
  salmo está?

  <c>      Ab   Ab      Eb/G  Eb/G</c>
  Eu Te pe - ço, um mila - gre
  <c>       Ab                   Ab              Eb</c>
  De ter fé mesmo quando o milagre ali não está.
  <c>      Ab Ab       Cm Cm</c>
  Eu implo-ro, um mila-gre!
  <c>       Db6        Bb/B      Bb7        Eb</c>
  De aceitar que se faça a vontade do Pai

  ( <c>Eb Gb Gb Db Db Eb Eb</c> )
  `
}

function medleyAdoradores() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Medley Adoradores</h3>
    Tom: <c>C</c>

  <c>F/G   C              F/C     C  </c>
    Tal qual estou, eu venho a Ti
    <c> G/C   F/C   G/C   C</c>
    Aceita-me, ó Salvador
    <c>   C      Gm7 C/E F    D7/F#</c>
    Confiante sou em  Teu amor
    <c>  C/G  Am7      Dm  G7  C    Bb/C</c>
    Ó salvador, me achego a Ti

    ( Tom: <c>F</c> )
    
    <c>F    Eb/F  Bb </c>   
    Mais perto quero estar
    <c>F   Dm7      Gm7  C7</c>
    Meu Deus, de Ti
    <c>F  Eb/F    Bb</c>
    In-da  que seja a dor
    <c>F/C  C       C   </c> 
    Que me una a Ti
    <c>F   Bb/F F   F</c>
    Eis meu  constante orar
    <c>F    Bb/F  Dm7     C/F</c>
    Mais perto quero estar
    <c>F    Eb/F   Bb</c>
    Mais perto quero estar
    <c>F/C C        C   Ab/Bb Ebm7 Ab</c>
    Meu Deus, de Ti

    ( Tom: <c>Db</c>)    

    <c>Db           Ab/C</c>
    Sim, quero a Cristo
    <c>Bbm Gb      Db</c>
    Bem junto estar
    <c>Gb        Db</c>
    Té lá no além
    <c>     Bbm  Eb  Ab</c>
    Conseguir aportar
    <c>Db       Ab/C  Db  Gb           Ab</c>
    Oh, lar eter - no, lar de esplendor
    <c>Db/F    Db          Ab       Db</c>
    Lá estarei junto ao meu Salvador
    <c>Gb      Db/Ab A      Db/Ab Ab      Db </c>
    Lá cantarei   todo o Seu   grande amor
  `
}

function santoSomenteEOSenhor() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Santo Somente é o Senhor</h3>
  Tom: <c>C</c>

  [Intro] <c>C  Csus  C  Csus</c>

  <c>C        G           Am    C/G</c>
  Santo somente é o Senhor
  <c>F        C/E     Gsus   G</c>
  Digno de todo louvor
  <c>F          C        G    Abº  Am   C/G</c>
  Deus de bondade, justiça e a-mor
  <c>F        G (F/G    G7) C</c>
  Santo somen-te é o Senhor

  (<c> C  Csus  C  Csus </c>)

  <c>C        G           Am    C/G</c>
  Santo somente é o Senhor
  <c>F       C/E   Gsus   G</c>
  Digno de adoração
  <c>F            C           G     Abº   Am   C/G</c>
  Deus que é fiel, Deus de paz e per - dão  
  <c>F       G  (F/G    G7) C   G/B</c>
  Santo somen-te é o Senhor

  <c>Am   Em/G F   C/E  F       C/E           Gsus</c>
  San - to, San-to,  Santo somente é o Senhor
  <c>Am   Em/G F  G  Am  C/G  F       G  (F/G </c>   
  San - to, San - to,      Santo somen-te é o 
  <c>G7) C</c>
  Senhor

  (<c> C  Csus  C  Csus </c>)

  Tom:<c> Db</c>

  <c>Db      Ab          Bbm   Db/Ab</c>
  Santo somente é o Senhor
  <c>Gb      Db/F   Absus   Ab</c>
  Digno de a-doração
  <c>Gb           Db          Ab    Bbº Bbm Db/Ab</c>
  Deus que é fiel, Deus de paz e per-dão
  <c>Gb      Ab (Gb/Ab    Ab7) Db   Ab/C</c>
  Santo somen - te é o Se - nhor

  <c>Bbm  Fm/Ab Gb   Db/F  Gb      Db/F</c>      
  San - to,  San - to,  Santo somente é o 
  <c>    Absus   Ab</c>
  Senhor
  <c>Bbm  Fm/Ab Gb  Ab  Bbm  Db/Ab</c>
  San - to,  San- - -to
  <c>Gb      Ab (Gb/Ab    Ab7) Bbm   Db/Ab</c>
  Santo somen - te é o Se - nhor
  <c>Gb      Ab (Gb/Ab    Ab7) Bbm   Db/Ab</c>
  Santo somen - te é o Se - nhor
  `
}

function souDeJesusjovem2006() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Sou de Jesus CD Jovem 2006</h3>
  Tom: <c>Eb</c>
  Intro:<c>Bb Eb C G C9 C7 Fm9 Bb9 Eb/Bb</c>

  <c>Eb                Bb/Eb       Ab9/Eb </c>    
    Dois caminhos a seguir, dois senhores a 
  <c>    Eb Bb/Eb Ab/Eb</c>
  lutar
  <c>Eb                    Bb/Eb      Ab9/Eb</c>
    Qual dos dois irei servir? Há só uma 
  <c>      Eb</c>
  decisão
  <c>Db6                 Bb/C C7     Fm7 </c>       
    Quantas vezes procurei   os prazeres deste
  <c>Abm7 Db/B</c>
    mundo
  <c>    Eb/Bb       F/A         Ab/Bb  Db7</c>
  Encontrei mil motivos pra chorar  
  
  <c>Eb               Bb/Eb       Ab9/Eb </c>
    O inimigo sempre vem, disfarçando as 
  <c>        Eb Bb/Eb Ab/Eb</c>
  intenções
  <c>Eb               Bb/Eb    Ab9/Eb  </c>    
    Com ciladas ao redor ele quer me 
  <c>     Eb</c>
  destruir
  <c>Db6              Bb/C C7    Fm7     B/Db Db/B   </c> 
    Só Jesus pode me dar   a real felicida - de        
  <c>   Eb/Bb     F/A         Ab/Bb</c>
  E poder para ser um vencedor
  
  [Refrão]
  
  <c>         Eb       Cm7        Gm7</c>
  Sou de Jesus, o Senhor da vitória
  <c>    Bb/C  C7(9-) Fm        Eb/G </c> 
  O alimento  a  vida, rocha eterna da 
  <c>F7/A   Ab/Bb</c>
  salva - ção
  <c>                Eb         Cm7       Gm7</c>
  Seu amor me atraiu, deu-me paz e alegria
  <c>      Bb/C   C7(9-) Fm     Ab/Bb      Eb </c> 
  Eu já  fiz  minha escolha: sou de Jesus

  <c>(Cm7  Gm7  Ab9  Ab/Bb)   </c> 
  
  <c>Eb             Bb/Eb        Ab9/Eb  </c>     
    Decidi testemunhar mesmo em forte 
  <c>     Eb  Bb/Eb Ab/Eb</c>
  provação
  <c>Eb               Bb/Eb       Ab9/Eb </c>     
    rejeitando pela  fé   o pecado e seu 
  <c>   Eb</c>
  sabor
  <c>Db6              Bb/C    Fm7  </c>       
    No caminho de Jesus estarei sempre 
  <c> Abm7 Db/B</c>
  segu - ro
  <c>    Eb/Bb      F/A           Ab/Bb</c>
  E assim, eu prossigo rumo ao céu
  
  <c>         Eb       Cm7        Gm7</c>
  Sou de Jesus, o Senhor da vitória
  <c>    Bb/C  C7(9-) Fm        Eb/G  </c>
  O alimento  a  vida, rocha eterna da 
  <c>F7/A   Ab/Bb</c>
  salva - ção
  <c>                Eb         Cm7       Gm7</c>
  Seu amor me atraiu, deu-me paz e alegria
  <c>      Bb/C   C7(9-) Fm     Ab/Bb      Eb  </c>
  Eu já  fiz  minha escolha: sou de Jesus
  
  <c>        Db6                   C7</c>
  Mais do que em qualquer outro tempo
  <c>    Fm7            Abm7</c>
  O momento é de escolher
  <c>     Eb/Bb        Ab/B     B/Db    Ab/Bb</c>
  Sem temer nem hesitar, eu escolho Jesus

  Tom: <c>E</c>
  
  <c>A/B      E B/D#    C#m7  B    G#m7</c>
  Sou de Jesus,  o Senhor  da vitória
  <c>     B/C#  C#7  F#m7       E/G#  F#/A#</c>
  O alimento a  vida, rocha eterna  da 
  <c>  B9   A#/C#</c>
  salva - ção
  <c>F#m       A    B  E B/D#     C#m      G#m7</c>
    Seu amor me atraiu,  deu-me paz e alegria
  <c>      B/C#  C#7   F#m7     A/B      E/G#</c>
  Eu já fiz minha escolha:   sou de Jesus
  <c>      C#  C#7     F#m7  F#m7 E/G#  A</c>
  Eu já fiz minha escolha
  <c>B9        E/G#  A  C/D  E</c>
  Sou de Jesus
  `
}

function quePrazerESerDeCristo271() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Que Prazer é Ser de Cristo 271</h3>
    Tom: <c>G</c>  

    Intro: <c>G C C/G G</c>
            <c>D/F# A7/E D</c>
            <c>G C C/G G</c>
            <c>C G/D D G</c>

    1.
    <c>G            C      C/G G</c>
    Que prazer é ser de Cristo,
    <c>            D/F# A7/E  D</c>
    NEle crer e con - fi - ar,
    <c>G          C      C/G G</c>
    Aceitar os Seus ensinos,
    <c>    C      G/D D  G</c>
    Sua paz e amor gozar!

    Coro:
    <c>G               D7 Em    G/D  D</c>
    Cristo! Cristo! Já con - fi - o
    <c>G               D/F# A7/E  D</c>
    Em Teu nome, em Teu   po - der.
    <c>G               C   C/G G</c>
    Cristo! Cristo! bem-amado,
    <c>        C     G/D D7   G</c>
    Faze em mim a fé  crescer.

    2.
    <c>G              C       C/G G</c>
    Oh, que bênção crer em Cristo,
    <c>              D/F# A7/E   D</c>
    Crer no sangue que  ver - teu!
    <c>G              C     C/G G</c>
    Pois os meus pecados todos
    <c>    C       G/D D  G</c>
    Sepultou e os esqueceu!

    3.
    <c>G              C       C/G G</c>
    Oh, quão bom é crer em Cristo,
    <c>          D/F# A7/E   D</c>
    Ter certeza do  per - dão!
    <c>G          C      C/G G</c>
    Receber de Cristo mesmo,
    <c>      C     G/D D G</c>
    Vida, paz e salvação.

    4.
    <c>G             C      C/G G</c>
    Sim, feliz eu sou em Cristo,
    <c>            D/F# A7/E D</c>
    DEle aqui dese - jo  ser;
    <c>G              C    C/G G</c>
    Quero, pois, humildemente,
    <c>    C    G/D D G</c>
    Ao Senhor obedecer.
  `
}

function enquantoEuViver() {
  let thisText = document.getElementById('music-text')
    thisText.innerHTML = `
    <pre>
    <h3>Enquanto Eu Viver</h3>
  Tom: <c>Db</c>
  [Intro] <c>Db Gb/Db Ab/Db Gb/Db Db Gb/Db</c>

  
<c>Db         Ab     Bbm        Gb       Db</c>
  Enquanto eu viver Teu nome louvarei
  <c>          Ab        Gb                 Ab4 </c>
  Nada me impedirá de sempre O adorar, Senhor    
  <c>        Db/F                Gb</c>
  Os meus lábios dirão que Tu és Senhor
  <c>    Db/Ab             Gb/Bb</c>
  O mundo verá Teu poder
  <c>        Db/F           GbMaj7</c>
  Céus e terra irão Te adorar, meu Deus
  <c>    Gb          Ab4  Ab </c>
  Teu nome exaltará
  
<c>Db         Ab                 Bbm</c>
  Sejas louvado, Senhor e meu Deus
  <c>         Gb                Db</c>
  Tu és a glória e Teu é o poder
  <c>        Db4                 Ab4 Ab  </c>      
  Não haverá outro Rei outro Deus com tanto 
  <c>  Db</c>
  amor
  <c>          Ab                   Bbm</c>
  Deus vencedor meu Senhor e meu Rei
  <c>            Ab4      Ab  Bbm</c>
  O Deus que sempre me salvará
  <c>Db/Ab      Gb        Db/F</c>
  O Deus que sabe quem sou
  <c>      Ebm        Ab4</c>
  Ele sempre me amará
  
  (<c> Db Gb/Db Ab/Db Gb/Db Db Gb/Db </c>)
  
<c>Db        Ab     Bbm           Gb        Db</c>
  Tu és o Salvador Teu sempre é o louvor
  <c>            Ab          Gb  </c>        
  Meus lábios cantarão em Teu louvor, 
  <c>      Ab4  Ab</c>
  Salvador
  <c>      Db/F               Gb</c>
  As vitórias que eu alcançar aqui
  <c>Db/Ab                Gb/Bb</c>
  irão me lembrar quem Tu és
  <c>      Db/F               Gb7+</c>
  Pois vitórias sem Ti não existirão
  <c>      Gb                   Ab4  Ab </c>  
  És o Deus que jamais perderá
  
<c>Db         Ab                 Bbm</c>
  Sejas louvado, Senhor e meu Deus
  <c>         Gb                Db</c>
  Tu és a glória e Teu é o poder
  <c>        Db4                 Ab4 Ab </c>       
  Não haverá outro Rei outro Deus com tanto 
  <c>  Db</c>
  amor
  <c>          Ab                   Bbm</c>
  Deus vencedor meu Senhor e meu Rei
  <c>            Ab4      Ab  Bbm</c>
  O Deus que sempre me salvará
  <c>Db/Ab      Gb        Db/F</c>
  O Deus que sabe quem sou
  <c>      Ebm     Ab4   Db</c>
  Ele sempre me ama - rá
  
<c>D          A                  Bm</c>
  Sejas louvado, Senhor e meu Deus
  <c>         G                 D</c>
  Tu és a glória e Teu é o poder
  <c>        D4                 A4   A  </c>        
  Não haverá outro Rei outro Deus com tanto 
  <c>  D</c>
  amor
  <c>          A                    Bm</c>
  Deus vencedor meu Senhor e meu Rei
  <c>            A4       A    Bm</c>
  O Deus que sempre me salvará
  <c>D/A         G        D/F#</c>
  O Deus que sabe quem sou
  <c>      Em      A4  Bm  D/A  G</c>
  Ele sempre me amará
  
  <c>D/F#       Em</c>
  O Deus que sabe quem sou
  <c>      A4          D  G/D  A/D  G/D  D</c>
  Ele sempre me amará
    `
}

function teuAmorNaoFalha() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Teu Amor Não Falha</h3>
  Tom: <c>Am</c>
  [Intro] <c>Am F C G</c>  2x
          <c>F Am7 G</c>   2x    
  
  <d>[Primeira Parte]</d>
  
  <c>Am7           F</c>
    Nada vai me separar
  <c>C             G</c>
    Mesmo se eu me abalar
  <c>Am           F     C  G</c>
  Teu amor não falha
  
  <c>Am           F</c>
    Mesmo sem  merecer
  <c>C                      G</c>
    Tua graça se derrama sobre mim
  <c>Am             F     C   G</c>
    Teu amor não falha,  
  
  <d>[Refrão]</d>
  
  <c>F          C             G</c>
  Tu és o mesmo pra sempre
  <c>  Dm7           F</c>
    Teu amor não muda
  <c>            C</c>
  Se o choro dura uma noite
  <c>      G          Dm</c>
  A alegria vem pela manhã
  
  <c>F      C             G</c>
    Se o mar se enfurecer
  <c>        Dm7            F</c>
  Eu não tenho o que temer
  <c>          C             G</c>
  Porque eu sei que me amas
  <c>             F     Am7  G </c>
  Teu amor não falha
  
  <d>[Segunda Parte]</d>
  
  <c>Am7                       F</c>
    Se o vento é forte e profundo o mar
  <c>C                     G</c>
    Tua presença vem me amparar
  <c>     Am           F     C  G</c>
  Pois Teu amor não falha
  
  <c>Am             F</c>
    Difícil é o caminhar
  <c>C                           G</c>
    Nunca pensei que eu fosse alcançar
  <c>    Am           F      C G</c>
  
    <d>[Refrão]</d>
  
  <c>F          C             G</c>
  Tu és o mesmo pra sempre
    <c>Dm7           F</c>
    Teu amor não muda
  <c>            C</c>
  Se o choro dura uma noite
  <c>      G          Dm</c>
  A alegria vem pela manhã
  
  <c>F      C             G</c>
    Se o mar se enfurecer
  <c>        Dm7            F</c>
  Eu não tenho o que temer
  <c>          C             G</c>
  Porque eu sei que me amas

        <d>[Refrão]</d>
  
  <c>F          C             G</c>
  Tu és o mesmo pra sempre
  <c>  Dm7           F</c>
    Teu amor não muda
  <c>            C</c>
  Se o choro dura uma noite
  <c>      G          Dm</c>
  A alegria vem pela manhã
  
  <c>F      C             G</c>
    Se o mar se enfurecer
  <c>        Dm7            F</c>
  Eu não tenho o que temer
  <c>          C             G</c>
  Porque eu sei que me amas
  <c>             F     Am7  G </c>  (<c>F Am7 G</c>)
  Teu amor não falha
  
      <d>[Terceira Parte]</d>
  
  <c>         F</c>
  Tu fazes      que tudo
  <c>  Am               G</c>
  Coopere para o meu bem
  <c>         F</c>
  Tu fazes      que tudo
  <c>  Am               G</c>
  Coopere para o meu bem
  `
}

function castelo() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Castelo</h3>
  <c>G          Cm                   G</c>
  Crio mil motivos, para impressionar
  <c>            Cm                 Bm</c>
  Cumpro mandamentos, para me sentir
  <c>      Em          Bm</c>
  Mais digno, mais santo
  <c>  Em          A</c>
  Capaz de merecer
  <c>  D</c>
  Você

  <c>G        Cm               G</c>
  Vivo vagamente a interpretar
  <c>          Cm              Bm</c>
  Minha sanidade para oferecer
  <c>    Em      Bm</c>
  Sorrisos, abraços
  <c>  Em           A</c>
  Capazes de ocultar
  <c>            D</c>
  Que tudo em mim é superficial

  (Virada da bateria e Banda entra no G)

  <c>G        B  </c>         
  Olha pra mim e diz
  <c>      Em                    A</c>
  Se eu tenho algo bom pra te dar
  <c>G        B           Em</c>
  A minha vida é um castelo
  <c>                A</c>
  Pronto pra desabar
  <c>       Am</c>
  Porque tudo o que eu tenho
  <c>      Cm</c>
  Não é nada pra te dar

  (<c> G  Cm  G  Cm </c>)

  <c>G               Cm                G</c>
  Tudo o que é de graça pode se tornar
  <c>             Cm             Bm  </c> 
  Simples ou difícil para aceitar
  <c>      Em           Bm</c>
  Pois tudo o que eu tenho
  <c>  Em             A  </c>    (Banda entra no A)
  Lutei pra conquistar
  <c>        D</c>
  É tão difícil não poder pagar

  <c>G        B</c>
  Olha pra mim e diz
  <c>      Em                    A</c>
  Se eu tenho algo bom pra te dar
  <c>G        B           Em</c>
  A minha vida é um castelo
  <c>                A</c>
  Pronto pra desabar
  <c>       Am</c>
  Porque tudo o que eu tenho
  <c>      Cm</c>
  Não é nada pra te dar

  (<c> G  B  Em  A </c>)
  (<c> G  B  Em  A </c>)
  (<c> Am  Cm </c>)

  <c>G        B</c>
  Olha pra mim e diz
  <c>      Em                    A</c>
  Se eu tenho algo bom pra te dar
  <c>G        B           Em</c>
  A minha vida é um castelo
  <c>                A</c>
  Pronto pra desabar
  <c>       Am</c>
  Porque tudo o que eu tenho
  <c>      Cm</c>
  Não é nada pra te dar

  (<c> G  Cm  G  Cm  G </c>)
  `
}

function renovaMe() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Renova-Me</h3>
  Tom: <c>Bb</c>
  Intro: <c>Bb Eb/Bb F/Bb Bb Eb/Bb Fsus F</c>
  
  <c>  Bb Eb/Bb   F/Bb    Bb  Eb       Cm7  </c>    
  Renova-me, Senhor Jesus,   Já não quero ser 
  <c>Fsus4  F</c>
  igual.
  <c>  Bb Eb/Bb   F/Bb    Bb  Eb       Cm7  </c>  
  Renova-me, Senhor Jesus,   Põe em mim Teu 
  <c>  Fsus4   F</c>
  coração.
  
  <c>        Bb      Dm7   Gm         Bb/F</c>
  Porque tudo que há,   dentro de  mim
  <c>Eb     Cm7        F7       F</c>
    Necessita ser mudado, Senhor
  <c>        Bb      F/A           Gm      Bb/F </c>
  Porque tudo que há, dentro do meu coração,
  <c>Cm7      F           Bb</c>
    Necessita  mais de Ti.

    ----- Muda Tom ---- 

  <c>  C   F/C     G/C    C   F        Dm7  </c>  
  Renova-me, Senhor Jesus,   Já não quero ser 
  <c>Gsus4  G</c>
  igual.
  <c>  C   F/C     G/C    C   F        Dm7   </c>
  Renova-me, Senhor Jesus,   Põe em mim Teu 
  <c>  Gsus4   G</c>
  coração.

  <c>       C        Em7   Am         C/G</c>
  Porque tudo que há,   dentro de  mim
  <c>F       Dm7      Gsus4     G </c>
    Necessita ser mudado, Senhor
  <c>       C        G/B           Am      C/G</c>
  Porque tudo que há, dentro do meu coração,
  <c>Dm7    Gsus4   G     C</c>
    Necessita  mais de Ti.

  
  Final:
  <c>Dm7    Gsus4   G     C     Bb C</c>
    Necessita  mais de Ti.
  `
}

function euMeRencoVocalLivre() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Eu Me Rendo (Vocal Livre)</h3>
  Tom: <c>C</c>
  [Intro] <c>C  G/B  Am7  F9</c></c>
          <c>C  G/B  Am7  F9</c></c>
  
  <c>C9             G/B                 Am7</c></c>
    A Ti eu vou clamar pois tudo vem de Ti
  <c>              F9</c></c>
  E tudo está em Ti
  <c>C9             G/B              Am7</c></c>
  Por Ti vou caminhar, Tu és a direção
  <c>            F9      C/E</c></c>
  O sol a me guiar
  <c>Dm7        G4   G</c></c>
  Tudo pode passar
  <c>    C9    Em7   F9      C/E</c></c>
  Teu amor jamais  me  deixará
  <c>Dm7           G4   G</c></c>
  Sempre há de existir
  <c>          C9    Em7     F9</c></c>
  Novo amanhã preparado pra mim
  
  <c>      C9            G/B</c></c>
  Eu me rendo aos Teus pés
  <c>        Am7                  F9</c></c>
  És tudo que eu preciso pra viver
  <c>        C9          G/B</c></c>
  Eu me lanço em Teus braços
  <c>        Am7         F9</c></c>
  Onde encontro meu refúgio
  <c>    C   Em7         F9</c></c>
  Jesus,        eis-me aqui!
  <c>    Am7/9   G         F9</c></c>
  Jesus,     eis-me aqui!
  
  <c>C9             G/B                 Am7</c></c>
    A Ti eu vou clamar pois tudo vem de Ti
  <c>              F9</c></c>
  E tudo está em Ti
  <c>C9             G/B              Am7</c></c>
  Por Ti vou caminhar, Tu és a direção
  <c>            F9      C/E</c></c>
  O sol a me guiar
  <c>Dm7        G4   G</c></c>
  Tudo pode passar
  <c>    C9    Em7   F9      C/E</c></c>
  Teu amor jamais  me  deixará
  <c>Dm7           G4   G</c></c>
  Sempre há de existir
  <c>          C9    Em7     F9</c></c>
  Novo amanhã preparado pra mim
  
  <c>        C9            G/B</c></c>
  Eu me rendo aos Teus pés
  <c>        Am7                  F9</c></c>
  És tudo que eu preciso pra viver
  <c>        C9          G/B</c></c>
  Eu me lanço em Teus braços
  <c>        Am7         F9</c>
  Onde encontro meu refúgio
  <c>    C   Em7         F9</c>
  Jesus,        eis-me aqui!
  <c>    Am7   G         F9        G</c>
  Jesus,     eis-me aqui!
  
  <c>  D9            A/C#</c>
  Eu me rendo aos Teus pés
  <c>        Bm7</c>
  És tudo qu---e eu precis----o
  <c>        D9          A/C#</c>
  Eu me lanço em Teus braços
  <c>        Bm7         G9</c>
  Onde encontro meu refúgio
  <c>    D   F#m         G9</c>
  Jesus,        eis-me aqui!
  <c>    Bm7   A         G9</c>
  Jesus,     eis-me aqui!
  `
}

function comoAgradecer() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Como Agradecer</h3>
  Tom: <c>Bb</c>
  1.
  <c>Bb         F/A    Fm/Ab      G       G7</c>
  Como agradecer a Jesus o que fez por mim?
  <c>Cm         Cm7+       Cº         Ebm</c>
  Sem eu merecer vem provar o Seu amor sem fim.
  <c>   B/F                   Gm            Eº        Ebm7+</c>
  As vozes de um milhão de anjos não poderiam expressar
  <c>      Bb/D    G7          G7/B Cm Bb/F      F6  F7</c>  
  A gratidão que vibra em meu ser,    pois tudo devo a 
  <c>Bb</c>
  Ti.
  
  <c>F Bb         Dm7 G7    Cm          Ebm F</c>
  A Deus seja a glória, a Deus seja a glória,
<c>F/Eb D7         D7/G Gm        Eº7      F4/7 F7</c>
  A  Deus seja a gló-ria, pelo que fez por mim!
  <c>        Bb       Dm7 G7        Cm          Ebm6 F</c>
  Com Seu sangue lavou-me, Seu poder transformou-me,
<c>F/Eb D          G4  Eº     Bb/F Eb/F   Bb</c>
  A  Deus seja a glória pelo que fez por mim!
  
  <c>          Am7     D7           Gm           Gm</c>
  Quero entregar, Senhor, a minha vida em Tuas mãos
  <c>        Eb        Gm           C2         F7</c>
  E quero dar meu louvor pela Tua eterna salvação.
  <c>        Bb      Dm7 G7        Cm          Ebm6 F</c>
  Com Seu sangue lavou-me, Seu poder transformou-me,
<c>F/Eb D           G4 Eº      Bb/F Eb/F     Bb</c>
  A  Deus seja a glória pelo que fez por mim!
  `
}

function vemMeMudar() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Vem Me Mudar</h3>
  Tom: <c>F</c>

  Intro: <c>Bb F  Gm Bb D# Bb Cm F4 F</c>
  
  <c>Bb        F          Gm</c>
  Eu já tomei a decisão
  <c>      Dm</c>
  De me entregar a Ti
  <c>D#       Bb       Cm    F</c>
  Já decidi recomeçar
  <c>Bb        F            Gm</c>
  Mas estou preso ao meu viver
  <c>          Dm          D#</c>
  Com tanta coisa pra fazer
  <c>        Bb</c>
  Já nem consigo mais
  <c>  Cm           F</c>
  Tempo pra Te ver
  <c>Gm              Dm</c>
  Eu queria ter um tempo
  <c>D#                  Bb</c>
  Conversar contigo a sós
  <c>Gm               Dm</c>
  Eu preciso desse tempo
  <c>D#               Bb        D#/G   F/A</c>
  Para ouvir a tua voz .....pausa
  
  <c>Bb            F              Gm</c>
  Sempre que eu paro pra pensar
  <c>        Dm</c>
  Me vem à sensação
  <c>D#         Bb               Cm     F</c>
  De que não vou mais conseguir
  <c>Bb        F                    Gm</c>
  Mas quando encontro o teu olhar

  
  <c>        Bb             D#</c>
  Sinto a esperança renascer
  <c>        Dm</c>
  Sinto a fé voltar
  <c>Cm               F        G    G/B</c>
  Sei que vou vencer!
  
  <c>C         G/B     Am        G</c>
  Me transforma, vem minha vida mudar!
  <c>C         G/B     Am         G      Am</c>
  Como eu quero ser diferente, Senhor!
  <c>            G         Am                 Dm</c>
  Aceita o grito de um coração...       sincero
  <c>G    </c>      
  Vem me mudar!

  <c>C      G/B    F9    G</c>
    
  <c>C             G/B          Am</c>
  Sempre que eu paro pra pensar
  <c>        G</c>
  Me vem à sensação
  <c>C/F          Am            F      G</c>
  De que não vou mais conseguir
  <c>C         G/B                    Am</c>
  Mas quando encontro o teu olhar
  <c>        G             C/F</c>
  Sinto a esperança renascer
  <c>        G/B</c>
  Sinto a fé voltar
  <c>C/F              G</c>
  Sei que vou vencer, vou vencer ...ra
  `
}

function oMelhorLugarDoMundo() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
    <h3>O Melhor Lugar do Mundo</h3>
    Tom: <c>A</c>

  [Intro] <c>E D F#m G D E</c>
          <c>A D/A A </c>

  <c>A          E              F#m    D</c>
  No mundo ainda existem belezas
  <c>                E                    A   D/A A</c>
  Que alegram a vida e nos fazem sonhar
  <c>            E            F#m   D</c>
  Recantos felizes da natureza
  <c>                    A/E                   E E A</c>
  Onde qualquer ser humano gostaria de estar
  
<c>A         E/G#       F#m F#m  D</c>
  Mas de todos os lugares
  <c>          E              A  Bm7 A/C# D</c>
  O mais bonito e inspirador
  <c>        E    F#m    E  D  Bm7            E  </c>     
  É onde fico     em oração     junto aos pés do 
  <c>        A</c>
  Salvador
  
  <c>A E/G# F#m            D          E            A </c> 
  O me  lhor lugar do mundo é aos pés do Salvador
  <c>E/G#</c>
  
  <c>  F#m             D           E              A</c>
  É ali onde a esperança trás alívio ao sofredor
  <c>  Bm                 E           A    A/C#    D</c>
  É ali onde eu me encontro com a fonte do  amor
  <c>      E           A/C#   D         E           A  </c>
  O melhor lugar do mundo    é aos pés do Salvador!
  <c>  A/C#    D</c>
  
  
  <c>A             E                  F#m   D</c>
  Sonhamos com casas que tenham conforto
  <c>                E                   A  D/A A</c>
  Talvez numa encosta com vista pro mar
  <c>            E                 F#m   D</c>
  Mas as maravilhas não fazem sentido
  <c>                A/E                 E E A</c>
  Se Cristo não está  em primeiro lugar
  
<c>A        E/G#         F#m F#m  D           E</c>
  Ao sentir a paz de Deus,       o seu poder e amor
  <c>      A    D</c>
    profundo
  <c>              E  F#m        D  Bm7         E  F#m</c>
  Eu posso estar      onde for,    estou feliz
  <c>            D           E                    A    A/G#</c>
  Por me encontrar no melhor       lugar   do mundo    
  
  <c>      F#m            D          E            A  </c>
  O melhor lugar do mundo é aos pés do Salvador
  <c>E/G#</c>
  
  <c>  F#m             D           E              A</c>
  É ali onde a esperança trás alívio ao sofredor
  <c>  Bm                 E           A    A/C#    D</c>
  É ali onde eu me encontro com a fonte do  amor
  <c>      E           A/C#   D         E              D/F# </c> 
  O melhor lugar do mundo    é aos pés do Salvador!dor!
  
  <c>    G               E/G#  E E/D   A/C#        D</c>
  É ali onde eu me encontro   com a fonte do amor
  <c>    E              A/C# D         E            A  Bm7</c>
  O melhor lugar do mundo    é aos pés do Salvador!
  `
}

function naoTardara() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Não Tardará</h3>
  Tom: <c>Gm</c>
  [Intro] <c>Gm7  Cm7  F  Bb Cm7 Bb/D</c>

  <c>Gm      Cm7 F       Eb/Bb    Bb   Dm</c>
  Não tardará,  Cristo irá voltar
  <c>Gm       Cm7 F             Bb  Cm7 Bb/D</c>
  Não tardará,  vamos para o lar

  <c>Gm      Cm7 F       Eb/Bb    Bb   Dm</c>
  Não tardará,  Cristo irá voltar
  <c>Gm       Cm7 F             Bb     Bb/D</c>
  Não tardará,  vamos para o lar

  <c>    Bb Bb/D      Eb  F</c>
  Eu quero me preparar
  <c>     F            Bb Cm7 Bb/D</c>
  Pois vamos logo subir
  <c>                  Eb</c>
  E quero junto a você
  <c>        Cm7  F</c>
  Lá no Céu
  <c>                Bb Cm7 Bb/D</c>
  Conversar com Jesus

  <c>Gm      Cm7 F       Eb/Bb    Bb   Dm</c>
  Não tardará,  Cristo irá voltar
  <c>Gm       Cm7 F             Bb     Bb/D</c>
  Não tardará,  vamos para o lar

  <c>    Bb Bb/D      Eb  F</c>
  Eu quero me preparar
  <c>     F            Bb Cm7 Bb/D</c>
  Pois vamos logo subir
  <c>                  Eb</c>
  E quero junto a você
  <c>        Cm7  F</c>
  Lá no Céu
  <c>                Bb Cm7 Bb/D</c>
  Conversar com Jesus

  <c>Gm      Cm7 F       Eb/Bb    Bb   Dm</c>
  Não tardará,  Cristo irá voltar
  <c>Gm       Cm7 F             Bb     Bb</c>
  Não tardará,  vamos para o lar
  `
}

function maranataAvivah() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Maranata Avivah</h3>
    Tom: <c>Cm</c>
    [Intro] <c>Cm  Ab Eb Bb</c>
    
    [Primeira Parte]
    
    <c>Cm                    Ab</c>
        Tu és a minha luz, a minha salvação
    <c>    Eb         Bb</c>
    E a Ti me renderei
    <c>Cm                     Ab</c>
      Se ao Teu lado estou, seguro em tuas mãos
    <c>   Eb        Bb</c>
    Eu nada temerei
    
    [Pré-Refrão]
    
    <c>Ab Bb Cm       Eb           Bb</c>
    Oh oh oh Tu és Santo oh Senhor
    <c>Ab Bb Cm        Eb          Bb</c>
    Oh oh oh, Tu és digno de louvor
    
    [Refrão]
    
    <c>Ab             Eb               Cm</c>
    Só em Ti confiarei, eu nada temerei
    <c>                Bb               </c>        
    Em frente eu irei, pois eu sei que vivo 
    <c>    Ab</c>
    estás
    <c>                Cm                    Eb</c>
    E um dia voltarás, do céu pra nos buscar
    <c>                  Bb    Ab</c>
    Pra sempre reinarás, aleluia
    
    [Solo]  <c>Cm  Ab Eb Bb</c>
            <c>Cm  Ab Eb Bb</c>
    
    [Primeira Parte]
    
    <c>Cm                    Ab</c>
        Tu és a minha luz, a minha salvação
    <c>    Eb         Bb</c>
    E a Ti me renderei
    <c>Cm                     Ab</c>
      Se ao Teu lado estou, seguro em tuas mãos
    <c>   Eb        Bb</c>
    Eu nada temerei
    
    [Pré-Refrão]
    
    <c>Ab Bb Cm       Eb           Bb</c>
    Oh oh oh Tu és Santo oh Senhor
    <c>Ab Bb Cm        Eb          Bb</c>
    Oh oh oh, Tu és digno de louvor
    
    [Refrão]
    
    <c>Ab             Eb               Cm</c>
    Só em Ti confiarei, eu nada temerei
    <c>                Bb                </c>       
    Em frente eu irei, pois eu sei que vivo 
    <c>  Ab</c>
    estás
    <c>                Cm                    Eb</c>
    E um dia voltarás, do céu pra nos buscar
    <c>                  Bb    Ab</c>
    Pra sempre reinarás, aleluia
    
    <c>Ab             Eb               Cm</c>
    Só em Ti confiarei, eu nada temerei
    <c>                Bb              </c>         
    Em frente eu irei, pois eu sei que vivo 
    <c>  Ab</c>
    estás
    <c>              Cm                     Eb</c>
    E um dia voltarás, do céu pra nos buscar
    <c>                  Bb    Ab</c>
    Pra sempre reinarás, aleluia
    
    [Solo] <c>Cm  Eb Bb Ab</c>
           <c>Cm  Eb Bb Ab</c>
    
    [Ponte]
    
    <c>Eb   </c> 
    Oh oh oh
        
    Oh oh oh
    <c>          Bb</c>
    Oh oh oh  oh
    
    <c>      Eb         Ab</c>
    Vem Jesus, vem Jesus
    <c>    Eb                      Bb</c>
    Maranata, ora vem Senhor Jesus
    <c>      Eb         Ab</c>
    Vem Jesus, vem Jesus
    <c>    Eb                     Bb</c>
    Maranata, ora vem Senhor Jesus
    <c>      Eb         Ab</c>
    Vem Jesus, vem Jesus
    <c>    Eb                     Bb</c>
    Maranata, ora vem Senhor Jesus
    <c>      Eb         Ab</c>
    Vem Jesus, vem Jesus
    <c>    Eb                     Bb    Eb</c>
    Maranata, ora vem Senhor Jesus

    <c>Ab             Eb               Cm</c>
    Só em Ti confiarei, eu nada temerei
    <c>                Bb                </c>       
    Em frente eu irei, pois eu sei que vivo 
    <c>  Ab</c>
    estás
    <c>                Cm                    Eb</c>
    E um dia voltarás, do céu pra nos buscar
    <c>                  Bb    Ab</c>
    Pra sempre reinarás, aleluia

    <c>Ab             Eb               Cm</c>
    Só em Ti confiarei, eu nada temerei
    <c>                Bb              </c>         
    Em frente eu irei, pois eu sei que vivo 
    <c>  Ab</c>
    estás
    <c>              Cm                     Eb</c>
    E um dia voltarás, do céu pra nos buscar
    <c>                  Bb     Ab Eb Bb Ab</c>
    Pra sempre reinarás, aleluia

  `
}

function vereiJesus() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Verei Jesus</h3>
  Tom: <c>E</c>

  Intro 2x:  <c>C#m  A   B  G#m7   A  C#m   B</c>
  
  <c>C#m          A              G#m  B</c>
     Almejo o dia em que verei,
  <c>C#m        A             E</c>
     Uma pequena luz no céu
  <c>C#m          A         G#m  B</c>
     E essa luz aumentará,
  <c>C#m             A            Bsus</c>
     Milhares de anjos surgirão.
  
  <c>            E            B</c>
  Eu creio sim que Ele virá,
  <c>              C#m              A</c>
  E muito em bre____ve eu subirei
  <c>                E/G#             B</c>
  Pra um novo lar,      um novo céu
  <c>                A</c>
  Pra sempre eu estarei,
  <c>           Bsus                 C#m  A   B </c>
  Feliz eu vi__verei.  Verei Jesus
  <c> G#m7   A  C#m   B</c>
  
  
  <c>C#m           A          G#m  B</c>
     A voz de Deus irá soar,
  <c>C#m            A          E</c>
     Nas nuvens Sua Glória surgirá
  <c>C#m            A              G#m  B</c>
     Mil gerações se encontrarão
  <c>C#m          A           Bsus</c>
     E para sempre louvarão.
  
  <c>            E            B</c>
  Eu creio sim que Ele virá,
  <c>              C#m              A</c>
  E muito em bre____ve eu subirei
  <c>                E/G#             B</c>
  Pra um novo lar,      um novo céu
  <c>                A</c>
  Pra sempre eu estarei,
  <c>           Bsus                 A   A</c>
  Feliz eu vi__verei.  Verei Jesus
  
  <c>            F           C/F</c>
  Eu creio sim que Ele virá,
  <c>              Dm             Bb/D</c>
  E muito em bre__ve eu subirei
  <c>                F/A             C</c>
  Pra um novo lar,     um novo céu
  <c>                Bb</c>
  Pra sempre eu es__tarei,
  <c>           Csus  </c>   
  Feliz eu vi__verei.
  
  <c>            F           C</c>
  Eu creio sim que Ele virá,
  <c>              Dm             Bb</c>
  E muito em bre__ve eu subirei
  <c>                F/A             C</c>
  Pra um novo lar,     um novo céu
  <c>                Bb</c>
  Pra sempre eu es__tarei,
  <c>           Csus </c>    
  Feliz eu vi__verei.
  <c>           Dm   Bb   C   Am7    Bb   Dm   C</c>
  Verei Jesus
  `
}

function muitoAlemDoSol551() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>

  <h3>Muito Além do Sol</h3>
  Tom: <c>D</c>
  

  <c>D          G/D D             G/D D</c>
  Eu aqui no mundo não tenho riquezas,
  <c>        G/D D  F#m/A                 D</c>
  Mas sei que na  glória, eu terei mansão.
  <c>D              G/D D              G/D D</c>
  Com minh' alma triste, em meio à pobreza,
  <c>        G/D D F#m/A               D</c>
  De mim, Jesus  Cristo teve compaixão.

  [Refrão]

  <c>              G                  D</c>
  Muito além do Sol, muito além do Sol.
  <c>  A         A     Em/A7   D/A         A7  </c>
  Está o meu lar, um belo lugar, muito além 
  <c>  D</c>
  do Sol.
  <c>              G                  D</c>
  Muito além do Sol, muito além do Sol.
  <c>  A               Em/A7   D/A         A7  </c>
  Está o meu lar, um belo lugar, muito além 
  <c>  D</c>
  do Sol.

  <c>D          G/D D             G/D D</c>
  Assim pelo mundo, eu vou caminhando;
  <c>      G/D D F#m/A                D</c>
  Enfrentando  lutas, prova e tentação.
  <c>D              G/D D              G/D D</c>
  Mas, Jesus Meu Mestre, que me fortalece,
  <c>      G/D D    F#m/A             D</c>
  Vai levar-me a  salvo à real mansão.

  <c>D             G/D D               G/D D</c>
  Vinde, vós,cansados deste mundo escuro,
  <c>      G/D D  F#m/A             D</c>
  Cristo vos con cede plena salvação;
  <c>D          G/D D               G/D D</c>
  E também morada, feita não por homens,
  <c>    G/D D F#m/A                 D</c>
  Quer ofere  cer-vos na eternal Sião.
  `
}

function porqueEleVive() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Porque Ele Vive "Versão Barra Vocal Band"</h3>
  Tom: <c>A</c>

  [Intro] <c>A E A </c> 

  <c>         A             D    Bm</c>
  Deus enviou Seu Filho amado
  <c>         A F#m           Bm   E</c>
  Para sofrer   em meu lugar
  <c>   E       A             D        Bm</c>
  Na cruz morreu mas vivo agora está
  <c>           E          E          A  </c> 
  Pois ressurgiu e para sempre viverá

  <c>           A                   D  </c>    
  Porque Ele vive, posso crer no amanhã
  <c>           E D C#          Bm E</c>
  Porque Ele vive, temor não há
  <c>E          A                 D         Bm</c>
  Eu sei que min-ha vida não será mais vã
  <c>Bm         E            E            A  </c>
  Pois meu futuro em Suas mãos agora está

  <c>           A             D    Bm</c>
  Quão grato é viver com Cristo
  <c>        A F#m           Bm   E</c>
  E desfrutar   Seu doce amor
  <c>  E       A          D        Bm</c>
  E certo estar de Sua proteção
  <c>         E             E            A </c>
  Nos dias calmos ou nas horas de aflição

  <c>           A                   D  </c>    
  Porque Ele vive, posso crer no amanhã
  <c>           E D C#          Bm E</c>
  Porque Ele vive, temor não há
  <c>E          A                 D         Bm</c>
  Eu sei que min-ha vida não será mais vã
  <c>Bm         E            E            A </c> 
  Pois meu futuro em Suas mãos agora está

  <c>            A             D    Bm</c>
  E quando, enfim, chegar a hora
  <c>           A F#m        Bm   E</c>
  De aqui cessar  o meu viver
  <c> E       A          D        Bm</c>
  Não temerei, pois Cristo vivo está
  <c>         E               E         A </c>
  E eu viverei, pois, vida nova me dará

  <c>           A                   D  </c>    
  Porque Ele vive, posso crer no amanhã
  <c>           E D C#          Bm E</c>
  Porque Ele vive, temor não há
  <c>E          A                 D         Bm</c>
  Eu sei que min-ha vida não será mais vã
  <c>Bm         E            E            A  </c>
  Pois meu futuro em Suas mãos agora está
  `
}

function esconderijo() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Esconderijo</h3>
  Tom: <c>A</c>
  [Intro]  <c>A9  D9  A9  D9</c>
  
  <c>            A9                   Bm7</c>
  Aquele que habita no esconderijo do 
  Altíssimo
  <c>      C#m7              D9</c>
  E descansa à sombra do Onipotente
  <c>            A9                  Bm7</c>
  Aquele que habita no esconderijo do 
  Altíssimo
  <c>      C#m7              D9</c>
  E descansa à sombra do Onipotente
  <c>                A9</c>
  Diz ao Senhor
  
  <c>A9           E       F°</c>
    Meu refúgio, fortaleza
  <c>  F#m     F#m/E   D         E</c>
  O Deus em quem eu sempre confio
  <c>A9           E       F°             F#m  </c> 
    Nenhum laço, nem veneno ou flecha, vão  
  <c>F#m/E   D</c>
  me  atingir
  <c>             E        A9  D9  A9  D9</c>
  Pois eu me escondo em Ti
  
  <c>             A9</c>
  E Tu me cobrirás com Tuas penas
  <c>         Bm7            C#m7</c>
  Sob Tuas asas estarei seguro
  <c>            D9</c>
  A Tua fidelidade é meu escudo
  <c>             A9</c>
  E Tu me cobrirás com Tuas penas
  <c>         Bm7            C#m7</c>
  Sob Tuas asas estarei seguro
  <c>            D9</c>
  A Tua fidelidade é meu escudo
  
  <c>A9           E       F°</c>
    Meu refúgio, fortaleza
  <c>  F#m     F#m/E   D         E</c>
  O Deus em quem eu sempre confio
  <c>A9           E       F°             F#m  </c> 
    Nenhum laço, nem veneno ou flecha, vão  
  <c>F#m/E   D</c>
  me  atingir
  <c>             E </c>       
  Pois eu me escondo em Ti
  
  <c>    F#m               F#m/E</c>
  Mil podem cair ao meu lado
  <c>                    D9</c>
  E dez mil à minha direita
  <c>        E</c>
  Pelo Senhor ficarei em pé
  <c>    F#m             F#m/E</c>
  E praga nenhuma nem mal
  <c>                 D9</c>
  Chegarão à minha tenda
  <c>         E</c>
  O meu Senhor é minha salvação
  
  <c>A9           E       F°</c>
    Meu refúgio, fortaleza
  <c>  F#m     F#m/E   D         E</c>
  O Deus em quem eu sempre confio
  <c>A9           E       F°             F#m   </c>
    Nenhum laço, nem veneno ou flecha, vão  
  <c>F#m/E   D</c>
  me  atingir
  <c>             E  </c>      
  Pois eu me escondo em Ti

  <c>A9           E       F°</c>
    Meu refúgio, fortaleza
  <c>  F#m     F#m/E   D         E</c>
  O Deus em quem eu sempre confio
  <c>A9           E       F°             F#m  </c> 
    Nenhum laço, nem veneno ou flecha, vão  
  <c>F#m/E   D</c>
  me  atingir
  <c>             E        A9  D9  A9</c>
  Pois eu me escondo em Ti
  `
}

function dignoDeLouvor() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
    <pre>
    <h3>Digno de Louvor</h3>
  Tom: <c>Bb</c>

  [Intro] <c>Cm Ab7M Eb/G </c>
          <c>Fm Eb/G Ab9</c>
  
  <c>    Cm                 Cm</c>
  De eternidade em eternidade
  <c>    Ab7M                Eb/G</c>
  Exaltado seja em tua beleza
  <c>            Fm  Fm Eb/G        Ab9  Ab7M(9)</c>
  Digno de louvor,   digno de louvor

  <c>    Cm                 Cm</c>
  De eternidade em eternidade
  <c>    Ab7M                Eb/G</c>
  Exaltado seja em tua beleza
  <c>            Fm  Fm Eb/G        Ab9  Ab7M(9)</c>
  Digno de louvor,   digno de louvor

  <c>    Cm                 Cm</c>
  De eternidade em eternidade
  <c>    Ab7M                Eb/G</c>
  Exaltado seja em tua beleza
  <c>            Fm  Fm Eb/G        Ab9  Ab7M(9)</c>
  Digno de louvor,   digno de louvor
  
<c>Bb                  Cm                    Ab Ab</c>
  Diante de tua face, o que me resta fazer
<c>Bb                  Cm      </c>           
  Voltar ao pó da terra e a tua glória 
  <c>      Ab Ab</c>
  temer
  
  <c>    Cm                 Cm</c>
  De eternidade em eternidade
  <c>    Ab7M                Eb/G</c>
  Exaltado seja em tua beleza
  <c>            Fm  Fm Eb/G        Ab9  Ab7M(9)</c>
  Digno de louvor,   digno de louvor
  
<c>Bb                  Cm                    Ab Ab</c>
  Diante de tua face, o que me resta fazer
<c>Bb                  Cm              </c>   
  Voltar ao pó da terra e a tua glória 
  <c>      Ab Ab</c>
  temer
  
  <c>    Cm                 Cm</c>
  De eternidade em eternidade
  <c>    Ab7M                Eb/G</c>
  Exaltado seja em tua beleza
  <c>            Fm  Fm Eb/G        Ab9  Ab7M(9)</c>
  Digno de louvor,   digno de louvor
  
  <c>    Cm                 Cm/Bb</c>
  De eternidade em eternidade
  <c>    Ab                 Eb/G</c>
  Exaltado seja em tua beleza
  <c>            Fm  Eb             Db6(9)  Db6(9)</c>
  Digno de louvor,   digno de louvor
  `
}

function naoDesistir150() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <h3>Não Desistir 150</h3>
  <pre>
  Tom: <c>C</c>
  <c>G    C       G</c>
  Dias há, bem sei
  <c>      C      C/E F</c>
  Em que triste te  sentes
  <c>    C       Am          D   G</c>
  Sem ter esperança e prazer
  <c>    C        G7          C      F</c>
  Mas existe alguém que promete ajudar-te
  <c>  C/G      G7       F C/E Dm7 C</c>
  E forças à alma trazer

  <c>G        C  Dm7 C/E F          C     G/B</c>
  Não desistir,       Cristo vem logo,
  <c>G       Am   D7        G</c>
  Breve aurora há de rai ar!
  <c>G        C  Dm7 C/E F          C      F</c>
  Não desistir,       Cristo vem logo,
  <c>        C/G  F/G C/G G   F C/E Dm7 C</c>
  Não desistir, e---le  vi-rá!

  <c>G     C         G</c>
  Este mundo, eu sei
  <c>        C     C/E  F</c>
  Já não vai mui-to  longe
  <c>    C          Am       D    G</c>
  E o mal vai em breve findar
  <c>      C      G           C        F</c>
  Minha fé em Deus sim, está bem firmada
  <c>  C/G      G7        F C/E Dm7 C</c>
  Jesus logo vai regressar
  `
}

function tomaMeuCoracao() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Toma Meu Coração</h3>

  Tom: <c>C</c>
  [Intro] <c>G  Em  C9  C/D</c>
        <c>G  Em  C9  D4  D</c>

  <c>G            Em       C9    G     D4  D</c>
  Este é meu desejo: Senhor, Te honrar
  <c>Em       D/F#   G          F   D4  D</c>
  Com meu cora---ção, Te adorar
  <c>G                 Em    C9  G  D4  D</c>
  Tudo o que há em mim Te dá louvor
  <c>Em      D/F#    G             F    D4  D</c>
  Só a Ti  a-----doro, meu Senhor

  [Refrão]

  <c>G                G/F#</c>
  Toma o meu coração
  <c>                Am7</c>
  E toda a minha alma
  <c>    C   Dsus      G</c>
  Eu vivo só  pra Ti
  <c>                   G/F#</c>
  Sempre que eu respirar
  <c>                D/F#  Am7</c>
  Cada vez que eu acordar
  <c>        C     Dsus4   G</c>
  Faz o Teu querer em mim

  ( <c>G  Em  C9  Dsus4</c> )

  <c>G            Em       C9    G     D4  D</c>
  Este é meu desejo: Senhor, Te honrar
  <c>Em        D/F#  G          F   D4  D</c>
  Com meu co-ra--ção, Te adorar
  <c>G                 Em    C9  G  D4  D</c>
  Tudo o que há em mim Te dá louvor
  <c>Em        D/F#  G           F    Dsus4</c>
  Só a Ti  a--do--ro, meu Senhor

  [Refrão]

  <c>G                G/F#</c>
  Toma o meu coração
  <c>                Am7</c>
  E toda a minha alma
  <c>    C   Dsus      G</c>
  Eu vivo só  pra Ti
  <c>                   G/F#</c>
  Sempre que eu respirar
  <c>                D/F#  Am7</c>
  Cada vez que eu acordar
  <c>        C     Dsus4   G</c>
  Faz o Teu querer em mim
  `
}

function meuPastorMedley() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Meu Pastor</h3>
  Tom: <c>C</c>
  [Intro]
  <c>F7+  C  Am  G</c>
  <c>F7+  C  Am  G</c>

  (piano marcando e riffs de guitarra)

  <c>            F       C   G    Am</c>
  Contigo eu ando em seguran - ça
  <c>         F      C      G</c>
  De mim afastas todo o mal
  <c>         F     C     E7   Am</c>
  Eu sou ovelha que preci - sa
  <c>       F   F/G    C</c>
  Do cuidado do pastor  

  <c>           F</c>
  E se eu andar pelo vale da sombra da morte
  <c>Am7                             C</c>
    Pelo vale da sombra da morte
  <c>                  G</c>
  Eu mal algum temerei
  <c>                    F</c>
  Pois sei que onde quer que eu for
  <c>                      Am7</c>
  Tua bondade me seguirá
  <c>                               C</c>
  Onde for tua bondade me seguirá
  <c>                    G</c>
  De bênçãos me cercarás

  <c>        F      C        G    Am</c>
  Meu pastor me leva a lugares altos
  <c>         F     C     G</c>
  De água limpa pra beber
  <c>      F      C          E7    Am</c>
  E em pastos verdes vou descansar
  <c>        F    C     G</c>
  E a jornada continuar
          (<c> F7+  C  Am  G </c>)
  Com Ele!

  (<c> F7+  C  Am  G </c>)

  <c>            F       C   G    Am</c>
  Contigo eu ando em seguran - ça
  <c>         F      C      G</c>
  De mim afastas todo o mal
  <c>         F     C     E7   Am</c>
  Eu sou ovelha que preci - sa
  <c>       F   F/G    C</c>
  Do cuidado do pastor

  <c>           F</c>
  E se eu andar pelo vale da sombra da morte
  <c>Am7                             C</c>
    Pelo vale da sombra da morte
  <c>                  G</c>
  Eu mal algum temerei
  <c>                    F</c>
  Pois sei que onde quer que eu for
  <c>                      Am7</c>
  Tua bondade me seguirá
  <c>                               C</c>
  Onde for tua bondade me seguirá
  <c>                    G</c>
  De bênçãos me cercarás

  <c>        F      C        G    Am</c>
  Meu pastor me leva a lugares altos
  <c>         F     C     G</c>
  De água limpa pra beber
  <c>      F      C          E7    Am</c>
  E em pastos verdes vou descansar
  <c>        F    C     G</c>
  E a jornada continuar

  <c>           F</c>
  E se eu andar pelo vale da sombra da morte
  <c>Am7                             C</c>
    Pelo vale da sombra da morte
  <c>                  G</c>
  Eu mal algum temerei
  <c>                    F</c>
  Pois sei que onde quer que eu for
  <c>                      Am7</c>
  Tua bondade me seguirá
  <c>                               C</c>
  Onde for tua bondade me seguirá
  <c>                    G</c>
  De bênçãos me cercarás

  <c>        F      C        G    Am</c>
  Meu pastor me leva a lugares altos
  <c>         F     C     G</c>
  De água limpa pra beber
  <c>      F      C          E7    Am</c>
  E em pastos verdes vou descansar
  <c>        F    C     G</c>
  E a jornada continuar

  <c>        F      C        G    Am</c>
  Meu pastor me leva a lugares altos
  <c>         F     C     G</c>
  De água limpa pra beber
  <c>      F      C          E7    Am</c>
  E em pastos verdes vou descansar
  <c>        F    C     G</c>
  E a jornada continuar
          (<c> F7+  C  Am  G </c>)
  Com Ele!

  [Final]
  <c>  F7+  C   Am  G  C</c>

  <hr/>

  HASD237 <c>F7M C Am G</c>
  <c>C  Dbº           G7/D</c>
  Eu sei que há per-feita paz
  <c>G       G7        C</c>
  Junto ao bondoso Deus.
  <c>C   Dbº         G7/D</c>
  Não há temor nem obras más,
  <c>G    C/G    G      C</c>
  Junto ao bondo--so Deus.

  Coro:

  <c>   F            F/C C</c>
  Jesus, Senhor, meu Mestre,
  <c>Em/G    G7          C</c>
  Pão que desceu dos Céus,
  <c>  F     F9 F  C</c>
  Segura-me bem perto
  <c>G7  Em/G  G7   C</c>
  Do coração de Deus.
  `
}

function euPertencoALuz() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <h3>Eu Pertenço A Luz</h3>
  <pre>
  Tom: <c>C</c>
  [Intro] <c>C  F  C/E  C</c>
          <c>C  F  C/E  C</c>
          <c>C  F  C/E  C</c>

  <c>  C</c>
  Liberto das trevas eu se-rei
  <c>    Am</c>
  Não mais as derrotas eu ter-ei
  <c>    F                              C</c>
  Não mais sentirei, vergonha do meu eu
  <c>  C</c>
  Liberto da morte e do pe-car
  <c>    Am</c>
  Das dores da minha escra-vi-dão
  <c>  F                              C</c>
  Liberto eu serei, por meio de Jesus

  <c>               F    F   G  F/A  G/B  C</c>
  Eu pertenço a luz; Luz que vem  do   meu 
  Jesus
  <c>                   F    F   G    F/A   G/B </c>
  Com seu sangue na cruz; Não mais noi - te  
  <c> C</c>
  eu verei
  <c>                 Am               F  </c>    
  Para o céu eu irei; Eu liberto serei...  
  <c>F</c>
  Sim!
  <c>               F   C/F  F  C/F</c>
  Eu pertenço a luz

  <c>  C</c>
  Liberto das trevas eu se-rei
  <c>    Am</c>
  Não mais as derrotas eu ter-ei
  <c>    F                              C</c>
  Não mais sentirei, vergonha do meu eu
  <c>  C</c>
  Liberto da morte e do pe-car
  <c>    Am</c>
  Das dores da minha escra-vi-dão
  <c>  F                             C</c>
  Liberto eu serei, por meio de Jesus

  <c>               F    F   G  F/A  G/B  C</c>
  Eu pertenço a luz; Luz que vem  do   meu 
  Jesus
  <c>                   F    F   G    F/A   G/B </c>
  Com seu sangue na cruz; Não mais noi - te  
  <c> C</c>
  eu verei
  <c>                 Am               F   </c>   
  Para o céu eu irei; Eu liberto serei...  
  <c>F</c>
  Sim!
  <c>               F    Am G F  Am G</c>
  Eu pertenço a luz

  <c>              F                 Am G</c>
  Eu pertenço a luz (Sou de Jesus)
  <c>               F                Am G</c>
  Eu pertenço a luz (Sou de Jesus)
  <c>              F                 Am G</c>
  Eu pertenço a luz (Sou de Jesus)
  <c>               F</c>
  Eu pertenço a luz

  <c>               F    F   G  F/A  G/B  C</c>
  Eu pertenço a luz; Luz que vem  do   meu 
  Jesus
  <c>                   F    F   G    F/A   G/B </c>
  Com seu sangue na cruz; Não mais noi - te  
  <c> C</c>
  eu verei
  <c>                 Am               F   </c>   
  Para o céu eu irei; Eu liberto serei...  
  <c>F</c>
  Sim!
  <c>               F    F  F  F C C</c>
  Eu pertenço a luz
  `
}

function luzBenditaLuzGloriosa227() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
    <h3>Luz Bendita, Luz Gloriosa 227</h3>
    Tom: <c>G</c>

    1.
    <c>G            C             G</c>
    Que bendita, que gloriosa luz,
    <c>     G/D           G</c>
    A minh'alma vem encher!
    <c>       G       C              G</c>
    Mais intensa e bela que a do Sol:
    <c>        D/A          D</c>
    Veio em mim Jesus viver!

    Coro:
    <c>       G     C      G</c>
    Luz bendita, luz gloriosa
    <c>   Am/G          D7/F# G    D</c>
    Concedida lá dos al    tos Céus!
    <c>D/F# G      C          G</c>
    Só o crente goza esta luz,
    <c>     D/A     D       G</c>
    Esta Luz que vem de Deus.

    2.
    <c>G             C            G</c>
    Sempre canta alegre seu louvor
    <c>        G/D            G</c>
    Quem possui a luz dos Céus;
    <c>      G     C          G</c>
    Goza afável e celeste paz,
    <c>      D/A          D</c>
    Dom gracioso só de Deus.

    3.
    <c>G            C          G</c>
    Vida nova em santa retidão
    <c>       G/D           G</c>
    Têm os crentes em Jesus.
    <c>        G     C             G</c>
    Quem de perto segue o Salvador,
    <c>     D/A          D</c>
    DEle tem poder e luz.

    4.
    <c>G          C            G</c>
    Esperança, vida e salvação
    <c>       G/D         G</c>
    Hás de ter, ó pecador,
    <c>     G     C             G</c>
    Aceitando Cristo, nossa luz,
    <c>     D/A             D</c>
    Este dom do Deus de amor!
  `
}

function reiDosReis73() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <h3>Rei dos Reis 73</h3>
  <pre>
  Tom: <c>G</c>
  [Intro] 

  <c>G                   Am7 G/B C</c>
  Rei dos reis! Deus, cri  a  dor do Céu!
  <c>G/B D    G        Em                 Am/D  D</c>
  Honra e glória ao Deus infinito em poder!
  <c>G               Am7 G/B C           E7/B Am</c>
  Terra e Céu, cantai ao  grande Rei
  <c>          G/D          Am/D   D7      </c>                      
  Deus criador, Deus redentor, Deus, Rei dos 
  <c>G</c>
  reis!

  <c>  Em6 D                        G</c>
  A do rai, glorificai o nome de Cristo!
  <c>  Em6 D                F#º/C       B  B/D# Em D7/F#</c>
  E xal tai, magnificai Jesus, o Senhor!
  <c>G               Am7 G/B C         E7/B Am </c>
  Terra e Céu, cantai louvor a Deus!
  <c>        G/D         D7             G</c>
  Ele morreu! Ele venceu! É Rei dos reis!
  `
}

function nosBracosDeJesus() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
    <h3>   Nos Braços De Jesus</h3>
    Tom: <c>D</c>
    
<c>G/A        D        Bm</c>
    Hoje aqui meu Jesus
    <c>      Em         Asus</c>
    me tomou em seus braços
    <c>G/B A/C# D       Bm       Em     Asus A  A/G</c>
    E   senti    o calor do Espírito Santo
    <c>       D/F#           G</c>
    Vou em paz pois o meu Deus
    <c>       D/F#        G</c>
    Ao meu lado vai ficar
    <c>     Bm7       Em        Em/A A7</c>
    E em breve sua face eu verei
    <c>       D  Bm  Em  Asus</c>
    Lá no céu
    
    <c>A      D         Bm</c>
    Hoje aqui meu Jesus
    <c>      Em          Asus</c>
    Me tomou em seus braços
    <c>A     D     Bm       Em     Asus  A</c>
    E senti o calor do Espírito Santo
    <c>        D/F#            G</c>
    Vou em paz pois o meu Deus
    <c>        D/F#        G</c>
    Ao meu lado vai ficar
    <c>      F#m       Bm        Em</c>
    E em breve sua face eu verei
    <c>G/A  A      D  </c>
        lá no céu

    (Sobe tom: <c>E</c>)
    
  <c>A/C#  A/B     E        C#m</c>
        Hoje aqui meu Jesus
    <c>      F#m         Bsus</c>
    Me tomou em seus braços
    <c>C#m B7/D# E      C#m      F#m    Bsus   B/A</c>
    E    senti   o calor do Espírito Santo
    <c>       E/G#            A</c>
    Vou em paz pois o meu Deus
    <c>       E/G#        A</c>
    Ao meu lado vai ficar
    <c>     C#m       F#m7      Bsus</c>
    E em breve sua face eu verei
    <c>           E  C#m  F#m  Bsus  E</c>
        lá no céu
  `
}

function ouveAMinhaOracao() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Ouve A Minha Oração</h3>
  Tom: <c>C</c>

  <c>      C</c>
  Eu Te peço Senhor
  <c>       F</c>
  Ouve a minha'oração
  <c>    Dm7           G7</c>
  De joelhos estou
  <c>    F/A  G/B     C</c>
  Buscando seu perdão
  <c>Am        Em/G </c>
  Grato eu sou
  <c>      F                C   G/B</c>
  Pelas bençãos que me daz
  <c>Am       Em     </c>   
  De coração 
  <c>     F            C/G </c>
  Me coloco em Teu altar
  <c>Dm7          G7      C</c>
  Faz em mim o Teu querer
  `
}

function naoDesanimamos() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Não Desanimamos</h3>
  Tom: <c>E</c>
  Se o Senhor mandar seguir
  Seja feito até o fim
  Jogo a rede ou vou pregar
  Em terra firme ou alto-mar
  
  [Intro] <c>C#m  A9  E9  B9</c>
          <c>C#m  A9  E9  B9</c>
  
  <c>C#m</c>
  Não, ninguém conseguiu
  <c>A9</c>
  e nem conseguirá
  <c>    E9</c>
  Não cabe em mim, em dois
  
  ou três mundos,
  <c>B9</c>
  infinito e singular
  <c>    C#m</c>
  Não dá pra aprisionar
  <c>    A9</c>
  a palavra tem a força que
  <c>    E9</c>
  em sua excelência
  <c>              B9</c>
  É seguridade àquele que a permitir
  <c>C#m                 A9</c>
  Cristo, não consigo ver,
  <c>              E9</c>
  mais além que isso,
  <c>            B9</c>
  nego-me a ceder
  <c>              C#m               A9</c>
  Sei que a Tua graça é maior que eu
  <c>          E9                B9</c>
  Vida desmedida e ilimitada deu
  
  (<c> C#m  A9  E9  B9 </c>)
  (<c> C#m  A9  E9  B9 </c>)
  (<c> C#m  A9  E9  B9 </c>)
  (<c> C#m  A9  E9  B9 </c>)
  
  <c>C#m</c>
  Eles pensaram que
  <c>    A9</c>
  me fariam recuar
  <c>  E9</c>
  A glória é pesada e a tribulação
  <c>    B9</c>
    é leve e já vai passar
  <c>C#m</c>
  Tudo o que acontece a mim
  <c>A9</c>
  fará com que o meu Senhor
  <c>  E9</c>
  Seja conhecido, mais vale Tua vida
  <c>    B9</c>
  em mim do que a minha dor
  <c>C#m                  A9</c>
  Cristo, não consigo ver
  <c>              E9             B9</c>
  mais além que isso nego-me a ceder
  <c>              C#m               A9</c>
  Sei que a Tua graça é maior que eu
  <c>          E9                B9</c>
  Vida desmedida e ilimitada deu
  
  (<c> C#m  A9  E9  B9 </c>)
  (<c> C#m  A9  E9  B9 </c>)
  (<c> C#m  A9  E9  B9 </c>)
  
  <c>A9</c>
  Somos abatidos
  <c>E</c>
  mas não destruídos
  <c>  B9                   C#m</c>
  Ainda há boa obra, eu sei
  <c>A9                E</c>
  Seu amor é o primeiro e o
  <c>      B9</c>
  último em tudo que farei
  <c>A9</c>
  Somos perseguidos
  <c>E</c>
  mas não desamparados
  <c>  B9               C#m</c>
  Glorio-me na Sua cruz
  <c>A9                E</c>
  Esperança irrompe no
  <c>            B  B4  B</c>
    sangue de Jesus
  
  (Não consigo ver)
  
  <c>C#m                 A9</c>
  Cristo, não consigo ver
  <c>              E9                B9</c>
  mais além que isso nego-me a ceder
  <c>              C#m                A9</c>
  Sei que a Tua graça é maior que eu
  <c>          E9                B9</c>
  Vida desmedida e ilimitada deu
  <c>                C#m                 A9</c>
  Meu senhor, não dava pra alguém prever
  <c>            E9                 B9</c>
  O inocente morre pro culpado ter
  <c>          A9                E9</c>
  Vida verdadeira, infinito amor
  <c>          C#m7              B9</c>
  Ver a tua face é o maior favor
  
  (<c> C#m  A9  E9  B9 </c>)
  (<c> C#m  A9  E9  B9 </c>)
  (<c> C#m  A9  E9  B9 </c>)
  (<c> C#m  A9  E9 </c>)
  `
}

function voltoPraTeAgradecer() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Volto Pra Te Agradecer</h3>
  Tom: <c>C</c>
  [Intro]   <c>F F   Bb C</c>
          <c>C F F   Bb C</c>
  
  <c>            F                    Bb  Csus</c>
  Não tenho nem palavras para te agradecer
  <c>    C   F                      Bb  Csus</c>
  Tudo mudou no dia em que eu te encontrei
  <c>  C    Dm         Am7         Eb</c>
  E no caminho percebi a cura, então, voltei
  <c>          F  F       Bb C</c>
  E agradecer vou, vou
  <c>    C     F   F      Bb C</c>
  E agradecer vou, vou
  
  <c>          F      F               Bb    Csus</c>
  Mesmo que nove achem tua bênção tão normal
  <c>      C      F                          Bb   Csus</c>
  Em teus olhos encontrei amor que é sobrenatural
  <c>   C      Dm         Am7           Eb   </c>           
  Sou estrangeiro, mas aqui estou pra te render 
  <c>         F  F       Bb C</c>
  o meu louvor
  <c>  C      F   F      Bb C</c>
  O meu louvor
  
  <c>      F         Bb </c>
  Sou amado, sou amado
  <c>        Dm   Am7    Csus           Csus</c>
  Em teus braços  juntaste os meus pedaços
  <c>      F          Bb </c>
  Sou amado, sou amado
  <c>        Dm   Am7   Gm7        Csus</c>
  Em teus braços me deste novos passos
  
  <c>  F                  Bb</c>
  Volto pra te agradecer
  <c>                    Dm</c>
  Volto pra te agradecer
  <c>                    Csus</c>
  Volto pra te agradecer
  `
}

function lampadaParaOsMeusPes() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Lâmpada Paras Os Meus Pés</h3>
  Tom: <c>G</c>
  [Intro] <c>G  D/F#  Em7  C</c>
          <c>G  D/F#  Em7  C</c>
          <c>G  D/F#  Em7  C</c>
          <c>G  D/F#  Em7  C</c>
  
  <c>Am7                    D9</c>
      Desvenda os meus olhos
  <c>                        Am7                     D9</c>
  Pra que eu possa contemplar as maravilhas de Tua lei
  <c>Am7              D9           Am7               D9</c>
      Como são felizes os que seguem os Teus mandamentos
  <c>Bm7          Em7       Bm7       Em7</c>
      Guardo no coração as tuas palavras
  <c>    Am7      Am7/G       F9 D9</c>
      Pra não pecar contra Ti
  
  <c>G9                   D/F#</c>
  Lâmpada para os meus pés
  <c>          Em7</c>
  É a Tua palavra
  <c>  C9</c>
  E luz pro meu caminho
  <c>  G9                  D/F#</c>
  Lâmpada para os meus pés
  <c>          Em7</c>
  É a Tua Palavra
  <c>    C9</c>
  Não ando sem destino
  
  Final
  <c>A9                   E/G#</c>
  Lâmpada para os meus pés
  <c>          F#m</c>
  É a Tua palavra
  <c>  D9</c>
  E luz pro meu caminho
  <c>  A9                 E/G#</c>
  Lâmpada para os meus pés
  <c>          F#m</c>
  É a Tua Palavra
  <c>    D9</c>
  Não ando sem destino
  
  [Final] <c>A9  E/G#  F#m  D9</c>
  `
}

function chegouAHoraJA21() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Chegou A Hora JA21</h3>
  Tom: <c>G</c>
  [Intro] <c>G  D/F#  Em7  Cadd9</c>
  
  [Primeira Parte]
  
  <c>G                        C9</c>
    Mais importante que sonhar
  <c>                  Em7</c>
  É entender Teus planos
  <c>                  C9</c>
  Teus sonhos realizar
  <c>G                        C9</c>
    Hoje em Espírito e Verdade
  <c>              Em7</c>
  Nós Te seguiremos
  <c>                C9</c>
  Sem olhar pra trás
  
  [Pré-Refrão]
  
  <c>          D    Em7      C9       G</c>
  Então chegou a hora de unirmos a voz
  <c>          D     Em7        C9        G</c>
  E o coração pulsar ardente em Teu amor
  <c>      C9</c>
  Nos rendemos, nos rendemos
  
  [Refrão]
  
  <c>          G    D</c>
  Chegou a hora
  <c>          Em       C9</c>
  De levantarmos a voz
  <c>          G    D</c>
  Chegou a hora
  <c>              Em       C9</c>
  De erguermos nosso louvor
  <c>        D</c>
  Meu Senhor
  <c>    Em      C9</c>
  Em Ti há vitória
  <c>        D</c>
  Sem Temor
  <c>  Em7        C9</c>
  A Ti damos glória
  <c>          G   D  C9</c>
  Chegou a hora
  
  [Segunda Parte]
  
  <c>G                     C9</c>
    Deixamos tudo para trás
  <c>            Em7</c>
  Temos novo rumo
  <c>              C9</c>
  E verdadeira paz
  <c>G                     C9</c>
    E não podemos nos calar
  <c>                Em7</c>
  O evangelho ao mundo
  <c>                C9</c>
  Devemos proclamar
  
  <c>              D  Em7        C9    G</c>
  Então chegou a  hora de viver a missão
  <c>          D    Em7         C9      G</c>
  E sem temor levar ao mundo o Teu amor
  <c>      C9</c>
  Sem demora, sem demora
  
  [Refrão]
  
  <c>          G  D       Em         C9</c>
  Chegou a hora de levantarmos a voz
  <c>          G  D             Em7       C9</c>
  Chegou a hora de erguermos nosso louvor
  <c>        D      Em7       C9</c>
  Meu Senhor, em Ti há vitória
  <c>        D     Em7        C9</c>
  Sem temor, a Ti damos glória
  
  [Ponte]
  
  <c>G                D</c>
  Glória, glória aleluia
  <c>              Em</c>
  Nosso Rei em breve virá
  <c>        C9</c>
  Ele em breve virá
  
  <c>  G               D/F#</c>
  Glória, glória, aleluia
  <c>            Em</c>
  Vem e Reina neste lugar
  <c>        C9</c>
  Reina neste lugar
  
  <c>G                D/F#</c>
  Glória, glória aleluia
  <c>              Em</c>
  Nosso Rei em breve virá
  <c>        C9</c>
  Ele em breve virá
  
  <c>  G               D</c>
  Glória, glória, aleluia
  <c>            Em7</c>
  Vem e Reina neste lugar
  <c>        C9</c>
  Reina neste lugar
  
  [Refrão]
  <c>    G                   Em      C9</c>
  Chegou a hora de levantarmos a voz
  <c>          G   D             Em7       C9</c>
  Chegou a hora  de erguermos nosso louvor
  <c>            D  Em      C9</c>
  Meu Senhor, em Ti há vitória
  <c>        D4     Em7        C9</c>
  Sem temor, a Ti damos glória
  <c>          G  D4  Em  C9</c>
  Chegou a hora
  <c>          G   D  C9</c>
  Chegou a hora
  
  <c>  G                D/F#</c>
  Glória, glória aleluia
  <c>              Em</c>
  Nosso Rei em breve virá
  <c>        C9</c>
  Ele em breve virá 
  `
}

function tudoPorEle() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Tudo Por Ele</h3>
    [Intro] <c>Gb7M Bbm Absus</c> (4x)

             <c>Bbm       Gb            Db</c>
  Os Céus proclamam as obras do Eterno
  <c>Bbm       Gb           Db9</c>
  Galáxias cantam de Sua imensidão
  <c>      Gb               Db</c>
  E uma voz com sons de glória
  <c>        Ab     Gb Db</c>
  Ecoa em toda a criação

  <c>            Bbm   Gb           Db</c>
  Do grão que faz a vida irromper
  <c>          Bbm        Gb              Db</c>
  Com esplendor, o invisível faz nascer
  <c>    Gb                Db</c>
  E uma voz com sons de glória
  <c>        Ab    Gb Db</c>
  Ecoa em nosso coração

<c>Gb7M</c>
  Diante dEle nos rendemos
  <c>  Db       </c>                  
  É tudo por Ele, tudo por Ele
  <c>Gb7M</c>
  A Ele, a glória e para sempre
  <c>  Db            Bbm7     Ab  Gb Bbm Ab</c>
  É tudo por Ele, tudo por Ele

  <c>      Bbm        Gb7M           Db9</c>
  Em oração e na Palavra seguiremos
  <c>Bbm      Gb7M        Db9</c>
  Em um só corpo rendido à missão
  <c>         Gb9              Db9</c>
  E nossa voz com sons de glória
  <c>        Ab   Gb9   Db9</c>
  Irá romper a escuridão

<c>Gb</c>
  Diante dEle nos rendemos
  <c>  Db9                    </c>  
  É tudo por Ele, tudo por Ele
  <c>Gb9</c>
  A Ele, a glória e para sempre
  <c>  Db            Bbm     Ab</c>
  É tudo por Ele, tudo por Ele

( <c>Gb Bbm Ab</c> )

  <c>  Db9                             Gb7M</c>
  A Ele, a honra, a glória e o louvor
  <c>                    Bbm7</c>
  Que o reino seja em nós
  <c>   Ab</c>
  E nossa vida só por Ele
  <c>  Db9                             Gb9</c>
  A Ele, a honra, a glória e o louvor
  <c>                    Bbm7</c>
  Que o reino seja em nós
  <c>   Ab</c>
  E nossa vida só por Ele
  <c>  Db9                             Gb9</c>
  A Ele, a honra, a glória e o louvor
  <c>                    Bbm7</c>
  Que o reino seja em nós
  <c>   Ab</c>
  E nossa vida só por Ele

<c>Gb</c>
  Diante dEle nos rendemos
  <c>  Db9                </c>       
  É tudo por Ele, tudo por Ele
  <c>Gb9</c>
  A Ele, a glória e para sempre
  <c>   Db9          Bbm7     Absus  Gb9</c>
  É tudo por Ele, tudo por Ele
  <c>                  Gb9</c>
  A Ele, a glória e para sempre
  <c>   Db9           Bbm7      Absus  Gb</c>
  É tudo por Ele, tudo por Ele

  <c>  Db9                             Gb9</c>
  A Ele, a honra, a glória e o louvor
  <c>                    Bbm</c>
  Que o reino seja em nós
  <c>  Ab                         Db9</c>
  E nossa vida só por Ele 
  `
}

function meuRefugio() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Meu Refúgio</h3>
  Tom: <c>E</c>
  [Intro] <c>E  E4  E  E4</c>
          <c>E/D  D7M  E/D  D7M</c>
          <c>E  E4  E  E4</c>
          <c>E/D  D7M  E/D  D7M</c>
          <c>E  E4  E  E4</c>
  
  <c>E              E C#m            C#m</c>
  És o meu refúgio, minha Fortaleza
  <c>A9                  E        E4    E  E4</c>
  Meu socorro eterno, és o meu abrigo
  <c>E              E C#m            C#m</c>
  És o meu refúgio, minha Fortaleza
  <c>A9                  E        E4     E</c>
  Meu socorro eterno, és o meu abrigo
  
  <c>          C#m A9        E   B9</c>
  Quando o mar   se agitar
  <c>        C#m A9           B9</c>
  Confiarei    em Ti Senhor
  <c>       C#m A9       E  B9</c>
  E se terra  se abrir
  <c>         G A9           E</c>
  Confiarei   em Ti meu Deus
  
  
  [Final] <c>E  E4  E  E4   E</c>
          <c>E4  E  E4  E</c>
  `
}

function eleMeAmparou() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h2> Ele Me Amparou</h2>
  Tom: <c>G</c>
  [Intro] <c>G  Am7  G/B  C  B/D#  Em7  E7/G#</c>
          <c>Am7  G/B  Eb7+  C/D  G</c>
  
  <c>(B  C  C#  D ) C          B7     Em</c>
  Meses já se vão e eu me lembro bem
  <c>Dm7  G7/13  C7+/9            Am7     C/D</c>
  To - da      dor que o medo me cau -sou
  <c>      (B  C  C#   D ) C           B7  Em</c>
  Toda lágrima no olhar,tristeza e pesar
  <c>G#º           Am7              C/D   G</c>
  Mas também me lembro quem pôde me curar
  
  <c>G      G/B  C     A/C#        D</c>
  Ele me amparou, ouviu meu chorar
  <c>  B7/D#    Em  Em7/D     A/C#</c>
  E me deu a mão,      pra me consolar
  <c>D  Em  D/F#   G      G/B     C</c>
  E  foi  ca - paz de aqui morrer
  <c>    A/C#             D  Em  D/F#  G  G/B   C   D</c>
  Pra hoje eu poder viver quando    tu -do  desabou
  <c>Em  D/F#  G   G/B  C   C/D</c>
  O   se - nhor me   abraçou
  <c>            G  Am7  G/B  C  B/D#  Em7  E7/G#</c>
  Ele me amparou!
  
  <c>( Am7  G/B  Eb7+  C/D  G )</c>
  
  Notas
  <c>( B  C  C#  D ) C              B7  Em</c>
  Se hoje você  ver a luz na escuridão
  <c>Dm7  G7/6  C7+/9          Am7   C/D</c>
    é  por  que   jesus te deu a mão
  <c>  ( B  C  C#  D )    C        B7        Em</c>
  E agora só basta crer e esperar no senhor
  <c>G#º         Am7              C/D      G   C/D</c>
  Deixa a sua vida nas mãos do pai de amor
  
  <c>G      G/B  C     A/C#        D</c>
  Ele me amparou, ouviu meu chorar
  <c>  B/D#    Em  Em7/D     A/C#</c>
  E me deu a mão,      pra me consolar
  <c>D  Em  D/F#   G      G/B     C</c>
  E  foi  ca - paz de aqui morrer
  <c>    A/C#             D  Em  D/F#  G  G/B   C   D</c>
  Pra hoje eu poder viver quando    tu -do  desabou
  <c>Em  D/F#  G   G/B  C     D</c>
  O   se - nhor me   abraçou
  <c>            G</c>
  Ele me amparou!
  
  <c>G/B    C    D   Em    D/F#  G</c>
  Ele me amparou, ele me abraçou
  <c>  C   D    Em           F7+</c>
  E me deu a mão pra não cair
  <c>          C/E           D</c>
  Pra resistir e prosseguir
  
  <c>G      G/B  C     A/C#        D</c>
  Ele me amparou, ouviu meu chorar
  <c>  B/D#     Em  Em7/D     A/C#</c>
  E me deu a mão,      pra me consolar
  <c>D  Em  D/F#  Gm        F    Eb7+</c>
  E  foi  ca - paz de aqui morrer
  <c>    C/E                 Gm  F/A  Bb  Bb/D  Eb   F</c>
  Pra hoje eu poder viver quando   tu -do  desabou
  <c>Gm  F/A  Bb   Bb/D  Eb   F</c>
  O   se - nhor me   abraçou
  <c>            Gm</c>
  Ele me amparou!
  <c>        F    Eb9</c>
  Ele me amparou!
  
  <c>        Bb   Eb  Fsus4  F</c>
  Quando tudo desabou
  <c>          Bb      Eb        F</c>
  Quando o sol não mais brilhou
  <c>Gm  F/A      Bb  Bb/D  Eb  Fsus4  F</c>
      quando o so -nho  acabou
  <c>        Gm  F/A  Eb      F4</c>
  Meu caste - lo  desmoronou...
  <c>            Bb  Cm7  Bb/D  Eb  D/F#  Gm  G/B</c>
  Ele me amparou
  
  <c>( Cm  Bb/D  F#7+  Eb/F   Bb )</c>
  </pre>
  `
}

function inteiramenteFiel() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Inteiramente Fiel</h3>
  Tom: <c>C</c>
  Intro: <c>G9 Emin7 CMaj7   Bb F/A C/G</c>
  
  <c>G               Bm7</c>
  Não vou mais pensar
  <c>    Am7          C/D</c>
  No que passou ou deu errado.
<c>G             Bm7</c>
  Aquilo que Deus começou
  <c>  Am7             C/D   EbM7#5  Em7</c>
  Irá crescer, pois tenho Seu cuidado.
  <c>                A/C#</c>
  Quem tanto me amou,
  <c>    G/D           D9sus4              G</c>
  Merece de mim a entrega do meu melhor.
  
  <c>                    Bm7         C9</c>
  Sou inteiramente de Cristo Jesus.
  <c>                            D9/4      G</c>
  Fui feito pra viver como filho do Rei.
  <c>                Bm7                   Dm7 </c>          
  Sou eternamente ligado a Jesus, pra sem  .  .  .  

  <c>G9/4      CM9   A7/C# G/D</c>
  pre  serei. 
  <c>              D9            G   Em7 Bb F/A C/G G</c>
  Inteiramente fiel eu quero ser.
  
  <c>G               Bm7</c>
  Eu sei de um lugar
  <c>Am7               C/D</c>
  Que está além do que é comum.
  <c>G           Bm7</c>
  A vida que existe lá
  <c>    Am7             C/D   EbM7#5 Em7</c>
  Não vai ter fim, por causa de Jesus.
  <c>              A/C#</c>
  Quem tanto me amou,
  <c>    G/D           D9/4                G</c>
  Merece de mim a entrega do meu melhor.
  
  <c>                    Bm7         C9</c>
  Sou inteiramente de Cristo Jesus.
  <c>                            D9sus4     G</c>
  Fui feito pra viver como filho do Rei.
  <c>                Bm7                   Dm7 </c>          
  Sou eternamente ligado a Jesus, pra sem  .  .  .  

  <c>G9/4      CM9   A7/C# G/D</c>
  pre  serei. 
  <c>              D9            G   C/D</c>
  Inteiramente fiel eu quero ser.
  
  <c>                      Bm7         C9</c>
  Sou inteiramente de Cristo Jesus.
  <c>                            D9sus4    G</c>
  Fui feito pra viver como filho do Rei.
  <c>                  Bm7                  Dm7     G9/4   </c>   
  Sou eternamente ligado a Jesus, pra sem  .  .  .  pre 
  <c>    C9   A7/C# G/D</c>
    serei.
  <c>              D9/4 G/D</c>
  Inteiramente fiel
  <c>              D9/4 G/D</c>
  Inteiramente fiel
  <c>              D9/4 </c>             
  Inteiramente fiel ,  
  <c>          G        E E D B - A Bb F/A C/G G</c>
  eu quero ser 
  `
}

function aoOlharPraCruz() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>  Ao Olhar pra Cruz</h3>
  Tom: <c>C</c>
  [Intro] <c>C  G  Am7  Am7/G  F9</c>
          <c>C  G  Am7  Am7/G  F9</c>
  
  <c>C               G</c>
  Andei tão cego, sem rumo certo
  <c>Am7       Am7/G     F</c>
  Buscando a paz e descanso
  <c>C           G9</c>
  Eu procurei, por tantos meios
  <c>Am7       Am7/G  F</c>
  Justificar meus erros
  <c>    Dm  C/E G        F  Em   G9</c>
  Mas ao clamar, meus olhos abri
  
  <c>      Am7        F</c>
  E ao olhar pra cruz
  <c>      C        G</c>
  Eu entendo o amor
  <c>      Am7   F      G9</c>
  Derramado ali por mim
  <c>      Am7      F</c>
  Sacrifício de sangue
  <c>    C      G9</c>
  Por um pecador
  <c>        Dm7</c>
  Não sou merecedor
  <c>      G9</c>
  Tua graça me alcançou
  
  (<c> C  G  Am7  Am7/G  F9 </c>)
  
  <c>C                  G9</c>
  E ao ver tua glória, naquele dia
  <c>Am7     Am7/G     F</c>
  Me alegrarei em gratidão
  <c>C</c>
  Tocarei as marcas,
  <c>G9</c>
  Marcas de vitória
  <c>Am7    Am7/G  F</c>
  Vencido é o pecado
  <c>  Dm C/E G9     F   Dm  G9</c>
  Perante ti, me prostrarei
  
  <c>      Am7        F</c>
  E ao olhar pra cruz
  <c>      C        G</c>
  Eu entendo o amor
  <c>      Am7   F      G9</c>
  Derramado ali por mim
  <c>      Am7      F</c>
  Sacrifício de sangue
  <c>    C      G9</c>
  Por um pecador
  <c>        Dm7</c>
  Não sou merecedor
  <c>      G9</c>
  Tua graça me alcançou
  
  [Solo]<c> Am7  F  C  G</c>
         <c> Am7  F  Gsus</c>
  
  <c>      Am7        F</c>
  E ao olhar pra cruz
  <c>      C        G</c>
  Eu entendo o amor
  <c>      Am7   F      G9</c>
  Derramado ali por mim
  <c>      Am7      F</c>
  Sacrifício de sangue
  <c>    C      G9</c>
  Por um pecador
  <c>        Dm7       G9</c>
  Não sou merecedor
  
  <c>      Am7        F</c>
  E ao olhar pra cruz
  <c>      C        G</c>
  Eu entendo o amor
  <c>      Am7   F      G9</c>
  Derramado ali por mim
  <c>      Am7      F</c>
  Sacrifício de sangue
  <c>    C      G9</c>
  Por um pecador
  <c>        Dm7      C/E  G9</c>
  Não sou merecedor
  <c>        F              G</c>
  Não sou merecedor tua graça me alcançou
  
  [Final]<c> C  G  Am7  Am7/G  F9</c>


  <h3>Fixa Teus Olhos Versão Evandro</h3>
  <c>C7      G/B        Am C7m</c>
  Fixa teus olhos no Mestre,
  <c>F         Am/F#.    G</c>
  Confia no bom Salvador;
  <c>    C7.     Gm7/C     F. Am/F#</c>
  Fruirás, na luta terrestre,
  <c>     Am/D     Am/G       C</c>
  Maravilhas do Seu doce amor.


  <h3>Fixa Teus Olhos Versão Hinário</h3>
  <c>C7        G        Am C7m</c>
  Fixa teus olhos no Mestre,
  <c>C7  F         D/F F#° G</c>
  Confia no bom Sal-va-dor;
  <c>    C            G#° Am  F</c>
  Fruirás, na luta ter-res-tre,
  <c>    C/G      G           C</c>
  Maravilhas do Seu doce amor.
  `
}

function vimParaAdorarTe() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>Vim Para Adorar-Te</h3>
  Tom: <c>E</c>
  [Intro] <c>E  B  F#m  A9</c>
          <c>E  B  F#m  A9</c>

  [Primeira Parte]

  <c>E       B9</c>
  Luz do mundo
  <c>  F#m      A9</c>
  Viestes à Terra
  <c>  E9          B9      A9</c>
  Pra que eu pudesse Te ver
  <c> E     B9</c>
  Tua beleza me
  <c> F#m       A9</c>
  Leva a adorar-te
  <c>  E9      B9    A9</c>
  Quero contigo Viver

  [Refrão]

  <c>             E9</c>
  Vim para adorar-te
  <c>               B9</c>
  Vim para prostrar-me
  <c>            E/G#           A9</c>
  Vim para dizer que és meu Deus
  <c>               E</c>
  És totalmente amável
  <c>            B9</c>
  Totalmente digno
  <c>            E/G#      A9</c>
  Tão maravilhoso para mim

  [Segunda Parte]

  <c>E       B9</c>
  Eterno rei
  <c>     F#m        A9</c>
  Exaltado nas alturas
  <c>  E  B9       A9</c>
  Glorioso nos céus
  <c> E        B9</c>
  Humilde vieste
  <c>   F#m         A9</c>
  À terra que criaste
  <c> E        B9      A9</c>
  Por amor pobre Se fez

  [Refrão]

  <c>             E9</c>
  Vim para adorar-te
  <c>               B9</c>
  Vim para prostrar-me
  <c>            E/G#           A9</c>
  Vim para dizer que és meu Deus
  <c>                E</c>
  És totalmente amável
  <c>            B9</c>
  Totalmente digno
  <c>            E/G#      A9</c>
  Tão maravilhoso para mim

  [Ponte]

  <c>     B   C#m   A9</c>
  Eu nunca saberei o preço
  <c>      B     C#m   A9</c>
  Dos meus pecados  lá  na cruz

  [Refrão]

  <c>             E9</c>
  Vim para adorar-te
  <c>               B9</c>
  Vim para prostrar-me
  <c>            E/G#           A9</c>
  Vim para dizer que és meu Deus
  <c>                E</c>
  És totalmente amável
  <c>            B9</c>
  Totalmente digno
  <c>            E/G#      A9</c>
  Tão maravilhoso para mim

  [Final] <c>A  A6  E</c>
  `
}

function oSenhorEstaAqui() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <pre>
  <h3>  O Senhor Está Aqui HASD 470</h3>  
  Tom: <c>Ab</c>
  
  <c>Ab         Ab7+  Db/Ab</c>
  O Senhor está aqui!
  <c>Eb/G  Fm7 Eb7   Ab</c>
  O Senhor está aqui!
  <c>Bbm</c>
  Vinde adorá-Lo!
  <c>Bbm7/Ab</c>
  Vinde exaltá-Lo!
  <c>Eb/G Db/F  Db/Eb Ab</c>
  O Senhor está aqui!

  <c>Ab       Eb/G    Db/F</c>
  Vamos entoar louvores ao Seu nome,
  <c>Ab        Eb/G    Db/F        Eb7</c>
  Vamos exaltar as Suas maravilhas!
  <c>Ab2           Eb/G Fm          Cm/Eb</c>
  Toda a Terra e Céu dêem o seu louvor!
  <c>Db      Bb7/D  Bbm/Eb      Eb</c>
  Vamos adorar o grande Criador!

  <c>Ab         Eb/G    Db/F</c>
  Nuvens e trovões proclamem Sua glória,
  <c>Ab        Eb/G    Db/F        Eb7</c>
  Mundos e nações inclinem-se a Ele!
  <c>Ab2       Eb/G  Fm          Cm/Eb</c>
  DEle é o poder, dEle é o louvor!
  <c>Db      Bb7/D  Bbm/Eb      Eb</c>
  Vamos adorar o grande Criador!  
  `
}

function hojeAqui() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <h3>Hoje Aqui</h3>
  <pre>
  Tom:<c>  D</c>

  <c>A       D        Bm</c>
  Hoje aqui meu Jesus
  <c>     Em         Asus A</c>
  me tomou em seus braços
  <c>G/B A/C# D      Bm7     Em   Asus A  A/G</c>
  E   senti   o calor do Espírito Santo
  <c>       D/F#            G</c>
  Vou em paz pois o meu Deus
  <c>       D/F#        G</c>
  Ao meu lado vai ficar
  <c>     Bm7       Em7      Em7/A</c>
  E em breve sua face eu verei
  <c>G/A  A     D</c>
    Lá no céu

  <c>A       D        Bm</c>
  Hoje aqui meu Jesus
  <c>     Em         Asus A</c>
  me tomou em seus braços
  <c>G/B A/C# D      Bm7     Em   Asus A  A/G</c>
  E   senti   o calor do Espírito Santo
  <c>       D/F#            G</c>
  Vou em paz pois o meu Deus
  <c>       D/F#        G</c>
  Ao meu lado vai ficar
  <c>     Bm7       Em7      Em7/A</c>
  E em breve sua face eu verei
  <c>G/A  A     D</c>
    Lá no céu

  <c>C#m B      E        C#m</c>
  Hoje aqui meu Jesus
  <c>     F#m         Bsus</c>
  Me tomou em seus braços
  <c>B    E      C#m      F#m Bsus B  B/A</c>
  E senti o calor do Espírito Santo
  <c>       E/G#            A</c>
  Vou em paz pois o meu Deus
  <c>       E/G#        A</c>
  Ao meu lado vai ficar
  <c>     C#m7     F#m7     Bsus</c>
  E em breve sua face eu verei
  <c>A/B  B      E  </c>
    lá no céu 
  `
}

function soEmTi() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = 
  `  
<h3>Só Em Ti</h3>
<pre>
<b>Tom:</b><c> Eb</c>
<b>Intro:</b><c> F – Eb – Bb/D – Eb – Bb/D – Cm
        Fm – Eb – Bb/D – Cm – Bb – Ab - Eb
</c>

<c>            Fm  Fm/Eb    Bb/D       Eb  Bb/D Cm Cm/Bb</c>
Porque Teu amor   é  melhor do que a vida,
<c>        Fm              Bb                Csus7</c>
Os meus lábios Te louvarão enquanto eu viver,
<c>Bb/D C/E  Fm    Fm/Eb  Bb/D   Eb  Eb/G  Ab Eb/G </c>
Em   teu  nome levantarei as minhas  mãos,
<c>      Fm           Bb        Eb</c>
A minh'alma se fartará, só em Ti.

<c>Bb/D  Cm  Ab      Eb            Bb</c>
Só em Ti,   a minh'alma se fartará,
<c>      Cm  Ab    Eb/G       Bb</c>
Só em Ti,  só em Ti Meu Jesus,
<c>      Cm Ab       Eb           Bb</c>
Só em Ti,  a minh'alma se fartará,
<c>      Ab Bb    Ab/C Bb/D  Bb    Eb</c>
Só em Ti,  só em Ti       Meu Jesus.

(Subindo de tom discretamente... Tom Bb)

<c>      Eb/D   Cm  Cm/Bb F/A           Bb F/A Gm Gm/F</c>
Porque Teu  amor    é melhor do que a vida,
<c>       Cm            F               Gsus7 G</c>
Os meus lábios Te louvarão enquanto eu viver,
<c>F/A G/B Cm       Cm/Bb F/A     Bb Bb/D Eb Bb/D</c>
Em  teu nome  levantarei    as minhas mãos,
<c>      Cm           F         Bb</c>
A minh'alma se fartará, só em Ti.


<c>F/A   Gm Eb      Bb              F</c>
Só em Ti,   a minh'alma se fartará,
<c>      Gm Eb      Bb/D       F</c>
Só em Ti,   só em Ti Meu Jesus,
<c>      Gm Eb     Bb/D          F</c>
Só em Ti, a minh'alma se fartará,
<c>      Eb F       Eb/G F/A F      Bb</c>
Só em Ti,  só em Ti       Meu Jesus.

          (BATERIA TOM C)

  <c>Am      F/A        C/G          G</c>
        Só em Ti, a minh'alma se fartará,
        <c>     Am F      C/E       G</c>
        Só em Ti, só em Ti Meu Jesus,
        <c>       Am G Am F     C/E           G</c>
        Só em Ti,      a minh'alma se fartará,
        <c>      F G      F/A G/B G       C</c>
        Só em Ti, só em Ti      Meu Jesus.

        (BEM CALMO)

        <c>      Am F        C            G</c>
        Só em Ti, a minh'alma se fartará,
        <c>      Am F      C/E     G</c>
        Só em Ti, só em Ti Meu Jesus,
        <c>      Am F      C/E           G</c>
          Só em Ti, a minh'alma se fartará,
          <c>      F G       F/A G/B G       C</c>
          Só em Ti, só em Ti      Meu Jesus.
  `
}

buttonMusic()
buttonMusic2()