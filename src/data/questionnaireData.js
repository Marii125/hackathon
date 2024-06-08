const questionaireData = {
  0: {
    id: 0,
    question: "Která z těchto činností tě nejvíc baví?",
    answers: [
      {
        text: "práce s lidmi",
        nextQuestionId: 1,
        position: null,
      },
      {
        text: "tvořit něco nového",
        nextQuestionId: 1,
        position: null,
      },
      {
        text: "hlavolamy, hádanky",
        nextQuestionId: 2,
        position: null,
      },
      {
        text: 'ptát se "proč" a hledat odpovědi',
        nextQuestionId: 2,
        position: null,
      },
    ],
  },
  1: {
    id: 1,
    question: "jsi víc ... než ...",
    answers: [
      {
        text: "jsi více empatická než technicky zručná",
        nextQuestionId: 3,
        position: "ux-designerka",
      },
      {
        text: "ráda vidíš co nejdříve výsledek své práce",
        nextQuestionId: 3,
        position: "front-endacka",
      },
      {
        text: "první řešení nebo nápad, co tě napadne je vždy vizuální",
        nextQuestionId: 3,
        position: "ux-designerka",
      },
      {
        text: "vnímáš své kreativní nadání, ale zároveň máš ráda především ve věcech i práci řád a systém",
        nextQuestionId: 3,
        position: "front-endacka",
      },
    ],
  },
  2: {
    id: 2,
    question: "Co z následujících tvrzení tě nejvíc vystihuje?",
    answers: [
      {
        text: "umíš poskládat kousky problému do širších souvislostí",
        nextQuestionId: 4,
        position: "datova-analyticka",
      },
      {
        text: "dobře snášíš repetitivnost pracovní náplně",
        nextQuestionId: 4,
        position: "testerka",
      },
      {
        text: "jsi vytrvalá a trpělivá, nebojíš se ptát a umíš vymýšlet i spontánní hlouposti",
        nextQuestionId: 4,
        position: "testerka",
      },
      {
        text: "ráda prezentuješ před týmem výsledky tvé práce často a pravidelně, nezpůsobuje ti to stres",
        nextQuestionId: 4,
        position: "datova-analyticka",
      },
    ],
  },
  3: {
    id: 3,
    question: "Jsi schopna",
    answers: [
      {
        text: "vcítít se do potřeb a preferenci potenciálních uživatelů",
        nextQuestionId: 5,
        position: "ux-designerka",
      },
      {
        text: "řešit problémy a z pozorování dokážeš odvodit závěry",
        nextQuestionId: 5,
        position: "ux-designerka",
      },
      {
        text: "efektivně řídit svůj čas, kriticky myslet a komunikovat s ostatními",
        nextQuestionId: 5,
        position: "front-endacka",
      },
      {
        text: "přijmout změny a odpovídajícím způsobem je upravit",
        nextQuestionId: 5,
        position: "front-endacka",
      },
    ],
  },
  4: {
    id: 4,
    question: "Máš více..",
    answers: [
      {
        text: "kladný vztah k matematice",
        nextQuestionId: 6,
        position: "datova-analyticka",
      },
      {
        text: "chuť zkoumat nové věci a snažit se je vylepšit",
        nextQuestionId: 6,
        position: "testerka",
      },
      {
        text: "ráda grafy, tabulky a vizualizace",
        nextQuestionId: 6,
        position: "datova-analyticka",
      },
      {
        text: " často věci zpochybňuješ a tudíž je potřebuješ posunout na nějakou lepší ůroveň",
        nextQuestionId: 6,
        position: "testerka",
      },
    ],
  },
  5: {
    id: 5,
    question:
      "Při vytváření nějakého zadání si spíše pozorná a kladeš důraz na...",
    answers: [
      {
        text: "na celkový vizuální dojem",
        nextQuestionId: 7,
        position: "ux-designerka",
      },
      {
        text: "na funkční celek v různých změnených podmínkách",
        nextQuestionId: 7,
        position: "front-endacka",
      },
    ],
  },
  6: {
    id: 6,
    question:
      "míváš někdy tendenci věci rozebrat, aby si pochopila jak fungují?",
    answers: [
      {
        text: "NE",
        nextQuestionId: 8,
        position: "datova-analyticka",
      },
      {
        text: "ANO",
        nextQuestionId: 8,
        position: "testerka",
      },
    ],
  },
  7: {
    id: 7,
    question: "Co tě nejvíc vystihuje",
    answers: [
      {
        text: "ze všeho nejvíc si rozhodně zvědavá",
        nextQuestionId: 9,
        position: "ux-designerka",
      },
      {
        text: "velice těžko neseš kritiku",
        nextQuestionId: 9,
        position: "front-endacka",
      },
      {
        text: "rychle nacházíš řešení",
        nextQuestionId: 9,
        position: "ux-designerka",
      },
      {
        text: "si rozhodně v první řadě systematická a důkladná, nejen když jde o úklid",
        nextQuestionId: 9,
        position: "front-endacka",
      },
    ],
  },
  8: {
    id: 8,
    question:
      "Co z následujících činností by bylo pro tebe každodenně v práci naplňující?",
    answers: [
      {
        text: "odhalovat vzorce v pozadí informací",
        nextQuestionId: 10,
        position: "datova-analyticka",
      },
      {
        text: "přistupovat za každých okolností k práci systematicky",
        nextQuestionId: 10,
        position: "testerka",
      },
      {
        text: "neustále hledat zlepšení",
        nextQuestionId: 10,
        position: "datova-analyticka",
      },
      {
        text: "hledat a všímat si drobných detailů",
        nextQuestionId: 10,
        position: "testerka",
      },
    ],
  },
  9: {
    id: 9,
    question:
      "Je pro tebe samozřejmostí vzít tužku do ruky a něco si naskicovat, když někomu něco vysvětluješ",
    answers: [
      {
        text: "ANO",
        nextQuestionId: null,
        position: "ux-designerka",
      },
      {
        text: "NE",
        nextQuestionId: null,
        position: "front-endacka",
      },
    ],
  },
  10: {
    id: 10,
    question:
      "Představ si, že pomáháš kamarádovi s přípravou na večírek, který úkol preferuješ",
    answers: [
      {
        text: "Prohlédnout si seznam hostů a přemýšlet nad zkušenostmi z minulých setkání, abyste vyhodnotili, co fungovalo dobře a co udláte pro změnu tentokrát ůplně jinak",
        nextQuestionId: null,
        position: "datova-analyticka",
      },
      {
        text: "Projít si kontrolní seznam, ujistit se, že je vše v pořádku, zkontrolovat případné problémy a ujistit se, že jsou všechny aktivity, materiál na párty připraveny perfektně a nic k párty nechybí. ",
        nextQuestionId: null,
        position: "testerka",
      },
    ],
  },
};

export default questionaireData;
