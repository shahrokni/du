import { Data, NounSpec } from "./schema";

export const data: Data = {
  prepositions: [],
  words: [
    {
      word: "Sprache",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Communication"],
      spec: {
        samples: [
          {
            sample: "Du sprichst meine Sprache.",
            translation: "You speak my language.",
          },
          {
            sample: "Die arabische Sprache ist einfach.",
            translation: "The Arabic language is simple.",
          },
        ],
        article: "Die",
        meanings: ["language"],
        plural: "Sprachen",
      } as NounSpec,
    },
    {
      word: "Buch",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Education"],
      spec: {
        article: "Das",
        samples: [
          { sample: "Ich lese ein Buch.", translation: "I am reading a book." },
          {
            sample: "Das Buch ist interessant.",
            translation: "The book is interesting.",
          },
        ],
        meanings: ["book"],
        plural: "Bücher",
      } as NounSpec,
    },
    {
      word: "Haus",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Living"],
      spec: {
        article: "Das",
        samples: [
          { sample: "Das Haus ist groß.", translation: "The house is big." },
          {
            sample: "Ich wohne in einem Haus.",
            translation: "I live in a house.",
          },
        ],
        meanings: ["house", "home"],
        plural: "Häuser",
      } as NounSpec,
    },
    {
      word: "Katze",
      level: "A1",
      type: "NOUN",
      categories: ["Animals and Pets"],
      spec: {
        samples: [
          { sample: "Die Katze schläft.", translation: "The cat is sleeping." },
          { sample: "Ich habe eine Katze.", translation: "I have a cat." },
        ],
        article: "Die",
        meanings: ["cat"],
        plural: "Katzen",
      } as NounSpec,
    },
    {
      word: "Auto",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation"],
      spec: {
        samples: [
          { sample: "Das Auto ist schnell.", translation: "The car is fast." },
          { sample: "Ich fahre ein Auto.", translation: "I am driving a car." },
          {
            sample: "Mein Auto hat ein Problem.",
            translation: "My car has a problem.",
          },
        ],
        article: "Das",
        meanings: ["car"],
        plural: "Autos",
      } as NounSpec,
    },
    {
      word: "Baum",
      level: "A1",
      type: "NOUN",
      categories: ["Nature"],
      spec: {
        samples: [
          { sample: "Der Baum ist hoch.", translation: "The tree is tall." },
          {
            sample: "Der Wald hat viele Bäume.",
            translation: "The forest has many trees.",
          },
        ],
        article: "Der",
        meanings: ["tree"],
        plural: "Bäume",
      } as NounSpec,
    },
    {
      word: "Bus",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation"],
      spec: {
        samples: [
          "Der Bus ist pünktlich.",
          "Ich nehme den Bus.",
          "Der Bus fährt um 8 Uhr ab.",
          "Wann kommt der nächste Bus?",
          "Von welchem Busbahnhof fährt der Bus ab?",
        ],
        article: "Der",
        meanings: ["bus"],
        plural: "Busse",
      } as NounSpec,
    },
    {
      word: "Zug",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation"],
      spec: {
        samples: [
          "Ich fahre mit dem Zug.",
          "Der Zug kommt um 10 Uhr an.",
          "Wo ist der Bahnhof für den Zug?",
          "Der ICE-Zug ist sehr schnell.",
          "Der Zug fällt heute aus.",
        ],
        article: "Der",
        meanings: ["train"],
        plural: "Züge",
      } as NounSpec,
    },
    {
      word: "Fahrrad",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation", "Sports"],
      spec: {
        samples: ["Ich fahre mit dem Fahrrad zur Arbeit."],
        article: "Das",
        meanings: ["bicycle", "bike"],
        plural: "Fahrräder",
      } as NounSpec,
    },
    {
      word: "U-Bahn",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation"],
      spec: {
        samples: [
          "Wo ist die nächste U-Bahn-Station?",
          "Die U-Bahn fährt alle 5 Minuten.",
          "Die U-Bahn ist heute sehr voll.",
        ],
        article: "Die",
        meanings: ["subway", "metro"],
        plural: "U-Bahnen",
      } as NounSpec,
    },
    {
      word: "S-Bahn",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation"],
      spec: {
        samples: [
          "Ich nehme die S-Bahn zur Arbeit.",
          "Die S-Bahn fährt bis Mitternacht.",
        ],
        article: "Die",
        meanings: ["commuter train"],
        plural: "S-Bahnen",
      } as NounSpec,
    },
    {
      word: "Straße",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation", "Places"],
      spec: {
        samples: ["Die Straße ist lang.", "Die Straße ist heute gesperrt."],
        article: "Die",
        meanings: ["street", "road"],
        plural: "Straßen",
      } as NounSpec,
    },
    {
      word: "Brücke",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation", "Places"],
      spec: {
        samples: ["Die Brücke verbindet zwei Städte."],
        article: "Die",
        meanings: ["bridge"],
        plural: "Brücken",
      } as NounSpec,
    },
    {
      word: "Ampel",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation", "Places"],
      spec: {
        samples: ["Die Ampel ist rot.", "An der Ampel musst du warten."],
        article: "Die",
        meanings: ["traffic light", "stoplight"],
        plural: "Ampeln",
      } as NounSpec,
    },
    {
      word: "Kreuzung",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation", "Places"],
      spec: {
        samples: ["An der Kreuzung musst du links abbiegen."],
        article: "Die",
        meanings: ["intersection", "crossroad"],
        plural: "Kreuzungen",
      } as NounSpec,
    },
    {
      word: "Vorname",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Introduction"],
      spec: {
        samples: [
          "Wie ist dein Vorname?",
          "Mein Vorname ist Anna.",
          "Schreib bitte deinen Vornamen auf.",
        ],
        article: "Der",
        meanings: ["first name", "given name"],
        plural: "Vornamen",
      } as NounSpec,
    },
    {
      word: "Nachname",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Introduction"],
      spec: {
        samples: [
          "Wie ist dein Nachname?",
          "Mein Nachname ist Müller.",
          "Schreib bitte deinen Nachnamen auf.",
        ],
        article: "Der",
        meanings: ["last name", "surname", "family name"],
        plural: "Nachnamen",
      } as NounSpec,
    },
    {
      word: "Alter",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Introduction"],
      spec: {
        samples: ["Wie alt bist du?", "Mein Alter ist 25 Jahre."],
        article: "Das",
        meanings: ["age"],
        plural: "Alter",
      } as NounSpec,
    },
    {
      word: "Adresse",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Introduction"],
      spec: {
        samples: [
          "Meine Adresse ist Hauptstraße 5.",
          "Kannst du mir deine Adresse geben?",
          "Die Adresse steht auf dem Brief.",
          "Die Adresse ist nicht korrekt.",
        ],
        article: "Die",
        meanings: ["address"],
        plural: "Adressen",
      } as NounSpec,
    },
    {
      word: "Telefonnummer",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Introduction"],
      spec: {
        samples: ["Du kannnst mich unter dieser Telefonnummer erreichen."],
        article: "Die",
        meanings: ["phone number", "telephone number"],
        plural: "Telefonnummern",
      } as NounSpec,
    },
    {
      word: "Ausweis",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Introduction"],
      spec: {
        samples: [
          "Zeigen Sie bitte Ihren Ausweis.",
          "Mein Ausweis ist abgelaufen.",
          "Ich habe meinen Ausweis verloren.",
        ],
        article: "Der",
        meanings: ["ID", "identification card"],
        plural: "Ausweise",
      } as NounSpec,
    },
    {
      word: "Pass",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Introduction"],
      spec: {
        samples: [
          "Ich brauche einen neuen Pass.",
          "Mein Pass ist gültig bis 2025.",
          "Haben Sie Ihren Pass dabei?",
        ],
        article: "Der",
        meanings: ["passport"],
        plural: "Pässe",
      } as NounSpec,
    },
  ],
};
