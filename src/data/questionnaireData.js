export const questionaireData = {
  0: {
    id: 0,
    question: 'Která z těchto činností tě nejvíc baví?',
    answers: [
      {
        text: 'práce s lidmi',
        nextQuestionId: 1,
        position: null,
      },
      {
        text: 'tvořit něco nového',
        nextQuestionId: 1,
        position: null,
      },
      {
        text: 'hlavolamy, hádanky',
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
    question: 'Jsi víc ... než ...',
    answers: [
      {
        text: 'jsi více empatická než technicky zručná',
        nextQuestionId: 3,
        position: 'ux',
      },
      {
        text: 'ráda vidíš, co nejdříve výsledek své práce',
        nextQuestionId: 3,
        position: 'frontend',
      },
      {
        text: 'první řešení nebo nápad, co tě napadne, je vždy vizuální',
        nextQuestionId: 3,
        position: 'ux',
      },
      {
        text: 'vnímáš své kreativní nadání, ale zároveň máš ráda především ve věcech i v práci řád a systém',
        nextQuestionId: 3,
        position: 'frontend',
      },
    ],
  },
  2: {
    id: 2,
    question: 'Co z následujících tvrzení tě nejvíc vystihuje?',
    answers: [
      {
        text: 'umíš poskládat malé kousky problému do širších souvislostí',
        nextQuestionId: 4,
        position: 'analyticka',
      },
      {
        text: 'dobře snášíš repetitivnost pracovní náplně',
        nextQuestionId: 4,
        position: 'testerka',
      },
      {
        text: 'jsi vytrvalá a trpělivá, nebojíš se ptát a umíš vymýšlet i spontánní hlouposti',
        nextQuestionId: 4,
        position: 'testerka',
      },
      {
        text: 'ráda prezentuješ před týmem výsledky tvé práce často a pravidelně, nezpůsobuje ti to stres',
        nextQuestionId: 4,
        position: 'analyticka',
      },
    ],
  },
  3: {
    id: 3,
    question: 'Z následujicích činností na tebe nejvíce sedí tendence',
    answers: [
      {
        text: 'často při aplikacích nebo surfování na internetu vidíš, co by šlo, kde zlepšit',
        nextQuestionId: 5,
        position: 'ux',
      },
      {
        text: 'řešit problémy a z pozorování dokážeš odvodit závěry',
        nextQuestionId: 5,
        position: 'ux',
      },
      {
        text: 'plánovat si práci předem a důsledně plán dodržovat',
        nextQuestionId: 5,
        position: 'frontend',
      },
      {
        text: 'přijmout změny a odpovídajícím způsobem je upravit',
        nextQuestionId: 5,
        position: 'frontend',
      },
    ],
  },
  4: {
    id: 4,
    question: 'Máš více... než',
    answers: [
      {
        text: 'kladný vztah k matematice',
        nextQuestionId: 6,
        position: 'analyticka',
      },
      {
        text: 'chuť zkoumat nové věci a snažit se je vylepšit',
        nextQuestionId: 6,
        position: 'testerka',
      },
      {
        text: 'ráda grafy, tabulky a vizualizace',
        nextQuestionId: 6,
        position: 'analyticka',
      },
      {
        text: ' často věci zpochybňuješ, a tudíž je potřebuješ posunout na nějakou lepší úroveň',
        nextQuestionId: 6,
        position: 'testerka',
      },
    ],
  },
  5: {
    id: 5,
    question:
      'Při vytváření nějakého zadání si spíše pozorná a kladeš důraz na...',
    answers: [
      {
        text: 'na celkový vizuální dojem',
        nextQuestionId: 7,
        position: 'ux',
      },
      {
        text: 'na to, jak zadání působí jako funkční celek v různých změněných podmínkách',
        nextQuestionId: 7,
        position: 'frontend',
      },
    ],
  },
  6: {
    id: 6,
    question:
      'Míváš někdy tendenci věci rozebrat, aby si pochopila jak fungují?',
    answers: [
      {
        text: 'NE',
        nextQuestionId: 8,
        position: 'analyticka',
      },
      {
        text: 'ANO',
        nextQuestionId: 8,
        position: 'testerka',
      },
    ],
  },
  7: {
    id: 7,
    question: 'Co tě nejvíc vystihuje?',
    answers: [
      {
        text: 'ze všeho nejvíc si rozhodně zvědavá',
        nextQuestionId: 9,
        position: 'ux',
      },
      {
        text: 'velice těžko neseš kritiku',
        nextQuestionId: 9,
        position: 'frontend',
      },
      {
        text: 'rychle nacházíš řešení',
        nextQuestionId: 9,
        position: 'ux',
      },
      {
        text: 'si rozhodně v první řadě systematická a důkladná, nejen když jde o úklid',
        nextQuestionId: 9,
        position: 'frontend',
      },
    ],
  },
  8: {
    id: 8,
    question:
      'Co z následujících činností by bylo pro tebe každodenně v práci naplňující?',
    answers: [
      {
        text: 'odhalovat vzorce v pozadí informací',
        nextQuestionId: 10,
        position: 'analyticka',
      },
      {
        text: 'přistupovat za každých okolností k práci systematicky',
        nextQuestionId: 10,
        position: 'testerka',
      },
      {
        text: 'neustále hledat zlepšení',
        nextQuestionId: 10,
        position: 'analyticka',
      },
      {
        text: 'hledat a všímat si drobných detailů',
        nextQuestionId: 10,
        position: 'testerka',
      },
    ],
  },
  9: {
    id: 9,
    question:
      'Je pro tebe samozřejmostí vzít tužku do ruky a něco si naskicovat, když někomu něco vysvětluješ?',
    answers: [
      {
        text: 'ANO',
        nextQuestionId: null,
        position: 'ux',
      },
      {
        text: 'NE',
        nextQuestionId: null,
        position: 'frontend',
      },
    ],
  },
  10: {
    id: 10,
    question:
      'Představ si, že pomáháš kamarádovi s přípravou na večírek, který úkol preferuješ?',
    answers: [
      {
        text: 'prohlédnout si seznam hostů a přemýšlet nad zkušenostmi z minulých setkání, abyste vyhodnotili, co fungovalo dobře, a co uděláte pro změnu tentokrát ůplně jinak',
        nextQuestionId: null,
        position: 'analyticka',
      },
      {
        text: 'projít si kontrolní seznam, ujistit se, že je vše v pořádku, zkontrolovat případné problémy a ujistit se, že jsou všechny aktivity, materiál na párty připraveny perfektně a nic k párty nechybí. ',
        nextQuestionId: null,
        position: 'testerka',
      },
    ],
  },
};

export default questionaireData;
