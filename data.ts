type Category =
  | "General"
  | "Introduction"
  | "Greeting"
  | "Date and time"
  | "Family and friends"
  | "Food and drinks"
  | "Daily routines"
  | "Weather and seasons"
  | "Housing and furniture"
  | "Shopping and clothing"
  | "Directions and transportation"
  | "Health"
  | "Occupation"
  | "Hobbies"
  | "Basic cultural topics"
  | "Travel and holidays"
  | "Leisure"
  | "Environment"
  | "Media"
  | "City life and errands"
  | "Plans"
  | "Communication"
  | "Education"
  | "Living"
  | "Animals and pets"
  | "Nature"
  | "Sports"
  | "Places"
  | "Emergency"
  | "Appointment"
  | "Aviation"
  | "Entertainment"
  | "Official matters"
  | "Religion"
  | "Technology"
  | "Events"
  | "Tools and equipment"
  | "Household"
  | "Relationships";

type PersonalPronouns = "ich" | "du" | "er_sie_es" | "wir" | "ihr" | "sie_Sie";

type Type = "NOUN" | "VERB" | "ADJECTIVE" | "ADVERB";
type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
type Case = "Nominative" | "Accusative" | "Dative" | "Genitive";
type NominativeArticles = "Die" | "Der" | "Das";
type Preposition =
  | "mit"
  | "nach"
  | "aus"
  | "zu"
  | "von"
  | "bei"
  | "seit"
  | "außer"
  | "entgegen"
  | "gegenüber"
  | "durch"
  | "ohne"
  | "gegen"
  | "für"
  | "um"
  | "bis"
  | "an"
  | "auf"
  | "hinter"
  | "in"
  | "neben"
  | "über"
  | "unter"
  | "vor"
  | "zwischen"
  | "statt"
  | "trotz"
  | "während"
  | "wegen"
  | "innerhalb"
  | "außerhalb";

type Connectors =
  | "und"
  | "oder"
  | "aber"
  | "denn"
  | "sondern"
  | "weil"
  | "dass"
  | "wenn"
  | "obwohl"
  | "ob"
  | "als"
  | "bevor"
  | "nachdem"
  | "während"
  | "bis"
  | "damit"
  | "deshalb"
  | "trotzdem"
  | "außerdem"
  | "dann"
  | "dannach"
  | "zuerst"
  | "sonst"
  | "schließlich"
  | "jedoch"
  | "also"
  | "na ja"
  | "übrigens"
  | "eigentlich"
  | "halt"
  | "eben";

type Contraction = "beim" | "zum" | "zur" | "im" | "am" | "ins" | "aufs";

interface WordSample {
  sample: string;
  translation: string;
  explanations?: Explain[];
}

interface QuickGrammar {
  key: string;
  title: string;
  explain: string[];
  example: Array<{ example: string; translation: string }>;
  important_notes?: string[];
}

interface Explain {
  question?: string;
  answer?: string;
  grammars?: string[];
}

interface WordSpec {
  samples: Array<WordSample>;
  meanings: string[];
}

interface NounSpec extends WordSpec {
  article: NominativeArticles;
  plural?: string;
}

interface VerbSpec extends WordSpec {
  infinitive: string;
  pp: string;
  conjugation: Record<PersonalPronouns, string>;
}

interface AdjectiveSpec extends WordSpec {
  comparative?: string;
  superlative?: string;
}

interface Word {
  word: string;
  type: Type;
  level: Level;
  spec: WordSpec;
  important?: boolean;
  categories: Category[];
}

interface PrepositionDetail {
  preposition: Preposition;
  case: Case[];
}

interface Data {
  prepositions: PrepositionDetail[];
  grammar: QuickGrammar[];
  words: Word[];
}

const data: Data = {
  prepositions: [],
  grammar: [
    {
      key: "von",
      title: "von Preposition",
      explain: [
        `The German preposition "von" is primarily used to indicate origin, possession, authorship, and certain relationships. It is always followed by the dative case.`,
        `1. Origin or Source: "von" indicates where someone or something comes from.`,
        `2. Possession: It shows ownership or association.`,
        `3. Authorship: It is used to indicate the creator of a work.`,
        `4. Relationships: "von" can denote relationships between people or things.`,
        `When using "von," ensure that the noun following it is in the dative case, which may involve changing the article or adjective endings accordingly.`,
      ],
      example: [
        {
          example: "Das Buch ist von dem Autor geschrieben.",
          translation: "The book is written by the author.",
        },
        {
          example: "Ich komme von der Schule.",
          translation: "I am coming from the school.",
        },
      ],
    },
    {
      key: "vom",
      title: "vom Contraction",
      explain: [
        `The contraction "vom" is a combination of the preposition "von" (from/of) and the definite article "dem" (the) in the dative case. It is used to indicate origin, possession, authorship, and certain relationships, just like "von," but specifically when referring to masculine or neuter nouns in the dative case.`,
        `When using "vom," ensure that the noun following it is in the dative case, which may involve changing the article or adjective endings accordingly.`,
      ],
      example: [
        {
          example: "Ich komme vom Arzt.",
          translation: "I am coming from the doctor.",
        },
        {
          example: "Das Geschenk ist vom Freund.",
          translation: "The gift is from the friend.",
        },
      ],
    },
    {
      key: "vor",
      title: "vor Preposition",
      explain: [
        `The German preposition "vor" is used to indicate position, time, and causation. It can be followed by either the dative or accusative case, depending on the context.`,
        `1. Position: When "vor" indicates a static position (where something is located), it is followed by the dative case.`,
        `2. Movement: When "vor" indicates movement towards a place (where something is going), it is followed by the accusative case.`,
        `3. Time: "vor" is used to express time before an event or action and is typically followed by the dative case.`,
        `4. Causation: It can also indicate a reason or cause for something and is usually followed by the dative case.`,
      ],
      example: [
        {
          example: "Das Auto steht vor dem Haus.",
          translation: "The car is in front of the house.",
        },
        {
          example: "Ich gehe vor das Haus.",
          translation: "I am going in front of the house.",
        },
      ],
    },
    {
      key: "Akkusativ",
      title: "Akkusativ",
      explain: [
        `In German, the accusative case (der Akkusativ) is used for the direct object of a sentence—the person or thing that receives the action of the verb. It affects the articles and pronouns used with nouns, with changes being most noticeable for masculine nouns.`,
        `To determine if a noun is in the accusative case, you can ask the question "Wen?" (whom?) for people or "Was?" (what?) for things.`,
        `The most significant change in the accusative case is the masculine definite article "der," which changes to "den."`,
        `Many German verbs are "transitive," meaning they must have a direct object. When you use one of these verbs, the object is always in the accusative case.`,
        `Some prepositions are always followed by the accusative case, regardless of context. A mnemonic to remember some of these is "FUDGEBO" (für, um, durch, gegen, ohne).`,
        `A group of prepositions can take either the accusative or dative case, depending on whether they express movement/direction (accusative) or a fixed location (dative).`,
      ],
      example: [
        {
          example: "Ich sehe den Hund.",
          translation: "I see the dog.",
        },
        {
          example: "Sie kauft einen Apfel.",
          translation: "She buys an apple.",
        },
      ],
    },
    {
      key: "wenn",
      title: "wenn Connector",
      explain: [
        `In German, "wenn" is a subordinating conjunction used to introduce conditional clauses (if-clauses) and temporal clauses (when-clauses). It is similar to the English "if" or "when," depending on the context.`,
        `1. Conditional Clauses: "wenn" is used to express conditions or hypothetical situations. The verb in the "wenn" clause is placed at the end of the clause.`,
        `2. Temporal Clauses: "wenn" can also indicate that one action occurs when another action takes place. Again, the verb in the "wenn" clause goes to the end.`,
        `When using "wenn," remember that it is a subordinating conjunction, which means it sends the conjugated verb to the end of the clause it introduces.`,
      ],
      example: [
        {
          example: "Wenn es regnet, bleibe ich zu Hause.",
          translation: "If it rains, I stay at home.",
        },
        {
          example: "Ich rufe dich an, wenn ich zu Hause bin.",
          translation: "I will call you when I am at home.",
        },
        {
          translation: "If the weather is good, we will go for a walk.",
          example: "Wenn das Wetter gut ist, gehen wir spazieren.",
        },
      ],
    },
    {
      key: "weil",
      title: "weil Connector",
      explain: [
        `In German, "weil" is a subordinating conjunction used to introduce causal clauses, similar to the English "because." It explains the reason or cause for an action or situation.`,
        `When using "weil," the verb in the clause introduced by "weil" is placed at the end of that clause.`,
        `Remember that "weil" is a subordinating conjunction, which means it sends the conjugated verb to the end of the clause it introduces.`,
      ],
      example: [
        {
          example: "Ich bleibe zu Hause, weil es regnet.",
          translation: "I stay at home because it is raining.",
        },
        {
          example: "Sie ist müde, weil sie nicht geschlafen hat.",
          translation: "She is tired because she did not sleep.",
        },
        {
          translation: "We are going to the park because the weather is nice.",
          example: "Wir gehen in den Park, weil das Wetter schön ist.",
        },
      ],
    },
  ],
  words: [
    {
      word: "Stadtzentrum",
      level: "A1",
      type: "NOUN",
      categories: [
        "Places",
        "City life and errands",
        "Directions and transportation",
      ],
      spec: {
        samples: [
          {
            sample: "Das Stadtzentrum ist sehr belebt.",
            translation: "The city center is very busy.",
          },
          {
            sample: "Ich wohne im Stadtzentrum.",
            translation: "I live in the city center.",
          },
          {
            sample: "Das Stadtzentrum hat viele Geschäfte und Restaurants.",
            translation: "The city center has many shops and restaurants.",
          },
        ],
        article: "Das",
        meanings: ["city center", "downtown"],
        plural: "Stadtzentren",
      } as NounSpec,
    },
    {
      word: "Geschäft",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing", "City life and errands", "Places"],
      spec: {
        samples: [
          {
            sample: "Die Geschäfte sind geöffnet.",
            translation: "The shops are open.",
          },
          {
            sample: "Ich gehe gerne in die Geschäfte.",
            translation: "I like to go to the shops.",
          },
        ],
        article: "Das",
        meanings: ["shops", "stores", "businesses"],
        plural: "Geschäfte",
      } as NounSpec,
    },
    {
      word: "Wolke",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons"],
      spec: {
        samples: [
          { sample: "Die Wolke ist weiß.", translation: "The cloud is white." },
          {
            sample: "Am Himmel sind viele Wolken.",
            translation: "There are many clouds in the sky.",
          },
        ],
        article: "Die",
        meanings: ["cloud"],
        plural: "Wolken",
      } as NounSpec,
    },
    {
      word: "Sonne",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons"],
      spec: {
        samples: [
          { sample: "Die Sonne scheint.", translation: "The sun is shining." },
          {
            sample: "Die Sonne ist sehr heiß.",
            translation: "The sun is very hot.",
          },
        ],
        article: "Die",
        meanings: ["sun"],
        plural: "Sonnen",
      } as NounSpec,
    },
    {
      word: "Mond",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons"],
      spec: {
        samples: [
          { sample: "Der Mond ist rund.", translation: "The moon is round." },
          {
            sample: "Der Mond scheint in der Nacht.",
            translation: "The moon shines at night.",
          },
        ],
        article: "Der",
        meanings: ["moon"],
        plural: "Monde",
      } as NounSpec,
    },
    {
      word: "dauern",
      level: "A1",
      type: "VERB",
      categories: ["General", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Der Film dauert zwei Stunden.",
            translation: "The movie lasts two hours.",
          },
          {
            sample: "Wie lange dauert die Reise? ",
            translation: "How long does the trip take?",
          },
          {
            translation: "The meeting lasted for three hours.",
            sample: "Das Meeting hat drei Stunden gedauert.",
          },
          {
            translation: "The concert lasted all night.",
            sample: "Das Konzert hat die ganze Nacht gedauert.",
          },
        ],
        meanings: ["to last", "to take (time)"],
        infinitive: "dauern",
        conjugation: {
          ich: "dauere",
          du: "dauerst",
          er_sie_es: "dauert",
          wir: "dauern",
          ihr: "dauert",
          sie_Sie: "dauern",
        },
        pp: "gedauert",
      } as VerbSpec,
    },
    {
      word: "veranstalten",
      level: "A1",
      type: "VERB",
      categories: ["General", "Occupation", "Entertainment"],
      spec: {
        samples: [
          {
            sample: "Wir veranstalten eine Party am Samstag.",
            translation: "We are hosting a party on Saturday.",
          },
          {
            sample: "Die Firma veranstaltet ein Meeting.",
            translation: "The company is organizing a meeting.",
          },
          {
            translation: "I organized a conference last year.",
            sample: "Ich habe letztes Jahr eine Konferenz veranstaltet.",
          },
          {
            translation: "She is hosting a workshop next week.",
            sample: "Sie veranstaltet nächste Woche einen Workshop.",
          },
        ],
        meanings: ["to organize", "to host"],
        infinitive: "veranstalten",
        conjugation: {
          ich: "veranstalte",
          du: "veranstaltest",
          er_sie_es: "veranstaltet",
          wir: "veranstalten",
          ihr: "veranstaltet",
          sie_Sie: "veranstalten",
        },
        pp: "veranstaltet",
      } as VerbSpec,
    },
    {
      word: "einpacken",
      level: "A1",
      type: "VERB",
      categories: ["General", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Ich packe meinen Koffer ein.",
            translation: "I am packing my suitcase.",
          },
          {
            sample: "Kannst du bitte meine Sachen einpacken?",
            translation: "Can you please pack my things?",
          },
          {
            translation: "I packed my clothes for the trip.",
            sample: "Ich habe meine Kleidung für die Reise eingepackt.",
          },
          {
            translation: "Please pack your things and leave the room.",
            sample:
              "Bitte packen Sie Ihre Sachen ein und verlassen Sie das Zimmer.",
          },
        ],
        meanings: ["to pack", "to wrap up"],
        infinitive: "einpacken",
        conjugation: {
          ich: "packe ein",
          du: "packst ein",
          er_sie_es: "packt ein",
          wir: "packen ein",
          ihr: "packt ein",
          sie_Sie: "packen ein",
        },
        pp: "eingepackt",
      } as VerbSpec,
    },
    {
      word: "verlassen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Travel and holidays", "Daily routines"],
      spec: {
        samples: [
          {
            sample: "Ich verlasse das Haus um 8 Uhr.",
            translation: "I leave the house at 8 o'clock.",
          },
          {
            translation: "When are you leaving the party?",
            sample: "Wann verlässt du die Party?",
          },
        ],
        meanings: ["to leave", "to abandon"],
        infinitive: "verlassen",
        conjugation: {
          ich: "verlasse",
          du: "verlässt",
          er_sie_es: "verlässt",
          wir: "verlassen",
          ihr: "verlasst",
          sie_Sie: "verlassen",
        },
        pp: "verlassen",
      } as VerbSpec,
    },
    {
      word: "scheinen",
      level: "A1",
      type: "VERB",
      categories: ["Nature", "Weather and seasons"],
      spec: {
        samples: [
          { sample: "Die Sonne scheint.", translation: "The sun is shining." },
          {
            sample: "Der Mond scheint in der Nacht.",
            translation: "The moon shines at night.",
          },
        ],
        meanings: ["to shine", "to appear"],
        infinitive: "scheinen",
        conjugation: {
          ich: "scheine",
          du: "scheinst",
          er_sie_es: "scheint",
          wir: "scheinen",
          ihr: "scheint",
          sie_Sie: "scheinen",
        },
        pp: "geschienen",
      } as VerbSpec,
    },
    {
      word: "sprechen",
      level: "A1",
      type: "VERB",
      categories: ["Communication", "Education", "Daily routines"],
      spec: {
        samples: [
          {
            sample: "Ich spreche Deutsch.",
            translation: "I speak German.",
          },
          {
            sample: "Kannst du Englisch sprechen?",
            translation: "Can you speak English?",
          },
          {
            translation: "I spoke with my friend yesterday.",
            sample: "Ich habe gestern mit meinem Freund gesprochen.",
          },
          {
            translation: "She is speaking at the conference.",
            sample: "Sie spricht auf der Konferenz.",
          },
          {
            translation: "We need to speak about the project.",
            sample: "Wir müssen über das Projekt sprechen.",
          },
          {
            translation: "I need to talk to you about something.",
            sample: "Ich muss mit dir über etwas sprechen.",
          },
        ],
        meanings: ["to speak", "to talk"],
        infinitive: "sprechen",
        conjugation: {
          ich: "spreche",
          du: "sprichst",
          er_sie_es: "spricht",
          wir: "sprechen",
          ihr: "sprecht",
          sie_Sie: "sprechen",
        },
        pp: "gesprochen",
      } as VerbSpec,
    },
    {
      word: "verbinden",
      level: "A1",
      type: "VERB",
      categories: [
        "Directions and transportation",
        "Communication",
        "Technology",
      ],
      spec: {
        samples: [
          {
            sample: "Die Brücke verbindet zwei Städte.",
            translation: "The bridge connects two cities.",
          },
          {
            sample: "Das Internet verbindet Menschen auf der ganzen Welt.",
            translation: "The internet connects people all over the world.",
          },
          {
            translation: "Can you connect my phone to the Wi-Fi?",
            sample: "Kannst du mein Handy mit dem WLAN verbinden?",
          },
          {
            translation: "The internet has connected people worldwide.",
            sample: "Das Internet hat Menschen weltweit verbunden.",
          },
        ],
        meanings: ["to connect", "to link"],
        infinitive: "verbinden",
        conjugation: {
          ich: "verbinde",
          du: "verbindest",
          er_sie_es: "verbindet",
          wir: "verbinden",
          ihr: "verbindet",
          sie_Sie: "verbinden",
        },
        pp: "verbunden",
      } as VerbSpec,
    },
    {
      word: "ausfüllen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education", "Official matters"],
      spec: {
        samples: [
          {
            sample: "Bitte füllen Sie das Formular aus.",
            translation: "Please fill out the form.",
          },
          {
            sample: "Ich muss den Antrag ausfüllen.",
            translation: "I need to fill out the application.",
          },
          {
            translation: "Can you help me fill out this form?",
            sample: "Kannst du mir helfen, dieses Formular auszufüllen?",
          },
          {
            translation: "I filled out the registration form online.",
            sample: "Ich habe das Anmeldeformular online ausgefüllt.",
          },
          {
            translation: "Who should fill out the questionnaire?",
            sample: "Wer soll den Fragebogen ausfüllen?",
          },
        ],
        meanings: ["to fill out", "to complete"],
        infinitive: "ausfüllen",
        conjugation: {
          ich: "fülle aus",
          du: "füllst aus",
          er_sie_es: "füllt aus",
          wir: "füllen aus",
          ihr: "füllt aus",
          sie_Sie: "füllen aus",
        },
        pp: "ausgefüllt",
      } as VerbSpec,
    },
    {
      word: "entfernen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Health"],
      spec: {
        samples: [
          {
            sample: "Bitte entfernen Sie den Fleck von meinem Hemd.",
            translation: "Please remove the stain from my shirt.",
          },
          {
            sample: "Der Arzt hat den Tumor entfernt.",
            translation: "The doctor removed the tumor.",
          },
          {
            translation: "Can you remove this file from my computer?",
            sample: "Kannst du diese Datei von meinem Computer entfernen?",
          },
          {
            translation: "I removed the old furniture from my apartment.",
            sample: "Ich habe die alten Möbel aus meiner Wohnung entfernt.",
          },
        ],
        meanings: ["to remove", "to delete"],
        infinitive: "entfernen",
        conjugation: {
          ich: "entferne",
          du: "entfernst",
          er_sie_es: "entfernt",
          wir: "entfernen",
          ihr: "entfernt",
          sie_Sie: "entfernen",
        },
        pp: "entfernt",
      } as VerbSpec,
    },
    {
      word: "ankommen",
      level: "A1",
      type: "VERB",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Der Zug kommt um 10 Uhr an.",
            translation: "The train arrives at 10 o'clock.",
          },
          {
            sample: "Wann kommt der Bus an?",
            translation: "When does the bus arrive?",
          },
          {
            translation: "What time does the plane arrive?",
            sample: "Um wie viel Uhr kommt das Flugzeug an?",
          },
          {
            translation: "I arrived at the airport two hours ago.",
            sample: "Ich bin vor zwei Stunden am Flughafen angekommen.",
          },
          {
            sample: "Wann kommst du in Berlin an?",
            translation: "When do you arrive in Berlin?",
          },
        ],
        meanings: ["to arrive", "to reach"],
        infinitive: "ankommen",
        conjugation: {
          ich: "komme an",
          du: "kommst an",
          er_sie_es: "kommt an",
          wir: "kommen an",
          ihr: "kommt an",
          sie_Sie: "kommen an",
        },
        pp: "angekommen",
      } as VerbSpec,
    },
    {
      word: "abfahren",
      level: "A1",
      type: "VERB",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Der Bus fährt um 8 Uhr ab.",
            translation: "The bus departs at 8 o'clock.",
          },
          {
            sample: "Wann fährt der Zug ab?",
            translation: "When does the train depart?",
          },
        ],
        meanings: ["to depart", "to leave"],
        infinitive: "abfahren",
        conjugation: {
          ich: "fahre ab",
          du: "fährst ab",
          er_sie_es: "fährt ab",
          wir: "fahren ab",
          ihr: "fahrt ab",
          sie_Sie: "fahren ab",
        },
        pp: "abgefahren",
      } as VerbSpec,
    },
    {
      word: "anrufen",
      level: "A1",
      type: "VERB",
      categories: ["Communication"],
      spec: {
        samples: [
          {
            sample: "Ich rufe dich später an.",
            translation: "I will call you later.",
          },
          {
            sample: "Kannst du mich morgen anrufen?",
            translation: "Can you call me tomorrow?",
          },
          {
            translation: "I called my friend last night.",
            sample: "Ich habe meinen Freund gestern Abend angerufen.",
          },
          {
            translation: "She called the doctor.",
            sample: "Sie hat den Arzt angerufen.",
          },
          {
            translation: "In case of emergency, call this number.",
            sample: "Im Notfall rufen Sie diese Nummer an.",
          },
        ],
        meanings: ["to call", "to phone"],
        infinitive: "anrufen",
        conjugation: {
          ich: "rufe an",
          du: "rufst an",
          er_sie_es: "ruft an",
          wir: "rufen an",
          ihr: "ruft an",
          sie_Sie: "rufen an",
        },
        pp: "angerufen",
      } as VerbSpec,
    },
    {
      word: "einladen",
      level: "A1",
      type: "VERB",
      categories: ["Communication"],
      spec: {
        samples: [
          {
            sample: "Ich lade dich zu meiner Party ein.",
            translation: "I invite you to my party.",
          },
          {
            sample: "Kannst du mich zum Essen einladen?",
            translation: "Can you invite me to dinner?",
          },
          {
            translation: "I invited my friends to my birthday party.",
            sample:
              "Ich habe meine Freunde zu meiner Geburtstagsparty eingeladen.",
          },
          {
            translation: "She invited me to her wedding.",
            sample: "Sie hat mich zu ihrer Hochzeit eingeladen.",
          },
          {
            translation: "We are going to invite our neighbors for coffee.",
            sample: "Wir werden unsere Nachbarn zum Kaffee einladen.",
          },
        ],
        meanings: ["to invite", "to load"],
        infinitive: "einladen",
        conjugation: {
          ich: "lade ein",
          du: "lädst ein",
          er_sie_es: "lädt ein",
          wir: "laden ein",
          ihr: "ladet ein",
          sie_Sie: "laden ein",
        },
        pp: "eingeladen",
      } as VerbSpec,
    },
    {
      word: "einkaufen",
      level: "A1",
      type: "VERB",
      categories: ["Shopping and clothing", "Daily routines"],
      spec: {
        samples: [
          {
            sample: "Ich gehe heute einkaufen.",
            translation: "I am going shopping today.",
          },
          {
            sample: "Kannst du Brot und Milch einkaufen?",
            translation: "Can you buy bread and milk?",
          },

          {
            translation: "She likes to shop for groceries on weekends.",
            sample: "Sie kauft am Wochenende gerne Lebensmittel ein.",
          },
          {
            translation: "We need to go shopping for a new car.",
            sample: "Wir müssen für ein neues Auto einkaufen gehen.",
          },
        ],
        meanings: ["to shop", "to buy"],
        infinitive: "einkaufen",
        conjugation: {
          ich: "kaufe ein",
          du: "kaufst ein",
          er_sie_es: "kauft ein",
          wir: "kaufen ein",
          ihr: "kauft ein",
          sie_Sie: "kaufen ein",
        },
        pp: "eingekauft",
      } as VerbSpec,
    },
    {
      word: "Friseur",
      level: "A1",
      type: "NOUN",
      categories: ["Places"],
      spec: {
        samples: [
          {
            sample: "Der Friseur schneidet meine Haare.",
            translation: "The hairdresser is cutting my hair.",
          },
          {
            sample: "Ich habe einen Termin beim Friseur.",
            translation: "I have an appointment at the hairdresser's.",
          },
        ],
        article: "Der",
        meanings: ["hairdresser", "barber"],
        plural: "Friseure",
      } as NounSpec,
    },
    {
      word: "Polizei",
      level: "A1",
      type: "NOUN",
      categories: ["Places", "Official matters"],
      spec: {
        samples: [
          {
            sample: "Die Polizei ist sehr hilfsbereit.",
            translation: "The police are very helpful.",
          },
          {
            sample: "Ich muss zur Polizei gehen.",
            translation: "I need to go to the police station.",
          },
          {
            translation: "Ï have to call the police.",
            sample: "Ich muss die Polizei rufen.",
          },
        ],
        article: "Die",
        meanings: ["police", "police station"],
        plural: "Polizeien",
      } as NounSpec,
    },
    {
      word: "einsteigen",
      level: "A1",
      type: "VERB",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Ich steige in den Bus ein.",
            translation: "I am getting on the bus.",
          },
          {
            sample: "Wo kann ich in den Zug einsteigen?",
            translation: "Where can I get on the train?",
          },
          {
            translation: "I got on the plane at gate 5.",
            sample: "Ich bin am Gate 5 in das Flugzeug eingestiegen.",
          },
          {
            translation: "She is getting on the subway now.",
            sample: "Sie steigt jetzt in die U-Bahn ein.",
          },
          {
            translation: "We need to get on the ferry before it leaves.",
            sample: "Wir müssen vor der Abfahrt auf die Fähre einsteigen.",
          },
        ],
        meanings: ["to get in", "to board"],
        infinitive: "einsteigen",
        conjugation: {
          ich: "steige ein",
          du: "steigst ein",
          er_sie_es: "steigt ein",
          wir: "steigen ein",
          ihr: "steigt ein",
          sie_Sie: "steigen ein",
        },
        pp: "eingestiegen",
      } as VerbSpec,
    },
    {
      word: "umsteigen",
      level: "A1",
      type: "VERB",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Ich muss in Berlin umsteigen.",
            translation: "I have to change trains in Berlin.",
          },
          {
            sample: "Wo muss ich umsteigen?",
            translation: "Where do I have to change?",
          },
          {
            translation: "I changed trains in Munich.",
            sample: "Ich bin in München umgestiegen.",
          },
          {
            translation: "We need to change at the next station.",
            sample: "Wir müssen an der nächsten Station umsteigen.",
          },
          {
            translation: "We will change the train in Frankfurt.",
            sample: "Wir werden in Frankfurt umsteigen.",
          },
        ],
        meanings: ["to change (trains, buses)", "to transfer"],
        infinitive: "umsteigen",
        conjugation: {
          ich: "steige um",
          du: "steigst um",
          er_sie_es: "steigt um",
          wir: "steigen um",
          ihr: "steigt um",
          sie_Sie: "steigen um",
        },
        pp: "umgestiegen",
      } as VerbSpec,
    },
    {
      word: "aussteigen",
      level: "A1",
      type: "VERB",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Ich steige an der nächsten Haltestelle aus.",
            translation: "I am getting off at the next stop.",
          },
          {
            sample: "Wo muss ich aussteigen?",
            translation: "Where do I have to get off?",
          },
          {
            translation: "I got off the train in Hamburg.",
            sample: "Ich bin in Hamburg aus dem Zug ausgestiegen.",
          },
          {
            translation: "She is getting off the bus now.",
            sample: "Sie steigt jetzt aus dem Bus aus.",
          },
        ],
        meanings: ["to get out", "to disembark"],
        infinitive: "aussteigen",
        conjugation: {
          ich: "steige aus",
          du: "steigst aus",
          er_sie_es: "steigt aus",
          wir: "steigen aus",
          ihr: "steigt aus",
          sie_Sie: "steigen aus",
        },
        pp: "ausgestiegen",
      } as VerbSpec,
    },
    {
      word: "akzeptieren",
      level: "A1",
      type: "VERB",
      categories: ["General", "Communication", "Official matters"],
      spec: {
        samples: [
          {
            sample: "Ich akzeptiere deine Meinung.",
            translation: "I accept your opinion.",
          },
          {
            sample: "Der Chef akzeptiert keine Ausreden.",
            translation: "The boss does not accept excuses.",
          },
          {
            translation: "I accepted the job offer.",
            sample: "Ich habe das Jobangebot akzeptiert.",
          },
          {
            translation: "She accepted the invitation to the party.",
            sample: "Sie hat die Einladung zur Party akzeptiert.",
          },
          {
            translation: "We need to accept the terms and conditions.",
            sample: "Wir müssen die Geschäftsbedingungen akzeptieren.",
          },
        ],
        meanings: ["to accept", "to approve"],
        infinitive: "akzeptieren",
        conjugation: {
          ich: "akzeptiere",
          du: "akzeptierst",
          er_sie_es: "akzeptiert",
          wir: "akzeptieren",
          ihr: "akzeptiert",
          sie_Sie: "akzeptieren",
        },
        pp: "akzeptiert",
      } as VerbSpec,
    },
    {
      word: "ablehnen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Communication"],
      spec: {
        samples: [
          {
            sample: "Ich lehne dein Angebot ab.",
            translation: "I decline your offer.",
          },
          {
            sample: "Der Chef lehnt keine Vorschläge ab.",
            translation: "The boss does not reject proposals.",
          },
          {
            translation: "I declined the invitation to the party.",
            sample: "Ich habe die Einladung zur Party abgelehnt.",
          },
          {
            translation: "She rejected the job offer.",
            sample: "Sie hat das Jobangebot abgelehnt.",
          },
          {
            translation: "We need to reject the terms and conditions.",
            sample: "Wir müssen die Geschäftsbedingungen ablehnen.",
          },
          {
            sample: "Ich lehne das Angebot ab.",
            translation: "I refuse the offer.",
          },
        ],
        meanings: ["to decline", "to reject"],
        infinitive: "ablehnen",
        conjugation: {
          ich: "lehne ab",
          du: "lehnst ab",
          er_sie_es: "lehnt ab",
          wir: "lehnen ab",
          ihr: "lehnt ab",
          sie_Sie: "lehnen ab",
        },
        pp: "abgelehnt",
      } as VerbSpec,
    },
    {
      word: "mitbringen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Communication"],
      spec: {
        samples: [
          {
            sample: "Kannst du bitte einen Kuchen mitbringen?",
            translation: "Can you please bring a cake?",
          },
          {
            sample: "Ich bringe meine Freunde zur Party mit.",
            translation: "I am bringing my friends to the party.",
          },
          {
            translation: "I brought my own drinks to the picnic.",
            sample: "Ich habe meine eigenen Getränke zum Picknick mitgebracht.",
          },
          {
            translation: "She is bringing her laptop to the meeting.",
            sample: "Sie bringt ihren Laptop zum Meeting mit.",
          },
          {
            translation: "We need to bring our passports to the airport.",
            sample: "Wir müssen unsere Pässe zum Flughafen mitbringen.",
          },
        ],
        meanings: ["to bring along", "to bring with"],
        infinitive: "mitbringen",
        conjugation: {
          ich: "bringe mit",
          du: "bringst mit",
          er_sie_es: "bringt mit",
          wir: "bringen mit",
          ihr: "bringt mit",
          sie_Sie: "bringen mit",
        },
        pp: "mitgebracht",
      } as VerbSpec,
    },
    {
      word: "mitkommen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Communication"],
      spec: {
        samples: [
          {
            sample: "Willst du mitkommen?",
            translation: "Do you want to come along?",
          },
          {
            sample: "Ich komme gerne mit.",
            translation: "I like to come along.",
          },
          {
            translation: "I came along to the party.",
            sample: "Ich bin zur Party mitgekommen.",
          },
          {
            translation: "She is coming along to the concert.",
            sample: "Sie kommt zum Konzert mit.",
          },
          {
            translation: "We need to come along to the meeting.",
            sample: "Wir müssen zum Meeting mitkommen.",
          },
        ],
        meanings: ["to come along", "to accompany"],
        infinitive: "mitkommen",
        conjugation: {
          ich: "komme mit",
          du: "kommst mit",
          er_sie_es: "kommt mit",
          wir: "kommen mit",
          ihr: "kommt mit",
          sie_Sie: "kommen mit",
        },
        pp: "mitgekommen",
      } as VerbSpec,
    },
    {
      word: "warten",
      level: "A1",
      type: "VERB",
      categories: ["General", "Communication"],
      spec: {
        samples: [
          {
            sample: "Ich warte auf den Bus.",
            translation: "I am waiting for the bus.",
          },
          {
            sample: "Kannst du bitte warten?",
            translation: "Can you please wait?",
          },
          {
            translation: "I waited for you at the café.",
            sample: "Ich habe im Café auf dich gewartet.",
          },
          {
            translation: "She is waiting for her friend.",
            sample: "Sie wartet auf ihre Freundin.",
          },
          {
            translation: "We need to wait for the train to arrive.",
            sample: "Wir müssen auf die Ankunft des Zuges warten.",
          },
          {
            translation: "How long should I wait?",
            sample: "Wie lange soll ich warten?",
          },
          {
            translation: "Could you wait 5 minutes?",
            sample: "Könntest du 5 Minuten warten?",
          },
          {
            sample: "Ich warte auf dich.",
            translation: "I am waiting for you.",
            explanations: [
              {
                question: "Why is dich used?",
                answer:
                  '"Dich" is the accusative form of "du" (you) in German. In this sentence, "warten auf" (to wait for) requires the accusative case for the object being waited for. Therefore, we use "dich" instead of "du".',
                grammars: ["Akkusativ"],
              },
            ],
          },
        ],
        meanings: ["to wait", "to await"],
        infinitive: "warten",
        conjugation: {
          ich: "warte",
          du: "wartest",
          er_sie_es: "wartet",
          wir: "warten",
          ihr: "wartet",
          sie_Sie: "warten",
        },
        pp: "gewartet",
      } as VerbSpec,
    },
    {
      word: "erklären",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education"],
      spec: {
        samples: [
          {
            sample: "Kannst du das bitte erklären?",
            translation: "Can you please explain that?",
          },
          {
            sample: "Der Lehrer erklärt die Grammatik.",
            translation: "The teacher explains the grammar.",
          },
          {
            translation: "I explained the problem to my friend.",
            sample: "Ich habe meinem Freund das Problem erklärt.",
          },
          {
            translation: "She is explaining the rules of the game.",
            sample: "Sie erklärt die Regeln des Spiels.",
          },
          {
            translation: "We need to explain our decision to the team.",
            sample: "Wir müssen unsere Entscheidung dem Team erklären.",
          },
        ],
        meanings: ["to explain", "to clarify"],
        infinitive: "erklären",
        conjugation: {
          ich: "erkläre",
          du: "erklärst",
          er_sie_es: "erklärt",
          wir: "erklären",
          ihr: "erklärt",
          sie_Sie: "erklären",
        },
        pp: "erklärt",
      } as VerbSpec,
    },
    {
      word: "lernen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education"],
      spec: {
        samples: [
          {
            sample: "Ich lerne Deutsch.",
            translation: "I am learning German.",
          },
          {
            sample: "Kannst du mir helfen, Englisch zu lernen?",
            translation: "Can you help me learn English?",
          },
          {
            translation: "I learned a lot in school.",
            sample: "Ich habe in der Schule viel gelernt.",
          },
          {
            translation: "She is learning to play the piano.",
            sample: "Sie lernt Klavier zu spielen.",
          },
          {
            translation: "We need to learn the new software for work.",
            sample: "Wir müssen die neue Software für die Arbeit lernen.",
          },
          {
            translation: "How could I learn to speak French?",
            sample: "Wie könnte ich lernen, Französisch zu sprechen?",
          },
        ],
        meanings: ["to learn", "to study"],
        infinitive: "lernen",
        conjugation: {
          ich: "lerne",
          du: "lernst",
          er_sie_es: "lernt",
          wir: "lernen",
          ihr: "lernt",
          sie_Sie: "lernen",
        },
        pp: "gelernt",
      } as VerbSpec,
    },
    {
      word: "üben",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education"],
      spec: {
        samples: [
          {
            sample: "Ich übe jeden Tag Klavier.",
            translation: "I practice piano every day.",
          },
          {
            sample: "Kannst du mir helfen, Deutsch zu üben?",
            translation: "Can you help me practice German?",
          },
          {
            translation: "I practiced my presentation before the meeting.",
            sample: "Ich habe meine Präsentation vor dem Meeting geübt.",
          },
          {
            translation: "She is practicing her dance routine.",
            sample: "Sie übt ihre Tanzroutine.",
          },
          {
            translation: "We need to practice our teamwork skills.",
            sample: "Wir müssen unsere Teamfähigkeiten üben.",
          },
          {
            translation: "Although it was difficult, I practiced every day.",
            sample: "Obwohl es schwierig war, habe ich jeden Tag geübt.",
          },
        ],
      } as VerbSpec,
    },
    {
      word: "fahren",
      level: "A1",
      type: "VERB",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Ich fahre mit dem Auto zur Arbeit.",
            translation: "I drive to work by car.",
          },
          {
            sample: "Kannst du mich zum Bahnhof fahren?",
            translation: "Can you drive me to the train station?",
          },
          {
            translation: "I drove to the beach last weekend.",
            sample: "Ich bin letztes Wochenende zum Strand gefahren.",
          },
          {
            translation: "She is driving her kids to school.",
            sample: "Sie fährt ihre Kinder zur Schule.",
          },
          {
            translation: "We need to drive carefully in the snow.",
            sample: "Wir müssen bei Schnee vorsichtig fahren.",
          },
        ],
        meanings: ["to drive", "to ride"],
        infinitive: "fahren",
        conjugation: {
          ich: "fahre",
          du: "fährst",
          er_sie_es: "fährt",
          wir: "fahren",
          ihr: "fahrt",
          sie_Sie: "fahren",
        },
        pp: "gefahren",
      } as VerbSpec,
    },
    {
      word: "abholen",
      level: "A1",
      type: "VERB",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Ich hole dich um 8 Uhr ab.",
            translation: "I will pick you up at 8 o'clock.",
          },
          {
            sample: "Kannst du mich vom Flughafen abholen?",
            translation: "Can you pick me up from the airport?",
          },
          {
            translation: "I picked up my friend from the train station.",
            sample: "Ich habe meinen Freund vom Bahnhof abgeholt.",
          },
          {
            translation: "She is picking up her kids from school.",
            sample: "Sie holt ihre Kinder von der Schule ab.",
          },
          {
            translation: "We need to pick up our luggage at the airport.",
            sample: "Wir müssen unser Gepäck am Flughafen abholen.",
          },
        ],
        meanings: ["to pick up", "to collect"],
        infinitive: "abholen",
        conjugation: {
          ich: "hole ab",
          du: "holst ab",
          er_sie_es: "holt ab",
          wir: "holen ab",
          ihr: "holt ab",
          sie_Sie: "holen ab",
        },
        pp: "abgeholt",
      } as VerbSpec,
    },
    {
      word: "verriegeln",
      level: "A1",
      type: "VERB",
      categories: ["General"],
      spec: {
        samples: [
          {
            sample: "Bitte verriegeln Sie die Tür.",
            translation: "Please lock the door.",
          },
          {
            sample: "Ich habe mein Fahrrad verriegelt.",
            translation: "I locked my bike.",
          },
          {
            translation: "I locked the car before leaving.",
            sample: "Ich habe das Auto vor dem Verlassen verriegelt.",
          },
          {
            translation: "She is locking the windows before going to bed.",
            sample: "Sie verriegelt die Fenster, bevor sie ins Bett geht.",
          },
          {
            translation: "We need to lock the house when we go out.",
            sample: "Wir müssen das Haus verriegeln, wenn wir ausgehen.",
          },
          {
            translation: "I lock the door every night before going to bed.",
            sample:
              "Ich verriegele die Tür jede Nacht, bevor ich ins Bett gehe.",
          },
        ],
        meanings: ["to lock", "to bolt"],
        infinitive: "verriegeln",
        conjugation: {
          ich: "verrieg(e)le",
          du: "verriegelst",
          er_sie_es: "verriegelt",
          wir: "verriegeln",
          ihr: "verriegelt",
          sie_Sie: "verriegeln",
        },
        pp: "verriegelt",
      } as VerbSpec,
    },
    {
      word: "aufräumen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Daily routines"],
      spec: {
        samples: [
          {
            sample: "Ich räume mein Zimmer auf.",
            translation: "I tidy up my room.",
          },
          {
            sample: "Kannst du bitte die Küche aufräumen?",
            translation: "Can you please clean up the kitchen?",
          },
          {
            translation: "I cleaned up the living room yesterday.",
            sample: "Ich habe gestern das Wohnzimmer aufgeräumt.",
          },
          {
            translation: "She is tidying up her desk.",
            sample: "Sie räumt ihren Schreibtisch auf.",
          },
        ],
        meanings: ["to tidy up", "to clean up"],
        infinitive: "aufräumen",
        conjugation: {
          ich: "räume auf",
          du: "räumst auf",
          er_sie_es: "räumt auf",
          wir: "räumen auf",
          ihr: "räumt auf",
          sie_Sie: "räumen auf",
        },
        pp: "aufgeräumt",
      } as VerbSpec,
    },
    {
      word: "Versammlung",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Occupation", "Official matters"],
      spec: {
        samples: [
          {
            translation: "When does the meeting start?",
            sample: "Wann beginnt die Versammlung?",
          },
          {
            sample: "Die Versammlung beginnt um 10 Uhr.",
            translation: "The meeting starts at 10 o'clock.",
          },
          {
            sample: "Wir haben eine Versammlung im Büro.",
            translation: "We have a meeting at the office.",
          },
          {
            translation: "The assembly will be held in the main hall.",
            sample: "Die Versammlung findet im Hauptsaal statt.",
          },
          {
            translation: "The meeting was very productive.",
            sample: "Die Versammlung war sehr produktiv.",
          },
        ],
        article: "Die",
        meanings: ["meeting", "assembly"],
        plural: "Versammlungen",
      } as NounSpec,
    },
    {
      word: "Stern",
      level: "A1",
      type: "NOUN",
      categories: ["Nature"],
      spec: {
        samples: [
          {
            sample: "Am Himmel sind viele Sterne.",
            translation: "There are many stars in the sky.",
          },
          {
            translation: "The red star is the symbol of the country.",
            sample: "Der rote Stern ist das Symbol des Landes.",
          },
        ],
        article: "Der",
        meanings: ["star"],
        plural: "Sterne",
      } as NounSpec,
    },
    {
      word: "Himmel",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons"],
      spec: {
        samples: [
          { sample: "Der Himmel ist blau.", translation: "The sky is blue." },
          {
            sample: "Am Abend sieht der Himmel schön aus.",
            translation: "The sky looks beautiful in the evening.",
          },
          {
            translation: "The sky is clear today.",
            sample: "Der Himmel ist heute klar.",
          },
          {
            translation: "The sky is cloudy.",
            sample: "Der Himmel ist bewölkt.",
          },
          {
            translation: "Birds are flying in the sky.",
            sample: "Vögel fliegen am Himmel.",
          },
        ],
        article: "Der",
        meanings: ["sky", "heaven"],
        plural: "Himmel",
      } as NounSpec,
    },
    {
      word: "Wind",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Aviation"],
      spec: {
        samples: [
          {
            sample: "Der Wind weht stark.",
            translation: "The wind is blowing strongly.",
          },
          {
            translation: "The wind is blowing from the north.",
            sample: "Der Wind weht aus dem Norden.",
          },
          {
            translation: "The wind is strong and blowing from the west.",
            sample: "Der Wind ist stark und weht aus dem Westen.",
          },
          {
            translation: "The wind is light today.",
            sample: "Der Wind ist heute leicht.",
          },
        ],
        article: "Der",
        meanings: ["wind"],
        plural: "Winde",
      } as NounSpec,
    },
    {
      word: "Regen",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons"],
      spec: {
        samples: [
          { sample: "Der Regen fällt.", translation: "The rain is falling." },
          {
            sample: "Im Sommer gibt es oft Regen.",
            translation: "In summer, there is often rain.",
          },
          {
            translation: "The rain is very heavy today.",
            sample: "Der Regen ist heute sehr stark.",
          },
          {
            translation: "I forgot my umbrella and got wet in the rain.",
            sample:
              "Ich habe meinen Regenschirm vergessen und bin im Regen nass geworden.",
          },
        ],
        article: "Der",
        meanings: ["rain"],
        plural: "Regen",
      } as NounSpec,
    },
    {
      word: "Schnee",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons"],
      spec: {
        samples: [
          { sample: "Der Schnee ist weiß.", translation: "The snow is white." },
          {
            sample: "Im Winter gibt es viel Schnee.",
            translation: "In winter, there is a lot of snow.",
          },
          {
            translation: "The snow is melting in the sun.",
            sample: "Der Schnee schmilzt in der Sonne.",
          },
        ],
        article: "Der",
        meanings: ["snow"],
        plural: "Schneefälle",
      } as NounSpec,
    },
    {
      word: "Winter",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          { sample: "Der Winter ist kalt.", translation: "Winter is cold." },
          {
            sample: "Im Winter schneit es oft.",
            translation: "It often snows in winter.",
          },
          {
            translation: "I like winter because I can go skiing.",
            sample: "Ich mag den Winter, weil ich Ski fahren kann.",
          },
        ],
        article: "Der",
        meanings: ["winter"],
        plural: "Winter",
      } as NounSpec,
    },
    {
      word: "Sommer",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im Sommer gehe ich gerne schwimmen.",
            translation: "In summer, I like to go swimming.",
          },
          {
            translation: "I love summer because of the long days.",
            sample: "Ich liebe den Sommer wegen der langen Tage.",
          },
        ],
        article: "Der",
        meanings: ["summer"],
        plural: "Sommer",
      } as NounSpec,
    },
    {
      word: "Frühling",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im Frühling blühen die Blumen.",
            translation: "In spring, the flowers bloom.",
            explanations: [
              {
                question: "Why is Im used here?",
                answer:
                  '"Im" is a contraction of "in dem," which is used to indicate a specific time or season in German. In this case, "im Frühling" means "in spring." The preposition "in" is used with the dative case when referring to seasons, hence "dem Frühling."',
              },
            ],
          },
          {
            translation: "Spring is my favorite season.",
            sample: "Der Frühling ist meine Lieblingsjahreszeit.",
          },
        ],
        article: "Der",
        meanings: ["spring", "springtime"],
        plural: "Frühlinge",
      } as NounSpec,
    },
    {
      word: "Herbst",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im Herbst fallen die Blätter von den Bäumen.",
            translation: "In autumn, the leaves fall from the trees.",
          },
          {
            translation: "Autumn is a beautiful season with colorful leaves.",
            sample:
              "Der Herbst ist eine schöne Jahreszeit mit bunten Blättern.",
          },
        ],
        article: "Der",
        meanings: ["autumn", "fall"],
        plural: "Herbste",
      } as NounSpec,
    },
    {
      word: "April",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im April beginnt der Frühling.",
            translation: "Spring begins in April.",
          },
          {
            translation: "My birthday is in April.",
            sample: "Mein Geburtstag ist im April.",
          },
        ],
        article: "Der",
        meanings: ["April"],
        plural: "Aprile",
      } as NounSpec,
    },
    {
      word: "Januar",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Der Januar ist der erste Monat des Jahres.",
            translation: "January is the first month of the year.",
          },
          {
            translation: "In January, it is usually cold.",
            sample: "Im Januar ist es normalerweise kalt.",
          },
        ],
        article: "Der",
        meanings: ["January"],
        plural: "Januare",
      } as NounSpec,
    },
    {
      word: "Februar",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Der Februar hat 28 oder 29 Tage.",
            translation: "February has 28 or 29 days.",
          },
          {
            translation: "In February, we celebrate Valentine's Day.",
            sample: "Im Februar feiern wir den Valentinstag.",
          },
        ],
        article: "Der",
        meanings: ["February"],
        plural: "Februare",
      } as NounSpec,
    },
    {
      word: "März",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im März beginnt der Frühling.",
            translation: "Spring begins in March.",
          },
          {
            translation: "March is the third month of the year.",
            sample: "Der März ist der dritte Monat des Jahres.",
          },
        ],
        article: "Der",
        meanings: ["March"],
        plural: "Märze",
      } as NounSpec,
    },
    {
      word: "Juni",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im Juni beginnt der Sommer.",
            translation: "Summer begins in June.",
          },
          {
            translation: "June is the sixth month of the year.",
            sample: "Der Juni ist der sechste Monat des Jahres.",
          },
        ],
        article: "Der",
        meanings: ["June"],
        plural: "Junis",
      } as NounSpec,
    },
    {
      word: "Juli",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im Juli ist es oft sehr heiß.",
            translation: "In July, it is often very hot.",
          },
          {
            translation: "July is the seventh month of the year.",
            sample: "Der Juli ist der siebte Monat des Jahres.",
          },
        ],
        article: "Der",
        meanings: ["July"],
        plural: "Julis",
      } as NounSpec,
    },
    {
      word: "August",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im August haben viele Menschen Urlaub.",
            translation: "In August, many people are on vacation.",
          },
          {
            translation: "August is the eighth month of the year.",
            sample: "Der August ist der achte Monat des Jahres.",
          },
        ],
        article: "Der",
        meanings: ["August"],
        plural: "Auguste",
      } as NounSpec,
    },
    {
      word: "Mai",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im Mai blühen viele Blumen.",
            translation: "In May, many flowers bloom.",
          },
          {
            translation: "May is the fifth month of the year.",
            sample: "Der Mai ist der fünfte Monat des Jahres.",
          },
        ],
        article: "Der",
        meanings: ["May"],
        plural: "Maie",
      } as NounSpec,
    },
    {
      word: "Dezember",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im Dezember ist Weihnachten.",
            translation: "In December, it is Christmas.",
          },
          {
            translation: "December is the twelfth month of the year.",
            sample: "Der Dezember ist der zwölfte Monat des Jahres.",
          },
        ],
        article: "Der",
        meanings: ["December"],
        plural: "Dezember",
      } as NounSpec,
    },
    {
      word: "Oktober",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im Oktober fallen die Blätter von den Bäumen.",
            translation: "In October, the leaves fall from the trees.",
          },
          {
            translation: "October is the tenth month of the year.",
            sample: "Der Oktober ist der zehnte Monat des Jahres.",
          },
        ],
        article: "Der",
        meanings: ["October"],
        plural: "Oktobers",
      } as NounSpec,
    },
    {
      word: "November",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and seasons", "Date and time"],
      spec: {
        samples: [
          {
            sample: "Im November wird es oft kalt und regnerisch.",
            translation: "In November, it often becomes cold and rainy.",
          },
          {
            translation: "November is the eleventh month of the year.",
            sample: "Der November ist der elfte Monat des Jahres.",
          },
        ],
        article: "Der",
        meanings: ["November"],
        plural: "November",
      } as NounSpec,
    },
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
      categories: ["Animals and pets"],
      spec: {
        samples: [
          { sample: "Ich habe eine Katze.", translation: "I have a cat." },
          {
            sample: "The cat and the dog are playing together.",
            translation: "Die Katze und der Hund spielen zusammen.",
          },
          {
            translation: "The cat is chaising a mouse.",
            sample: "Die Katze jagt eine Maus.",
          },
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
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          { sample: "Das Auto ist schnell.", translation: "The car is fast." },
          { sample: "Ich fahre ein Auto.", translation: "I am driving a car." },
          {
            sample: "Mein Auto hat ein Problem.",
            translation: "My car has a problem.",
          },
          {
            translation: "How much does the car cost?",
            sample: "Wie viel kostet das Auto?",
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
      categories: ["Nature", "Environment"],
      spec: {
        samples: [
          { sample: "Der Baum ist hoch.", translation: "The tree is tall." },
          {
            sample: "Der Wald hat viele Bäume.",
            translation: "The forest has many trees.",
          },
          {
            translation: "The tall tree was swaying in the wind.",
            sample: "Der hohe Baum schwankte im Wind.",
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
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Der Bus ist pünktlich.",
            translation: "The bus is on time.",
          },
          { sample: "Ich nehme den Bus.", translation: "I take the bus." },
          {
            sample: "Der Bus fährt um 8 Uhr ab.",
            translation: "The bus departs at 8 o'clock.",
          },
          {
            sample: "Wann kommt der nächste Bus?",
            translation: "When does the next bus arrive?",
          },
          {
            sample: "Von welchem Busbahnhof fährt der Bus ab?",
            translation: "From which bus station does the bus depart?",
          },
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
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Ich fahre mit dem Zug.",
            translation: "I am traveling by train.",
          },
          {
            sample: "Der Zug kommt um 10 Uhr an.",
            translation: "The train arrives at 10 o'clock.",
          },
          {
            sample: "Wo ist der Bahnhof für den Zug?",
            translation: "Where is the station for the train?",
          },
          {
            sample: "Der ICE-Zug ist sehr schnell.",
            translation: "The ICE train is very fast.",
          },
          {
            sample: "Der Zug fällt heute aus.",
            translation: "The train is canceled today.",
          },
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
      categories: [
        "Directions and transportation",
        "Sports",
        "Travel and holidays",
      ],
      spec: {
        samples: [
          {
            sample: "Ich fahre mit dem Fahrrad zur Arbeit.",
            translation: "I ride my bicycle to work.",
          },
          {
            sample: "The kid is riding a bicycle in the park.",
            translation: "Das Kind fährt im Park Fahrrad.",
          },
        ],
        article: "Das",
        meanings: ["bicycle", "bike"],
        plural: "Fahrräder",
      } as NounSpec,
    },
    {
      word: "Station",
      level: "A1",
      type: "NOUN",
      categories: [
        "Directions and transportation",
        "Places",
        "Travel and holidays",
      ],
      spec: {
        samples: [
          {
            sample: "Die Station ist in der Nähe.",
            translation: "The station is nearby.",
          },
          {
            sample: "Ich warte an der Station.",
            translation: "I am waiting at the station.",
          },
        ],
        article: "Die",
        meanings: ["station", "stop"],
        plural: "Stationen",
      } as NounSpec,
    },
    {
      word: "Anzeigetafel",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Die Anzeigetafel zeigt die Abfahrtszeiten an.",
            translation: "The display board shows the departure times.",
          },
          {
            sample: "Ich habe die Informationen auf der Anzeigetafel gelesen.",
            translation: "I read the information on the display board.",
          },
        ],
        article: "Die",
        meanings: ["display board", "information board"],
        plural: "Anzeigetafeln",
      } as NounSpec,
    },
    {
      word: "Teilnahme",
      level: "A1",
      type: "NOUN",
      categories: ["Education", "Events"],
      spec: {
        samples: [
          {
            sample: "Die Teilnahme an der Versammlung ist wichtig.",
            translation: "Participation in the meeting is important.",
          },
          {
            translation: "Your participation in the event is appreciated.",
            sample: "Ihre Teilnahme an der Veranstaltung wird geschätzt.",
          },
          {
            translation: "Your participation matters.",
            sample: "Ihre Teilnahme zählt.",
          },
        ],
        article: "Die",
        meanings: ["participation", "attendance"],
        plural: "Teilnahmen",
      } as NounSpec,
    },
    {
      word: "bestätigen",
      level: "A1",
      type: "VERB",
      categories: ["General"],
      spec: {
        samples: [
          {
            sample: "Kannst du den Termin bestätigen?",
            translation: "Can you confirm the appointment?",
          },
          {
            translation: "I confirmed my reservation at the hotel.",
            sample: "Ich habe meine Reservierung im Hotel bestätigt.",
          },
          {
            translation: "She is confirming the details of the project.",
            sample: "Sie bestätigt die Details des Projekts.",
          },
          {
            translation: "We need to confirm our attendance at the event.",
            sample:
              "Wir müssen unsere Teilnahme an der Veranstaltung bestätigen.",
          },
        ],
        meanings: ["to confirm", "to verify"],
        infinitive: "bestätigen",
        conjugation: {
          ich: "bestätige",
          du: "bestätigst",
          er_sie_es: "bestätigt",
          wir: "bestätigen",
          ihr: "bestätigt",
          sie_Sie: "bestätigen",
        },
        pp: "bestätigt",
      } as VerbSpec,
    },
    {
      word: "überprüfen",
      level: "A1",
      type: "VERB",
      categories: ["General"],
      spec: {
        samples: [
          {
            sample: "Kannst du den Fahrplan überprüfen?",
            translation: "Can you check the timetable?",
          },
          {
            translation: "I checked my email this morning.",
            sample: "Ich habe heute Morgen meine E-Mails überprüft.",
          },
          {
            translation: "She is checking the schedule for the meeting.",
            sample: "Sie überprüft den Zeitplan für das Meeting.",
          },
          {
            translation: "We need to check the details before confirming.",
            sample: "Wir müssen die Details überprüfen, bevor wir bestätigen.",
          },
          {
            translation: "I checked the panel",
            sample: "Ich habe die Tafel überprüft.",
          },
        ],
        meanings: ["to check", "to verify"],
        infinitive: "überprüfen",
        conjugation: {
          ich: "überprüfe",
          du: "überprüfst",
          er_sie_es: "überprüft",
          wir: "überprüfen",
          ihr: "überprüft",
          sie_Sie: "überprüfen",
        },
        pp: "überprüft",
      } as VerbSpec,
    },
    {
      word: "Fahrplan",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Der Fahrplan ist an der Haltestelle.",
            translation: "The timetable is at the stop.",
          },
          {
            sample: "Ich habe den Fahrplan überprüft.",
            translation: "I checked the timetable.",
          },
        ],
        article: "Der",
        meanings: ["timetable", "schedule"],
        plural: "Fahrpläne",
      } as NounSpec,
    },
    {
      word: "Spielplatz",
      level: "A1",
      type: "NOUN",
      categories: ["Places"],
      spec: {
        samples: [
          {
            sample: "Die Kinder spielen auf dem Spielplatz.",
            translation: "The children are playing on the playground.",
          },
        ],
        article: "Der",
        meanings: ["playground"],
        plural: "Spielplätze",
      } as NounSpec,
    },
    {
      word: "Sportplatz",
      level: "A1",
      type: "NOUN",
      categories: ["Places", "Sports"],
      spec: {
        samples: [
          {
            sample: "Der Sportplatz ist groß.",
            translation: "The sports field is big.",
          },
          {
            sample: "Wir spielen Fußball auf dem Sportplatz.",
            translation: "We play soccer on the sports field.",
          },
        ],
        article: "Der",
        meanings: ["sports field", "playing field"],
        plural: "Sportplätze",
      } as NounSpec,
    },
    {
      word: "Volkshochschule",
      level: "A1",
      type: "NOUN",
      categories: ["Education", "Places"],
      spec: {
        samples: [
          {
            sample: "Ich besuche einen Kurs an der Volkshochschule.",
            translation: "I am attending a course at the community college.",
          },
          {
            sample: "Die Volkshochschule bietet viele Kurse an.",
            translation: "The community college offers many courses.",
          },
        ],
        article: "Die",
        meanings: ["community college", "adult education center"],
        plural: "Volkshochschulen",
      } as NounSpec,
    },
    {
      word: "Schwimmbad",
      level: "A1",
      type: "NOUN",
      categories: ["Places", "Sports"],
      spec: {
        samples: [
          {
            sample: "Wir gehen ins Schwimmbad.",
            translation: "We are going to the swimming pool.",
          },
          {
            sample: "Das Schwimmbad ist sehr sauber.",
            translation: "The swimming pool is very clean.",
          },
        ],
        article: "Das",
        meanings: ["swimming pool", "pool"],
        plural: "Schwimmbäder",
      } as NounSpec,
    },
    {
      word: "U-Bahn",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Wo ist die nächste U-Bahn-Station?",
            translation: "Where is the next subway station?",
          },
          {
            sample: "Die U-Bahn fährt alle 5 Minuten.",
            translation: "The subway runs every 5 minutes.",
          },
          {
            sample: "Die U-Bahn ist heute sehr voll.",
            translation: "The subway is very crowded today.",
          },
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
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Ich nehme die S-Bahn zur Arbeit.",
            translation: "I take the commuter train to work.",
          },
          {
            sample: "Die S-Bahn fährt bis Mitternacht.",
            translation: "The commuter train runs until midnight.",
          },
        ],
        article: "Die",
        meanings: ["commuter train"],
        plural: "S-Bahnen",
      } as NounSpec,
    },
    {
      word: "Supermarkt",
      level: "A1",
      type: "NOUN",
      categories: ["Places", "Shopping and clothing", "Food and drinks"],
      spec: {
        samples: [
          {
            translation: "Can you buy some bread at the supermarket?",
            sample: "Kannst du im Supermarkt etwas Brot kaufen?",
          },
          {
            sample: "Der Supermarkt ist um die Ecke.",
            translation: "The supermarket is around the corner.",
          },
        ],
        article: "Der",
        meanings: ["supermarket"],
        plural: "Supermärkte",
      } as NounSpec,
    },
    {
      word: "Tankstelle",
      level: "A1",
      type: "NOUN",
      categories: [
        "Directions and transportation",
        "Places",
        "Travel and holidays",
      ],
      spec: {
        samples: [
          {
            sample: "Die Tankstelle ist gleich hier.",
            translation: "The gas station is right here.",
          },
          {
            sample: "Ich muss zur Tankstelle fahren.",
            translation: "I need to drive to the gas station.",
          },
        ],
        article: "Die",
        meanings: ["gas station", "petrol station"],
        plural: "Tankstellen",
      } as NounSpec,
    },
    {
      word: "Parkplatz",
      level: "A1",
      type: "NOUN",
      categories: [
        "Directions and transportation",
        "Places",
        "Travel and holidays",
      ],
      spec: {
        samples: [
          {
            sample: "Der Parkplatz ist voll.",
            translation: "The parking lot is full.",
          },
          {
            sample: "Ich suche einen Parkplatz.",
            translation: "I am looking for a parking space.",
          },
        ],
        article: "Der",
        meanings: ["parking lot", "parking space"],
        plural: "Parkplätze",
      } as NounSpec,
    },
    {
      word: "Kino",
      level: "A1",
      type: "NOUN",
      categories: ["Places", "Entertainment"],
      spec: {
        samples: [
          {
            sample: "Wir gehen heute Abend ins Kino.",
            translation: "We are going to the cinema tonight.",
          },
        ],
        article: "Das",
        meanings: ["cinema", "movie theater"],
        plural: "Kinos",
      } as NounSpec,
    },
    {
      word: "Rathaus",
      level: "A1",
      type: "NOUN",
      categories: ["Places", "City life and errands", "Official matters"],
      spec: {
        samples: [
          {
            sample: "Das Rathaus ist im Stadtzentrum.",
            translation: "The town hall is in the city center.",
          },
        ],
        article: "Das",
        meanings: ["town hall", "city hall"],
        plural: "Rathäuser",
      } as NounSpec,
    },
    {
      word: "Morgen",
      level: "A1",
      type: "NOUN",
      categories: ["Date and time"],
      spec: {
        samples: [
          {
            sample: "Am Morgen trinke ich Kaffee.",
            translation: "In the morning, I drink coffee.",
          },
          {
            sample: "Morgen wird das Wetter besser.",
            translation: "Tomorrow, the weather will be better.",
          },
          {
            translation: "I have an appointment tomorrow.",
            sample: "Ich habe morgen einen Termin.",
          },
        ],
        article: "Der",
        meanings: ["morning", "tomorrow"],
        plural: "Morgen",
      } as NounSpec,
    },
    {
      word: "Abend",
      level: "A1",
      type: "NOUN",
      categories: ["Date and time"],
      spec: {
        samples: [
          {
            sample: "Am Abend gehe ich spazieren.",
            translation: "In the evening, I go for a walk.",
          },
          {
            sample: "Der Abend ist ruhig.",
            translation: "The evening is quiet.",
          },
        ],
        article: "Der",
        meanings: ["evening"],
        plural: "Abende",
      } as NounSpec,
    },
    {
      word: "Nacht",
      level: "A1",
      type: "NOUN",
      categories: ["Date and time"],
      spec: {
        samples: [
          {
            sample: "In der Nacht schlafe ich.",
            translation: "At night, I sleep.",
          },
          {
            sample: "Die Nacht ist dunkel.",
            translation: "The night is dark.",
          },
        ],
        article: "Die",
        meanings: ["night"],
        plural: "Nächte",
      } as NounSpec,
    },
    {
      word: "Straße",
      level: "A1",
      type: "NOUN",
      categories: [
        "Directions and transportation",
        "Places",
        "Travel and holidays",
        "City life and errands",
      ],
      spec: {
        samples: [
          {
            translation: "My apartment is on this street.",
            sample: "Meine Wohnung ist in dieser Straße.",
          },
          {
            translation: "The street is full of shops.",
            sample: "Die Straße ist voller Geschäfte.",
          },
          {
            translation: "The was a church at the end of the street.",
            sample: "Am Ende der Straße gab es eine Kirche.",
          },
        ],
        article: "Die",
        meanings: ["street", "road"],
        plural: "Straßen",
      } as NounSpec,
    },
    {
      word: "Brücke",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation", "Places"],
      spec: {
        samples: [
          {
            sample: "Die Brücke verbindet zwei Städte.",
            translation: "The bridge connects two cities.",
          },
          {
            translation: "She is watching the sunset from the bridge.",
            sample: "Sie schaut den Sonnenuntergang von der Brücke aus.",
          },
          {
            translation: "The bridge is under construction.",
            sample: "Die Brücke ist im Bau.",
          },
        ],
        article: "Die",
        meanings: ["bridge"],
        plural: "Brücken",
      } as NounSpec,
    },
    {
      word: "Ampel",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation"],
      spec: {
        samples: [
          {
            sample: "Die Ampel ist rot.",
            translation: "The traffic light is red.",
          },
          {
            sample: "An der Ampel musst du warten.",
            translation: "You have to wait at the traffic light.",
          },
          {
            sample: "An der Ampel kannst du rechts abbiegen.",
            translation: "You can turn right at the traffic light.",
          },
          {
            translation: "You can not turn left at the traffic light.",
            sample: "An der Ampel darfst du nicht links abbiegen.",
          },
        ],
        article: "Die",
        meanings: ["traffic light", "stoplight"],
        plural: "Ampeln",
      } as NounSpec,
    },
    {
      word: "Kreuzung",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation"],
      spec: {
        samples: [
          {
            sample: "An der Kreuzung musst du links abbiegen.",
            translation: "At the intersection, you must turn left.",
          },
        ],
        article: "Die",
        meanings: ["intersection", "crossroad"],
        plural: "Kreuzungen",
      } as NounSpec,
    },
    {
      word: "Bahnhof",
      level: "A1",
      type: "NOUN",
      categories: [
        "Directions and transportation",
        "Places",
        "Travel and holidays",
      ],
      spec: {
        samples: [
          {
            translation: "The train station is not far from here.",
            sample: "Der Bahnhof ist nicht weit von hier entfernt.",
          },
          {
            sample: "Der Bahnhof ist in der Nähe des Stadtzentrums.",
            translation: "The train station is near the city center.",
          },
          {
            sample: "Ich warte am Bahnhof auf den Zug.",
            translation: "I am waiting at the train station for the train.",
          },
        ],
        article: "Der",
        meanings: ["train station", "railway station"],
        plural: "Bahnhöfe",
      } as NounSpec,
    },
    {
      word: "Straßenbahn",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation", "Travel and holidays"],
      spec: {
        samples: [
          {
            translation: "I take the tram to work every day.",
            sample: "Ich nehme jeden Tag die Straßenbahn zur Arbeit.",
          },
          {
            translation: "The tram is very convenient in the city.",
            sample: "Die Straßenbahn ist in der Stadt sehr praktisch.",
          },
        ],
        article: "Die",
        meanings: ["tram", "streetcar"],
        plural: "Straßenbahnen",
      } as NounSpec,
    },
    {
      word: "Taxi",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation"],
      spec: {
        samples: [
          {
            translation: "I took a taxi to the airport.",
            sample: "Ich habe ein Taxi zum Flughafen genommen.",
          },
          {
            translation: "Taking a taxi is more expensive than the bus.",
            sample: "Ein Taxi zu nehmen ist teurer als der Bus.",
          },
        ],
        article: "Das",
        meanings: ["taxi", "cab"],
        plural: "Taxis",
      } as NounSpec,
    },
    {
      word: "Bushaltestelle",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation", "Places"],
      spec: {
        samples: [
          {
            sample: "Die Bushaltestelle ist um die Ecke.",
            translation: "The bus stop is around the corner.",
          },
          {
            sample: "An der Bushaltestelle warten viele Leute.",
            translation: "Many people are waiting at the bus stop.",
          },
        ],
        article: "Die",
        meanings: ["bus stop"],
        plural: "Bushaltestellen",
      } as NounSpec,
    },
    {
      word: "Gleis",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation", "Places"],
      spec: {
        samples: [
          {
            sample: "Der Zug fährt von Gleis 3 ab.",
            translation: "The train departs from platform 3.",
          },
          {
            translation: "The train is arriving at platform 5.",
            sample: "Der Zug kommt auf Gleis 5 an.",
          },
          {
            translation: "From which platform does the train depart?",
            sample: "Von welchem Gleis fährt der Zug ab?",
          },
          {
            sample: "Wo ist das Gleis für den ICE-Zug?",
            translation: "Where is the platform for the ICE train?",
          },
        ],
        article: "Das",
        meanings: ["platform", "track"],
        plural: "Gleise",
      } as NounSpec,
    },
    {
      word: "Vorname",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Introduction"],
      spec: {
        samples: [
          {
            sample: "Wie ist dein Vorname?",
            translation: "What is your first name?",
          },
          {
            sample: "Mein Vorname ist Anna.",
            translation: "My first name is Anna.",
          },
          {
            sample: "Schreib bitte deinen Vornamen auf.",
            translation: "Please write down your first name.",
          },
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
          {
            sample: "Wie ist dein Nachname?",
            translation: "What is your last name?",
          },
          {
            sample: "Mein Nachname ist Müller.",
            translation: "My last name is Müller.",
          },
          {
            sample: "Schreib bitte deinen Nachnamen auf.",
            translation: "Please write down your last name.",
          },
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
        samples: [
          { sample: "Wie alt bist du?", translation: "How old are you?" },
          {
            sample: "Mein Alter ist 25 Jahre.",
            translation: "My age is 25 years.",
          },
        ],
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
          {
            sample: "Meine Adresse ist Hauptstraße 5.",
            translation: "My address is Hauptstraße 5.",
          },
          {
            sample: "Kannst du mir deine Adresse geben?",
            translation: "Can you give me your address?",
          },
          {
            sample: "Die Adresse steht auf dem Brief.",
            translation: "The address is on the letter.",
          },
          {
            sample: "Die Adresse ist nicht korrekt.",
            translation: "The address is not correct.",
          },
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
        samples: [
          {
            sample: "Du kannst mich unter dieser Telefonnummer erreichen.",
            translation: "You can reach me at this phone number.",
          },
        ],
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
          {
            sample: "Zeigen Sie bitte Ihren Ausweis.",
            translation: "Please show your ID.",
          },
          {
            sample: "Mein Ausweis ist abgelaufen.",
            translation: "My ID has expired.",
          },
          {
            sample: "Ich habe meinen Ausweis verloren.",
            translation: "I lost my ID.",
          },
          {
            sample: "Ich habe meinen Ausweis dabei.",
            translation: "I have my ID with me.",
          },
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
      categories: ["General", "Introduction", "Travel and holidays"],
      spec: {
        samples: [
          {
            sample: "Ich brauche einen neuen Pass.",
            translation: "I need a new passport.",
          },
          {
            sample: "Mein Pass ist gültig bis 2025.",
            translation: "My passport is valid until 2025.",
          },
          {
            sample: "Haben Sie Ihren Pass dabei?",
            translation: "Do you have your passport with you?",
          },
        ],
        article: "Der",
        meanings: ["passport"],
        plural: "Pässe",
      } as NounSpec,
    },
    {
      word: "Geburtsdatum",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Introduction"],
      spec: {
        samples: [
          {
            sample: "Mein Geburtsdatum ist der 1. Januar 1990.",
            translation: "My date of birth is January 1, 1990.",
          },
          {
            sample: "Bitte geben Sie Ihr Geburtsdatum an.",
            translation: "Please provide your date of birth.",
          },
        ],
        article: "Das",
        meanings: ["date of birth"],
        plural: "Geburtsdaten",
      } as NounSpec,
    },
    {
      word: "Familie",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            sample: "Meine Familie ist sehr wichtig für mich.",
            translation: "My family is very important to me.",
          },
          {
            sample: "Ich habe eine große Familie.",
            translation: "I have a big family.",
          },
        ],
        article: "Die",
        meanings: ["family"],
        plural: "Familien",
      } as NounSpec,
    },
    {
      word: "Bruder",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            sample: "Mein Bruder ist älter als ich.",
            translation: "My brother is older than me.",
          },
          {
            sample: "Ich habe einen jüngeren Bruder.",
            translation: "I have a younger brother.",
          },
        ],
        article: "Der",
        meanings: ["brother"],
        plural: "Brüder",
      } as NounSpec,
    },
    {
      word: "Schwester",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            sample: "Meine Schwester studiert Medizin.",
            translation: "My sister is studying medicine.",
          },
          {
            sample: "Ich habe zwei Schwestern.",
            translation: "I have two sisters.",
          },
        ],
        article: "Die",
        meanings: ["sister"],
        plural: "Schwestern",
      } as NounSpec,
    },
    {
      word: "Mutter",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            sample: "Meine Mutter kocht gerne.",
            translation: "My mother likes to cook.",
          },
          {
            sample: "Ich besuche meine Mutter am Wochenende.",
            translation: "I visit my mother on the weekend.",
          },
        ],
        article: "Die",
        meanings: ["mother", "mom"],
        plural: "Mütter",
      } as NounSpec,
    },
    {
      word: "Kind",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            sample: "Das Kind spielt im Garten.",
            translation: "The child is playing in the garden.",
          },
          {
            sample: "Ich habe zwei Kinder.",
            translation: "I have two children.",
          },
          {
            translation: "How many kids do you have?",
            sample: "Wie viele Kinder hast du?",
          },
        ],
        article: "Das",
        meanings: ["child", "kid"],
        plural: "Kinder",
      } as NounSpec,
    },
    {
      word: "Vater",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            sample: "Mein Vater arbeitet als Ingenieur.",
            translation: "My father works as an engineer.",
          },
          {
            sample: "Ich rufe meinen Vater jeden Sonntag an.",
            translation: "I call my father every Sunday.",
          },
        ],
        article: "Der",
        meanings: ["father", "dad"],
        plural: "Väter",
      } as NounSpec,
    },
    {
      word: "Eltern",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            translation: "My parents suppoted me to study abroad.",
            sample:
              "Meine Eltern haben mich unterstützt, im Ausland zu studieren.",
          },
          {
            translation: "He lost his parents in a car accident.",
            sample: "Er hat seine Eltern bei einem Autounfall verloren.",
          },
          {
            translation: "Her paretns were proud of her achievements.",
            sample: "Ihre Eltern waren stolz auf ihre Leistungen.",
          },
        ],
        article: "Die",
        meanings: ["parents"],
        plural: "Eltern",
      } as NounSpec,
    },
    {
      word: "Freund",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            sample: "Mein Freund heißt Max.",
            translation: "My friend's name is Max.",
          },
          {
            sample: "Ich treffe mich heute mit meinem Freund.",
            translation: "I am meeting my friend today.",
          },
          {
            sample: "Er ist mein bester Freund.",
            translation: "He is my best friend.",
          },
        ],
        article: "Der",
        meanings: ["friend", "boyfriend"],
        plural: "Freunde",
      } as NounSpec,
    },
    {
      word: "Oma",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            translation: "What is your grandmother's name?",
            sample: "Wie heißt deine Oma?",
          },
          {
            translation: "My grandmother bakes the best cookies.",
            sample: "Meine Oma backt die besten Kekse.",
          },
        ],
        article: "Die",
        meanings: ["grandmother", "grandma"],
        plural: "Omas",
      } as NounSpec,
    },
    {
      word: "Opa",
      level: "A1",
      type: "NOUN",
      categories: ["Family and friends"],
      spec: {
        samples: [
          {
            translation: "My grandfather tells interesting stories.",
            sample: "Mein Opa erzählt interessante Geschichten.",
          },
          {
            translation: "I visit my grandfather every Sunday.",
            sample: "Ich besuche meinen Opa jeden Sonntag.",
          },
        ],
        article: "Der",
        meanings: ["grandfather", "grandpa"],
        plural: "Opas",
      } as NounSpec,
    },
    {
      word: "Schüler",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            sample: "Der Schüler lernt Deutsch.",
            translation: "The student is learning German.",
          },
          {
            sample: "Die Schüler sind fleißig.",
            translation: "The students are diligent.",
          },
          {
            translation: "The student was expelled.",
            sample: "Der Schüler wurde ausgeschlossen.",
          },
          {
            translation: "I am a student at the local high school.",
            sample: "Ich bin Schüler an der örtlichen Gesamtschule.",
          },
        ],
        article: "Der",
        meanings: ["student", "pupil"],
        plural: "Schüler",
      } as NounSpec,
    },
    {
      word: "Lehrer",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            sample: "Der Lehrer erklärt die Grammatik.",
            translation: "The teacher explains the grammar.",
          },
          {
            sample: "Der Lehrer hat viel Erfahrung.",
            translation: "The teacher has a lot of experience.",
          },
        ],
        article: "Der",
        meanings: ["teacher", "instructor"],
        plural: "Lehrer",
      } as NounSpec,
    },
    {
      word: "Schule",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            sample: "Die Schule beginnt um 8 Uhr.",
            translation: "School starts at 8 o'clock.",
          },
          {
            sample: "Ich gehe jeden Tag zur Schule.",
            translation: "I go to school every day.",
          },
        ],
        article: "Die",
        meanings: ["school"],
        plural: "Schulen",
      } as NounSpec,
    },
    {
      word: "Universität",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            translation: "I study computer science at the university.",
            sample: "Ich studiere Informatik an der Universität.",
          },
          {
            translation: "The entrance exam for the university is difficult.",
            sample: "Die Aufnahmeprüfung für die Universität ist schwierig.",
          },
          {
            translation: "He graduated from the university last year.",
            sample: "Er hat letztes Jahr die Universität abgeschlossen.",
          },
        ],
        article: "Die",
        meanings: ["university"],
        plural: "Universitäten",
      } as NounSpec,
    },
    {
      word: "Bibliothek",
      level: "A1",
      type: "NOUN",
      categories: ["Education", "Places"],
      spec: {
        samples: [
          {
            sample: "Ich gehe oft in die Bibliothek, um zu lernen.",
            translation: "I often go to the library to study.",
          },
        ],
        article: "Die",
        meanings: ["library"],
        plural: "Bibliotheken",
      } as NounSpec,
    },
    {
      word: "Lehrbuch",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            sample: "Das Lehrbuch ist sehr hilfreich.",
            translation: "The textbook is very helpful.",
          },
        ],
        article: "Das",
        meanings: ["textbook"],
        plural: "Lehrbücher",
      } as NounSpec,
    },
    {
      word: "Tafel",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            translation: "The teacher writes the homework on the board.",
            sample: "Der Lehrer schreibt die Hausaufgaben an die Tafel.",
          },
          {
            translation: "Please clean the board after class.",
            sample: "Bitte putz die Tafel nach dem Unterricht.",
          },
        ],
        article: "Die",
        meanings: ["board", "blackboard", "chalkboard"],
        plural: "Tafeln",
      } as NounSpec,
    },
    {
      word: "Unterricht",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            translation: "Could you come to my office after the class?",
            sample: "Könntest du nach dem Unterricht in mein Büro kommen?",
          },
          {
            translation: "The class was very interesting.",
            sample: "Der Unterricht war sehr interessant.",
          },
          {
            translation: "I have German lessons twice a week.",
            sample: "Ich habe zweimal pro Woche Deutschunterricht.",
          },
        ],
        article: "Der",
        meanings: ["lesson", "class", "instruction"],
        plural: "Unterrichte",
      } as NounSpec,
    },
    {
      word: "Heft",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            translation: "He had logged all his notes in the notebook.",
            sample: "Er hatte alle seine Notizen im Heft festgehalten.",
          },
          {
            translation: "I need a new notebook for school.",
            sample: "Ich brauche ein neues Heft für die Schule.",
          },
        ],
        article: "Das",
        meanings: ["notebook"],
        plural: "Hefte",
      } as NounSpec,
    },
    {
      word: "Stift",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            translation: "He is writing with a pen.",
            sample: "Er schreibt mit einem Stift.",
          },
          {
            translation: "To complete the form, you need a pen.",
            sample: "Um das Formular auszufüllen, brauchst du einen Stift.",
          },
        ],
        article: "Der",
        meanings: ["pen", "pencil"],
        plural: "Stifte",
      } as NounSpec,
    },
    {
      word: "Tasche",
      level: "A1",
      type: "NOUN",
      categories: ["Education", "General"],
      spec: {
        samples: [
          {
            translation: "Her bag is very stylish.",
            sample: "Ihre Tasche ist sehr stylisch.",
          },
          {
            translation: "I carry my books in a big bag.",
            sample: "Ich trage meine Bücher in einer großen Tasche.",
          },
          {
            translation: "The bag was empty.",
            sample: "Die Tasche war leer.",
          },
        ],
        article: "Die",
        meanings: ["bag", "purse"],
        plural: "Taschen",
      } as NounSpec,
    },
    {
      word: "Rucksack",
      level: "A1",
      type: "NOUN",
      categories: ["Education"],
      spec: {
        samples: [
          {
            translation: "He carries a lot of things in his backpack.",
            sample: "Er trägt viele Sachen in seinem Rucksack.",
          },
          {
            translation: "What do you have in your backpack?",
            sample: "Was hast du in deinem Rucksack?",
          },
        ],
        article: "Der",
        meanings: ["backpack", "rucksack"],
        plural: "Rucksäcke",
      } as NounSpec,
    },
    {
      word: "Arzt",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "I have an appointment with the doctor.",
            sample: "Ich habe einen Termin beim Arzt.",
          },
          {
            translation: "The doctor examined me.",
            sample: "Der Arzt hat mich untersucht.",
          },
          {
            translation: "The doctor works in a hospital.",
            sample: "Der Arzt arbeitet in einem Krankenhaus.",
          },
        ],
        article: "Der",
        meanings: ["doctor", "physician"],
        plural: "Ärzte",
      } as NounSpec,
    },
    {
      word: "Zahnarzt",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "I have a toothache and need to see the dentist.",
            sample: "Ich habe Zahnschmerzen und muss zum Zahnarzt gehen.",
          },
          {
            translation: "The dentist cleaned my teeth.",
            sample: "Der Zahnarzt hat meine Zähne gereinigt.",
          },
          {
            translation: "When I was a child, I was afraid of the dentists.",
            sample: "Als ich ein Kind war, hatte ich Angst vor dem Zahnarzt.",
          },
        ],
        article: "Der",
        meanings: ["dentist"],
        plural: "Zahnärzte",
      } as NounSpec,
    },
    {
      word: "Gebäude",
      level: "A1",
      type: "NOUN",
      categories: ["Places"],
      spec: {
        samples: [
          {
            sample: "Das Gebäude ist sehr alt.",
            translation: "The building is very old.",
          },
          {
            sample: "In diesem Gebäude gibt es viele Wohnungen.",
            translation: "There are many apartments in this building.",
          },
        ],
        article: "Das",
        meanings: ["building"],
        plural: "Gebäude",
      } as NounSpec,
    },
    {
      word: "Kirche",
      level: "A1",
      type: "NOUN",
      categories: ["Places", "Religion"],
      spec: {
        samples: [
          {
            sample: "Die Kirche ist ein historisches Gebäude.",
            translation: "The church is a historic building.",
          },
          {
            sample: "Wir gehen jeden Sonntag in die Kirche.",
            translation: "We go to church every Sunday.",
          },
        ],
        article: "Die",
        meanings: ["church"],
        plural: "Kirchen",
      } as NounSpec,
    },
    {
      word: "Krankenhaus",
      level: "A1",
      type: "NOUN",
      categories: ["Health", "Places"],
      spec: {
        samples: [
          {
            translation: "She works as a nurse in a hospital.",
            sample: "Sie arbeitet als Krankenschwester in einem Krankenhaus.",
          },
          {
            translation: "The hospital was full of patients.",
            sample: "Das Krankenhaus war voller Patienten.",
          },
        ],
        article: "Das",
        meanings: ["hospital"],
        plural: "Krankenhäuser",
      } as NounSpec,
    },
    {
      word: "Apotheke",
      level: "A1",
      type: "NOUN",
      categories: ["Health", "Places"],
      spec: {
        samples: [
          {
            translation: "I need to go to the pharmacy to buy medicine.",
            sample: "Ich muss in die Apotheke gehen, um Medikamente zu kaufen.",
          },
          {
            translation: "The pharmacy is open until 8 PM.",
            sample: "Die Apotheke ist bis 20 Uhr geöffnet.",
          },
        ],
        article: "Die",
        meanings: ["pharmacy", "drugstore"],
        plural: "Apotheken",
      } as NounSpec,
    },
    {
      word: "Medikament",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "The doctor prescribed me a new medication.",
            sample: "Der Arzt hat mir ein neues Medikament verschrieben.",
          },
          {
            translation: "You should take the medication with food.",
            sample: "Du solltest das Medikament mit Essen einnehmen.",
          },
          {
            translation: "The meidcation has some side effects.",
            sample: "Das Medikament hat einige Nebenwirkungen.",
          },
        ],
        article: "Das",
        meanings: ["medication", "medicine"],
        plural: "Medikamente",
      } as NounSpec,
    },
    {
      word: "Krankenwagen",
      level: "A1",
      type: "NOUN",
      categories: ["Health", "Directions and transportation"],
      spec: {
        samples: [
          {
            translation: "The ambulance arrived quickly at the accident scene.",
            sample: "Der Krankenwagen kam schnell an der Unfallstelle an.",
          },
          {
            translation: "He was taken to the hospital by ambulance.",
            sample: "Er wurde mit dem Krankenwagen ins Krankenhaus gebracht.",
          },
        ],
        article: "Der",
        meanings: ["ambulance"],
        plural: "Krankenwagen",
      } as NounSpec,
    },
    {
      word: "Notfall",
      level: "A1",
      type: "NOUN",
      categories: ["Health", "Emergency"],
      spec: {
        samples: [
          {
            translation: "In case of emergency, call 112.",
            sample: "Im Notfall rufen Sie 112 an.",
          },
        ],
        article: "Der",
        meanings: ["emergency"],
        plural: "Notfälle",
      } as NounSpec,
    },
    {
      word: "Krankenschwester",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "The nurse gave him his medication.",
            sample: "Die Krankenschwester hat ihm sein Medikament gegeben.",
          },
          {
            translation: "She wants to become a nurse.",
            sample: "Sie möchte Krankenschwester werden.",
          },
        ],
        article: "Die",
        meanings: ["nurse"],
        plural: "Krankenschwestern",
      } as NounSpec,
    },
    {
      word: "Kopfschmerz",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "I have a headache and need to rest.",
            sample: "Ich habe Kopfschmerzen und muss mich ausruhen.",
          },
        ],
        article: "Der",
        meanings: ["headache"],
        plural: "Kopfschmerzen",
      } as NounSpec,
    },
    {
      word: "Fieber",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "She has a fever and should see a doctor.",
            sample: "Sie hat Fieber und sollte einen Arzt aufsuchen.",
          },
        ],
        article: "Das",
        meanings: ["fever"],
        plural: "Fieber",
      } as NounSpec,
    },
    {
      word: "Husten",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He has a cough and is taking medicine.",
            sample: "Er hat Husten und nimmt Medikamente.",
          },
        ],
        article: "Der",
        meanings: ["cough"],
        plural: "Husten",
      } as NounSpec,
    },
    {
      word: "Schnupfen",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "I have a cold and a runny nose.",
            sample: "Ich habe Schnupfen und eine laufende Nase.",
          },
        ],
        article: "Der",
        meanings: ["cold", "runny nose"],
        plural: "Schnupfen",
      } as NounSpec,
    },
    {
      word: "Allergie",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "She doesn't have any allergies.",
            sample: "Sie hat keine Allergien.",
          },
          {
            translation: "I am allergic to pollen.",
            sample: "Ich bin allergisch gegen Pollen.",
          },
        ],
        article: "Die",
        meanings: ["allergy"],
        plural: "Allergien",
      } as NounSpec,
    },
    {
      word: "Bäckerei",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks", "Places"],
      spec: {
        samples: [
          {
            translation: "I buy fresh bread from the bakery every morning.",
            sample: "Ich kaufe jeden Morgen frisches Brot von der Bäckerei.",
          },
          {
            translation: "The bakery is located on Main Street.",
            sample: "Die Bäckerei befindet sich in der Hauptstraße.",
          },
        ],
        article: "Die",
        meanings: ["bakery"],
        plural: "Bäckereien",
      } as NounSpec,
    },
    {
      word: "Brot",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "I like to eat bread with butter.",
            sample: "Ich esse gerne Brot mit Butter.",
          },
          {
            translation: "The bakery sells fresh bread every morning.",
            sample: "Die Bäckerei verkauft jeden Morgen frisches Brot.",
          },
          {
            translation: "Please cut the bread.",
            sample: "Bitte schneiden Sie das Brot.",
          },
        ],
        article: "Das",
        meanings: ["bread"],
        plural: "Brote",
      } as NounSpec,
    },
    {
      word: "Tomate",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "I like to eat tomatoes in my salad.",
            sample: "Ich esse gerne Tomaten in meinem Salat.",
          },
          {
            translation: "The tomato is red and juicy.",
            sample: "Die Tomate ist rot und saftig.",
          },
          {
            translation: "Tomato has a lot of vitamin C.",
            sample: "Die Tomate hat viel Vitamin C.",
          },
        ],
        article: "Die",
        meanings: ["tomato"],
        plural: "Tomaten",
      } as NounSpec,
    },
    {
      word: "Käse",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "I like to eat cheese with bread.",
            sample: "Ich esse gerne Käse mit Brot.",
          },
          {
            translation: "The cheese is made from cow's milk.",
            sample: "Der Käse wird aus Kuhmilch hergestellt.",
          },
          {
            translation: "The cheese smells strong.",
            sample: "Der Käse riecht stark.",
          },
          {
            translation: "Switzerland is famous for its cheese.",
            sample: "Die Schweiz ist berühmt für ihren Käse.",
          },
        ],
        article: "Der",
        meanings: ["cheese"],
        plural: "Käse",
      } as NounSpec,
    },
    {
      word: "Milch",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "I drink milk every morning.",
            sample: "Ich trinke jeden Morgen Milch.",
          },
          {
            translation: "The milk is fresh and cold.",
            sample: "Die Milch ist frisch und kalt.",
          },
          {
            translation: "The doctor told me to drink more milk.",
            sample: "Der Arzt hat mir gesagt, ich soll mehr Milch trinken.",
          },
        ],
        article: "Die",
        meanings: ["milk"],
        plural: "Milchsorten",
      } as NounSpec,
    },
    {
      word: "Wasser",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "I drink a lot of water every day.",
            sample: "Ich trinke jeden Tag viel Wasser.",
          },
          {
            translation: "You should drink water",
            sample: "Du solltest Wasser trinken",
          },
        ],
        article: "Das",
        meanings: ["water"],
        plural: "Wässer",
      } as NounSpec,
    },
    {
      word: "Saft",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "I like to drink orange juice.",
            sample: "Ich trinke gerne Orangensaft.",
          },
          {
            translation: "The juice is fresh and sweet.",
            sample: "Der Saft ist frisch und süß.",
          },
        ],
        article: "Der",
        meanings: ["juice"],
        plural: "Säfte",
      } as NounSpec,
    },
    {
      word: "Bier",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "He likes to drink beer with his friends.",
            sample: "Er trinkt gerne Bier mit seinen Freunden.",
          },
          {
            translation: "The oktoberfest is famous for its beer.",
            sample: "Das Oktoberfest ist berühmt für sein Bier.",
          },
        ],
        article: "Das",
        meanings: ["beer"],
        plural: "Biere",
      } as NounSpec,
    },
    {
      word: "Wein",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "She enjoys a glass of wine in the evening.",
            sample: "Sie genießt abends ein Glas Wein.",
          },
          {
            translation: "The wine is from Italy.",
            sample: "Der Wein ist aus Italien.",
          },
        ],
        article: "Der",
        meanings: ["wine"],
        plural: "Weine",
      } as NounSpec,
    },
    {
      word: "Kaffee",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "I like to drink coffee in the morning.",
            sample: "Ich trinke morgens gerne Kaffee.",
          },
          {
            translation: "The coffee is hot and strong.",
            sample: "Der Kaffee ist heiß und stark.",
          },
        ],
        article: "Der",
        meanings: ["coffee"],
        plural: "Kaffees",
      } as NounSpec,
    },
    {
      word: "Tee",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "She drinks tea with lemon and honey.",
            sample: "Sie trinkt Tee mit Zitrone und Honig.",
          },
        ],
        article: "Der",
        meanings: ["tea"],
        plural: "Tees",
      } as NounSpec,
    },
    {
      word: "Fleisch",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "He doesn't eat meat.",
            sample: "Er isst kein Fleisch.",
          },
          {
            translation: "The meat is fresh and tender.",
            sample: "Das Fleisch ist frisch und zart.",
          },
          {
            translation: "She bought meat at the butcher's.",
            sample: "Sie hat Fleisch beim Metzger gekauft.",
          },
        ],
      } as NounSpec,
    },
    {
      word: "Gemüse",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "The vegetables are healthy and nutritious.",
            sample: "Das Gemüse ist gesund und nahrhaft.",
          },
        ],
        article: "Das",
        meanings: ["vegetables"],
        plural: "Gemüse",
      } as NounSpec,
    },
    {
      word: "Obst",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "The fruit is fresh and sweet.",
            sample: "Das Obst ist frisch und süß.",
          },
          {
            translation: "Can you buy some fruit at the market?",
            sample: "Kannst du auf dem Markt etwas Obst kaufen?",
          },
          {
            translation: "Apple, banana, and orange are my favorite fruits.",
            sample: "Apfel, Banane und Orange sind meine Lieblingsobstsorten.",
          },
        ],
        article: "Das",
        meanings: ["fruit"],
        plural: "Obstsorten",
      } as NounSpec,
    },
    {
      word: "Zucker",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "I like to put sugar in my coffee.",
            sample: "Ich mag Zucker in meinem Kaffee.",
          },
          {
            translation: "The cake contains a lot of sugar.",
            sample: "Der Kuchen enthält viel Zucker.",
          },
        ],
        article: "Der",
        meanings: ["sugar"],
        plural: "Zucker",
      } as NounSpec,
    },
    {
      word: "Salz",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "Please add some salt to the soup.",
            sample: "Bitte füge der Suppe etwas Salz hinzu.",
          },
          {
            translation: "The salt is in the kitchen cabinet.",
            sample: "Das Salz ist im Küchenschrank.",
          },
        ],
        article: "Das",
        meanings: ["salt"],
        plural: "Salze",
      } as NounSpec,
    },
    {
      word: "Pfeffer",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "Saltz and pepper are common seasonings.",
            sample: "Salz und Pfeffer sind gängige Gewürze.",
          },
        ],
        article: "Der",
        meanings: ["pepper"],
        plural: "Pfeffer",
      } as NounSpec,
    },
    {
      word: "Wurst",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks"],
      spec: {
        samples: [
          {
            translation: "He likes to eat sausage with bread.",
            sample: "Er isst gerne Wurst mit Brot.",
          },
          {
            translation: "The sausage is made from pork.",
            sample: "Die Wurst wird aus Schweinefleisch hergestellt.",
          },
        ],
        article: "Die",
        meanings: ["sausage"],
        plural: "Würste",
      } as NounSpec,
    },
    {
      word: "Alkohol",
      level: "A1",
      type: "NOUN",
      categories: ["Food and drinks", "Health"],
      spec: {
        samples: [
          {
            translation: "He doesn't drink alcohol.",
            sample: "Er trinkt keinen Alkohol.",
          },
          {
            translation: "Alcohol is not allowed in this area.",
            sample: "Alkohol ist in diesem Bereich nicht erlaubt.",
          },
        ],
        article: "Der",
        meanings: ["alcohol"],
        plural: "Alkohole",
      } as NounSpec,
    },
    {
      word: "Schwindel",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "The medication can cause dizziness as a side effect.",
            sample:
              "Das Medikament kann als Nebenwirkung Schwindel verursachen.",
          },
        ],
        article: "Der",
        meanings: ["dizziness", "vertigo"],
        plural: "Schwindel",
      } as NounSpec,
    },
    {
      word: "Nebenwirkung",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "The medication has some side effects.",
            sample: "Das Medikament hat einige Nebenwirkungen.",
          },
        ],
        article: "Die",
        meanings: ["side effect"],
        plural: "Nebenwirkungen",
      } as NounSpec,
    },
    {
      word: "Schmerz",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He has pain in his leg.",
            sample: "Er hat Schmerzen im Bein.",
          },
        ],
        article: "Der",
        meanings: ["pain", "ache"],
        plural: "Schmerzen",
      } as NounSpec,
    },
    {
      word: "Kopf",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "She has a headache.",
            sample: "Sie hat Kopfschmerzen.",
          },
        ],
        article: "Der",
        meanings: ["head"],
        plural: "Köpfe",
      } as NounSpec,
    },
    {
      word: "Auge",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He has blue eyes.",
            sample: "Er hat blaue Augen.",
          },
        ],
        article: "Das",
        meanings: ["eye"],
        plural: "Augen",
      } as NounSpec,
    },
    {
      word: "Ohr",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "She has pierced ears.",
            sample: "Sie hat durchbohrte Ohren.",
          },
          {
            translation: "He whispered it in my ear.",
            sample: "Er hat es mir ins Ohr geflüstert.",
          },
        ],
        article: "Das",
        meanings: ["ear"],
        plural: "Ohren",
      } as NounSpec,
    },
    {
      word: "Mund",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He opened his mouth to speak.",
            sample: "Er öffnete seinen Mund, um zu sprechen.",
          },
        ],
        article: "Der",
        meanings: ["mouth"],
        plural: "Münder",
      } as NounSpec,
    },
    {
      word: "Zahn",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "I brush my teeth every morning.",
            sample: "Ich putze mir jeden Morgen die Zähne.",
          },
        ],
        article: "Der",
        meanings: ["tooth"],
        plural: "Zähne",
      } as NounSpec,
    },
    {
      word: "Zunge",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            sample: "Ich habe mir die Zunge verbrannt.",
            translation: "I burned my tongue.",
          },
        ],
        article: "Die",
        meanings: ["tongue"],
        plural: "Zungen",
      } as NounSpec,
    },
    {
      word: "Hand",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            sample: "Er hat sich die Hand verletzt.",
            translation: "He injured his hand.",
          },
        ],
        article: "Die",
        meanings: ["hand"],
        plural: "Hände",
      } as NounSpec,
    },
    {
      word: "Bein",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            sample: "Sie hat sich das Bein gebrochen.",
            translation: "She broke her leg.",
          },
        ],
        article: "Das",
        meanings: ["leg"],
        plural: "Beine",
      } as NounSpec,
    },
    {
      word: "Fuß",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "His foot is swollen.",
            sample: "Sein Fuß ist geschwollen.",
          },
          {
            sample: "Er geht zu Fuß zur Arbeit.",
            translation: "He walks to work.",
          },
        ],
        article: "Der",
        meanings: ["foot"],
        plural: "Füße",
      } as NounSpec,
    },
    {
      word: "Herz",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "She has a strong heart.",
            sample: "Sie hat ein starkes Herz.",
          },
        ],
        article: "Das",
        meanings: ["heart"],
        plural: "Herzen",
      } as NounSpec,
    },
    {
      word: "Lunge",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "Smoking damages the lungs.",
            sample: "Rauchen schädigt die Lungen.",
          },
        ],
        article: "Die",
        meanings: ["lung"],
        plural: "Lungen",
      } as NounSpec,
    },
    {
      word: "Magen",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He has a stomach ache.",
            sample: "Er hat Magenschmerzen.",
          },
        ],
        article: "Der",
        meanings: ["stomach"],
        plural: "Mägen",
      } as NounSpec,
    },
    {
      word: "Rücken",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "She has back pain.",
            sample: "Sie hat Rückenschmerzen.",
          },
        ],
        article: "Der",
        meanings: ["back"],
        plural: "Rücken",
      } as NounSpec,
    },
    {
      word: "Hals",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He has a sore throat.",
            sample: "Er hat Halsschmerzen.",
          },
        ],
        article: "Der",
        meanings: ["throat", "neck"],
        plural: "Hälse",
      } as NounSpec,
    },
    {
      word: "Blut",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He donates blood regularly.",
            sample: "Er spendet regelmäßig Blut.",
          },
        ],
        article: "Das",
        meanings: ["blood"],
        plural: "Blut",
      } as NounSpec,
    },
    {
      word: "Knochen",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He broke a bone in his arm.",
            sample: "Er hat sich einen Knochen im Arm gebrochen.",
          },
        ],
        article: "Der",
        meanings: ["bone"],
        plural: "Knochen",
      } as NounSpec,
    },
    {
      word: "Muskel",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He has strong muscles.",
            sample: "Er hat starke Muskeln.",
          },
        ],
        article: "Der",
        meanings: ["muscle"],
        plural: "Muskeln",
      } as NounSpec,
    },
    {
      word: "Nerv",
      level: "B1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "He has a nerve injury.",
            sample: "Er hat eine Nervverletzung.",
          },
        ],
        article: "Der",
        meanings: ["nerve"],
        plural: "Nerven",
      } as NounSpec,
    },
    {
      word: "Haut",
      level: "A1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "She has sensitive skin.",
            sample: "Sie hat empfindliche Haut.",
          },
        ],
        article: "Die",
        meanings: ["skin"],
        plural: "Häute",
      } as NounSpec,
    },
    {
      word: "Virus",
      level: "A2",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "The virus spreads quickly.",
            sample: "Das Virus verbreitet sich schnell.",
          },
        ],
        article: "Das",
        meanings: ["virus"],
        plural: "Viren",
      } as NounSpec,
    },
    {
      word: "Bakterium",
      level: "B1",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "Bacteria can cause infections.",
            sample: "Bakterien können Infektionen verursachen.",
          },
        ],
        article: "Das",
        meanings: ["bacterium", "bacteria"],
        plural: "Bakterien",
      } as NounSpec,
    },
    {
      word: "Bank",
      level: "A1",
      type: "NOUN",
      categories: ["Places"],
      spec: {
        samples: [
          {
            translation: "I need to go to the bank to withdraw some money.",
            sample: "Ich muss zur Bank gehen, um etwas Geld abzuheben.",
          },
          {
            translation: "The bank is closed on Sundays.",
            sample: "Die Bank ist sonntags geschlossen.",
          },
          {
            translation: "I recieved a warning letter from the bank.",
            sample: "Ich habe einen Mahnbrief von der Bank erhalten.",
          },
        ],
        article: "Die",
        meanings: ["bank"],
        plural: "Banken",
      } as NounSpec,
    },
    {
      word: "Immunsystem",
      level: "B2",
      type: "NOUN",
      categories: ["Health"],
      spec: {
        samples: [
          {
            translation: "A strong immune system helps fight diseases.",
            sample: "Ein starkes Immunsystem hilft, Krankheiten zu bekämpfen.",
          },
        ],
        article: "Das",
        meanings: ["immune system"],
        plural: "Immunsysteme",
      } as NounSpec,
    },
    {
      word: "Termin",
      level: "A1",
      important: true,
      type: "NOUN",
      categories: ["General", "Appointment"],
      spec: {
        samples: [
          {
            translation: "I have an appointment with the doctor.",
            sample: "Ich habe einen Termin beim Arzt.",
          },
          {
            translation: "Can we schedule an appointment for next week?",
            sample: "Können wir einen Termin für nächste Woche vereinbaren?",
          },
          {
            translation: "I missed my appointment.",
            sample: "Ich habe meinen Termin verpasst.",
          },
          {
            translation: "The appointment is at 3 PM.",
            sample: "Der Termin ist um 15 Uhr.",
          },
          {
            translation: "She made an appointment with the dentist.",
            sample: "Sie hat einen Termin beim Zahnarzt gemacht.",
          },
          {
            translation: "I need to cancel my appointment.",
            sample: "Ich muss meinen Termin absagen.",
          },
          {
            sample: "Ich brauche einen Termin für nächste Woche.",
            translation: "I need an appointment for next week.",
          },
          {
            translation: "I need an appointment with Mr Müller.",
            sample: "Ich brauche einen Termin bei Herrn Müller.",
          },
          {
            translation: "I need an urgent appointment.",
            sample: "Ich brauche einen dringenden Termin.",
          },
          {
            translation: "The appointment was rescheduled.",
            sample: "Der Termin wurde verschoben.",
          },
          {
            translation: "When is your appointment?",
            sample: "Wann ist dein Termin?",
          },
          {
            translation: "You don't have an appointment.",
            sample: "Sie haben keinen Termin.",
          },
          {
            translation: "I have an appointment at 2 PM.",
            sample: "Ich habe einen Termin um 14 Uhr.",
          },
          {
            translation: "The appointment is confirmed.",
            sample: "Der Termin ist bestätigt.",
          },
          {
            translation: "I am late for my appointment.",
            sample: "Ich bin zu meinem Termin spät dran.",
          },
        ],
        article: "Der",
        meanings: ["appointment", "date"],
        plural: "Termine",
      } as NounSpec,
    },
    {
      word: "Flughafen",
      level: "A1",
      type: "NOUN",
      categories: [
        "Directions and transportation",
        "Places",
        "Aviation",
        "Travel and holidays",
      ],
      spec: {
        samples: [
          {
            translation: "The airport is very busy today.",
            sample: "Der Flughafen ist heute sehr beschäftigt.",
          },
        ],
        article: "Der",
        meanings: ["airport"],
        plural: "Flughäfen",
      } as NounSpec,
    },
    {
      word: "Flugplatz",
      level: "B1",
      type: "NOUN",
      categories: ["Directions and transportation", "Places", "Aviation"],
      spec: {
        samples: [
          {
            translation: "The small airfield is used for private planes.",
            sample: "Der kleine Flugplatz wird für Privatflugzeuge genutzt.",
          },
        ],
        article: "Der",
        meanings: ["airfield", "airstrip"],
        plural: "Flugplätze",
      } as NounSpec,
    },
    {
      word: "Landebahn",
      level: "B1",
      type: "NOUN",
      categories: ["Directions and transportation", "Places", "Aviation"],
      spec: {
        samples: [
          {
            translation: "The plane landed safely on the runway.",
            sample: "Das Flugzeug landete sicher auf der Landebahn.",
          },
          {
            translation: "The runway is short",
            sample: "Die Landebahn ist kurz.",
          },
          {
            sample: "Die Landebahn ist frei zum Starten.",
            translation: "The runway is clear for takeoff.",
          },
          {
            sample: "Ist die Landebahn frei zum Landen?",
            translation: "Is the runway clear for landing?",
          },
        ],
        article: "Die",
        meanings: ["runway"],
        plural: "Landebahnen",
      } as NounSpec,
    },
    {
      word: "Pilot",
      level: "A1",
      type: "NOUN",
      categories: ["Occupation", "Aviation"],
      spec: {
        samples: [
          {
            translation: "The pilot is very experienced.",
            sample: "Der Pilot ist sehr erfahren.",
          },
          {
            sample: "Wo ist der Pilot?",
            translation: "Where is the pilot?",
          },
        ],
        article: "Der",
        meanings: ["pilot"],
        plural: "Piloten",
      } as NounSpec,
    },
    {
      word: "Flugzeug",
      level: "A1",
      type: "NOUN",
      categories: [
        "Directions and transportation",
        "Aviation",
        "Travel and holidays",
      ],
      spec: {
        samples: [
          {
            translation: "The airplane is flying high in the sky.",
            sample: "Das Flugzeug fliegt hoch am Himmel.",
          },
          {
            translation: "The airplane is landing at the airport.",
            sample: "Das Flugzeug landet am Flughafen.",
          },
        ],
        article: "Das",
        meanings: ["airplane", "plane"],
        plural: "Flugzeuge",
      } as NounSpec,
    },
    {
      word: "Flug",
      level: "A1",
      type: "NOUN",
      categories: ["Travel and holidays", "Aviation"],
      spec: {
        samples: [
          {
            translation: "The flight was delayed due to bad weather.",
            sample: "Der Flug wurde wegen schlechten Wetters verspätet.",
          },
          {
            sample: "Mein Flug geht um 10 Uhr ab.",
            translation: "My flight departs at 10 o'clock.",
          },
        ],
        article: "Der",
        meanings: ["flight"],
        plural: "Flüge",
      } as NounSpec,
    },
    {
      word: "Copilot",
      level: "B1",
      type: "NOUN",
      categories: ["Aviation", "Occupation"],
      spec: {
        samples: [
          {
            translation: "The co-pilot assisted the pilot during the flight.",
            sample: "Der Copilot unterstützte den Piloten während des Fluges.",
          },
        ],
        article: "Der",
        meanings: ["co-pilot", "first officer"],
        plural: "Copiloten",
      } as NounSpec,
    },
    {
      word: "Flügel",
      level: "B1",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation:
              "The airplane's wings are made of lightweight materials.",
            sample:
              "Die Flügel des Flugzeugs sind aus leichten Materialien gefertigt.",
          },
          {
            translation: "Pleae keep the wings balanced",
            sample: "Bitte halten Sie die Flügel im Gleichgewicht",
          },
          {
            sample: "Die Flügel des Flugzeugs sind beschädigt.",
            translation: "The wings of the airplane are damaged.",
          },
        ],
        article: "Der",
        meanings: ["wing"],
        plural: "Flügel",
      } as NounSpec,
    },
    {
      word: "Cockpit",
      level: "B1",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation: "The pilot is sitting in the cockpit.",
            sample: "Der Pilot sitzt im Cockpit.",
          },
        ],
        article: "Das",
        meanings: ["cockpit"],
        plural: "Cockpits",
      } as NounSpec,
    },
    {
      word: "Seitenruder",
      level: "B2",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation: "The rudder helps control the airplane's yaw.",
            sample:
              "Das Seitenruder hilft, die Gierbewegung des Flugzeugs zu steuern.",
          },
          {
            translation: "The rudder is located on the tail of the airplane.",
            sample: "Das Seitenruder befindet sich am Heck des Flugzeugs.",
          },
          {
            translation: "The pilot adjusted the rudder during the flight.",
            sample:
              "Der Pilot hat das Seitenruder während des Fluges eingestellt.",
          },
          {
            translation: "Rudders should be checked before each flight.",
            sample: "Die Seitenruder sollten vor jedem Flug überprüft werden.",
          },
          {
            translation: "I check the rudders before takeoff.",
            sample: "Ich überprüfe die Seitenruder vor dem Start.",
          },
        ],
        article: "Das",
        meanings: ["rudder"],
        plural: "Seitenruder",
      } as NounSpec,
    },
    {
      word: "Querruder",
      level: "B2",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation: "The ailerons help control the airplane's roll.",
            sample:
              "Die Querruder helfen, die Rollbewegung des Flugzeugs zu steuern.",
          },
          {
            sample: "Die Querruder sind defekt.",
            translation: "The ailerons are defective.",
          },
          {
            translation: "Ailerons should be checked before each flight.",
            sample: "Die Querruder sollten vor jedem Flug überprüft werden.",
          },
          {
            translation: "The pilot adjusted the ailerons during the flight.",
            sample:
              "Der Pilot hat die Querruder während des Fluges eingestellt.",
          },
          {
            translation:
              "The ailerons are located on the wings of the airplane.",
            sample: "Die Querruder befinden sich an den Flügeln des Flugzeugs.",
          },
          {
            translation: "I check the ailerons before takeoff.",
            sample: "Ich überprüfe die Querruder vor dem Start.",
          },
        ],
        article: "Das",
        meanings: ["aileron"],
        plural: "Querruder",
      } as NounSpec,
    },
    {
      word: "Höhenruder",
      level: "B2",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation: "The elevator controls the airplane's pitch.",
            sample: "Das Höhenruder steuert die Nickbewegung des Flugzeugs.",
          },
          {
            translation: "The elevator is located on the tail of the airplane.",
            sample: "Das Höhenruder befindet sich am Heck des Flugzeugs.",
          },
          {
            translation: "The pilot adjusted the elevator during the flight.",
            sample:
              "Der Pilot hat das Höhenruder während des Fluges eingestellt.",
          },
          {
            translation: "Elevators should be checked before each flight.",
            sample: "Die Höhenruder sollten vor jedem Flug überprüft werden.",
          },
          {
            translation: "I check the elevators before takeoff.",
            sample: "Ich überprüfe die Höhenruder vor dem Start.",
          },
        ],
        article: "Das",
        meanings: ["elevator"],
        plural: "Höhenruder",
      } as NounSpec,
    },
    {
      word: "Haube",
      level: "B2",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation: "The canopy protects the pilot from wind and weather.",
            sample: "Die Haube schützt den Piloten vor Wind und Wetter.",
          },
          {
            translation: "The canopy is made of transparent material.",
            sample: "Die Haube besteht aus transparentem Material.",
          },
          {
            translation:
              "The pilot closed and locked the canopy before takeoff.",
            sample:
              "Der Pilot schloss und verriegelte die Haube vor dem Start.",
          },
          {
            translation: "Canopies should be checked before each flight.",
            sample: "Die Hauben sollten vor jedem Flug überprüft werden.",
          },
          {
            translation: "I check the canopy before takeoff.",
            sample: "Ich überprüfe die Haube vor dem Start.",
          },
        ],
        article: "Die",
        meanings: ["canopy"],
        plural: "Hauben",
      } as NounSpec,
    },
    {
      word: "Triebwerk",
      level: "B1",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation: "The airplane's engines are very powerful.",
            sample: "Die Triebwerke des Flugzeugs sind sehr leistungsstark.",
          },
          {
            translation: "The engines are running smoothly.",
            sample: "Die Triebwerke laufen reibungslos.",
          },
          {
            translation: "The engines need maintenance.",
            sample: "Die Triebwerke benötigen Wartung.",
          },
          {
            translation: "The engines are located under the wings.",
            sample: "Die Triebwerke befinden sich unter den Flügeln.",
          },
          {
            translation: "I check the engines before each flight.",
            sample: "Ich überprüfe die Triebwerke vor jedem Flug.",
          },
        ],
        article: "Das",
        meanings: ["engine", "jet engine"],
        plural: "Triebwerke",
      } as NounSpec,
    },
    /* TODO */
    {
      word: "Fallschirm",
      level: "B1",
      type: "NOUN",
      categories: ["Aviation", "Sports"],
      spec: {
        samples: [
          {
            translation: "The parachute is made of strong material.",
            sample: "Der Fallschirm besteht aus robustem Material.",
          },
          {
            translation: "Parachutes should be checked before each jump.",
            sample: "Fallschirme sollten vor jedem Sprung überprüft werden.",
          },
          {
            translation: "I check my parachute before every jump.",
            sample: "Ich überprüfe meinen Fallschirm vor jedem Sprung.",
          },
        ],
        article: "Der",
        meanings: ["parachute"],
        plural: "Fallschirme",
      } as NounSpec,
    },
    {
      word: "Radio",
      level: "A1",
      type: "NOUN",
      categories: ["Directions and transportation", "Technology", "Aviation"],
      spec: {
        samples: [
          {
            translation:
              "The pilot is communicating with the control tower via radio.",
            sample: "Der Pilot kommuniziert über Funk mit dem Kontrollturm.",
          },
          {
            translation: "The radio frequency is set to 123.45 MHz.",
            sample: "Die Funkfrequenz ist auf 123,45 MHz eingestellt.",
          },
          {
            translation: "I will make the radio call.",
            sample: "Ich werde den Funkruf machen.",
          },
        ],
        article: "Das",
        meanings: ["radio"],
        plural: "Radios",
      } as NounSpec,
    },
    {
      word: "Kontrollturm",
      level: "B1",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation:
              "The control tower manages all air traffic at the airport.",
            sample:
              "Der Kontrollturm verwaltet den gesamten Luftverkehr am Flughafen.",
          },
          {
            translation: "The control tower is located near the runway.",
            sample: "Der Kontrollturm befindet sich in der Nähe der Landebahn.",
          },
          {
            translation: "The control tower gave us clearance for takeoff.",
            sample: "Der Kontrollturm hat uns die Startfreigabe erteilt.",
          },
        ],
        article: "Der",
        meanings: ["control tower"],
        plural: "Kontrolltürme",
      } as NounSpec,
    },
    {
      word: "Höhenmesser",
      level: "B2",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation:
              "The altimeter shows the airplane's altitude above sea level.",
            sample:
              "Der Höhenmesser zeigt die Flughöhe des Flugzeugs über dem Meeresspiegel an.",
          },
          {
            translation: "The altimeter is an important instrument for pilots.",
            sample: "Der Höhenmesser ist ein wichtiges Instrument für Piloten.",
          },
          {
            translation: "The altimieter is set to zero",
            sample: "Der Höhenmesser ist auf Null eingestellt",
          },
          {
            translation: "The altimeter is showing a wrong altitude",
            sample: "Der Höhenmesser zeigt eine falsche Höhe an",
          },
        ],
        article: "Der",
        meanings: ["altimeter"],
        plural: "Höhenmesser",
      } as NounSpec,
    },
    {
      word: "Geschwindigkeitmesser",
      level: "B2",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation:
              "The airspeed indicator shows the airplane's speed relative to the air.",
            sample:
              "Der Geschwindigkeitmesser zeigt die Geschwindigkeit des Flugzeugs relativ zur Luft an.",
          },
          {
            translation:
              "The airspeed indicator is an important instrument for pilots.",
            sample:
              "Der Geschwindigkeitmesser ist ein wichtiges Instrument für Piloten.",
          },
          {
            translation: "The airspeed indicator is not working properly.",
            sample: "Der Geschwindigkeitmesser funktioniert nicht richtig.",
          },
          {
            translation: "The airspeed indicator is showing a high speed.",
            sample:
              "Der Geschwindigkeitmesser zeigt eine hohe Geschwindigkeit an.",
          },
        ],
        article: "Der",
        meanings: ["airspeed indicator", "speedometer"],
        plural: "Geschwindigkeitsmesser",
      } as NounSpec,
    },
    {
      word: "Ruder",
      level: "B1",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation: "The rudder helps control the airplane's direction.",
            sample: "Das Ruder hilft, die Richtung des Flugzeugs zu steuern.",
          },
          {
            translation: "The rudder is located on the tail of the airplane.",
            sample: "Das Ruder befindet sich am Heck des Flugzeugs.",
          },
          {
            translation: "The pilot adjusted the rudder during the flight.",
            sample: "Der Pilot hat das Ruder während des Fluges eingestellt.",
          },
          {
            translation: "Rudders should be checked before each flight.",
            sample: "Die Ruder sollten vor jedem Flug überprüft werden.",
          },
          {
            translation: "I check the rudder before takeoff.",
            sample: "Ich überprüfe das Ruder vor dem Start.",
          },
        ],
        article: "Das",
        meanings: ["rudder"],
        plural: "Ruder",
      } as NounSpec,
    },
    {
      word: "Spornkuller",
      level: "B2",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation:
              "The tailwheel helps support the airplane's weight on the ground.",
            sample:
              "Der Spornkuller hilft, das Gewicht des Flugzeugs am Boden zu tragen.",
          },
          {
            translation:
              "The tailwheel is located at the rear of the airplane.",
            sample: "Der Spornkuller befindet sich am Heck des Flugzeugs.",
          },
          {
            translation: "The pilot adjusted the tailwheel during taxiing.",
            sample:
              "Der Pilot hat den Spornkuller während des Rollens eingestellt.",
          },
        ],
        article: "Der",
        meanings: ["tailwheel"],
        plural: "Spornkuller",
      } as NounSpec,
    },
    /* TODO */
    {
      word: "Seil",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Tools and equipment"],
      spec: {
        samples: [
          {
            translation: "The rope is strong and durable.",
            sample: "Das Seil ist stark und langlebig.",
          },
          {
            translation:
              "If the rope breaks, we follow the emergency procedures.",
            sample: "Wenn das Seil reißt, befolgen wir die Notfallverfahren.",
          },
          {
            translation:
              "The winch pulls the glider with a long and strong rope.",
            sample:
              "Die Winde zieht den Segelflieger mit einem langen und starken Seil.",
          },
        ],
        article: "Das",
        meanings: ["rope", "cord"],
        plural: "Seile",
      } as NounSpec,
    },
    {
      word: "Landung",
      level: "A1",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation: "The landing was smooth and safe.",
            sample: "Die Landung war sanft und sicher.",
          },
          {
            sample: "Die Landungen auf diesem Flughafen sind oft turbulent.",
            translation: "Landings at this airport are often turbulent.",
          },
          {
            translation: "The pilot was ready for landing.",
            sample: "Der Pilot war bereit zur Landung.",
          },
        ],
        article: "Die",
        meanings: ["landing"],
        plural: "Landungen",
      } as NounSpec,
    },
    {
      word: "Fahrwerk",
      level: "B1",
      type: "NOUN",
      categories: ["Aviation"],
      spec: {
        samples: [
          {
            translation: "The landing gear is retractable.",
            sample: "Das Fahrwerk ist einziehbar.",
          },
          {
            translation: "The landing gear is extended for landing.",
            sample: "Das Fahrwerk ist für die Landung ausgefahren.",
          },
          {
            translation: "The landing gear needs maintenance.",
            sample: "Das Fahrwerk benötigt Wartung.",
          },
        ],
        article: "Das",
        meanings: ["landing gear"],
        plural: "Fahrwerke",
      } as NounSpec,
    },
    {
      word: "Crew",
      level: "A1",
      type: "NOUN",
      categories: ["Aviation", "Occupation"],
      spec: {
        samples: [
          {
            translation: "The crew is preparing for takeoff.",
            sample: "Die Crew bereitet sich auf den Start vor.",
          },
        ],
        article: "Die",
        meanings: ["crew"],
        plural: "Crews",
      } as NounSpec,
    },
    {
      word: "Passagier",
      level: "A1",
      type: "NOUN",
      categories: ["Travel and holidays"],
      spec: {
        samples: [
          {
            translation: "The passengers are boarding the plane.",
            sample: "Die Passagiere steigen ins Flugzeug ein.",
          },
          {
            sample: "Die Passagiere warten auf das Gepäck.",
            translation: "The passengers are waiting for the luggage.",
          },
        ],
        article: "Der",
        meanings: ["passenger"],
        plural: "Passagiere",
      } as NounSpec,
    },
    {
      word: "Flugschein",
      level: "A2",
      type: "NOUN",
      categories: ["Education", "Aviation", "Occupation"],
      spec: {
        samples: [
          {
            translation: "He is studying to get his pilot's license.",
            sample: "Er studiert, um seinen Flugschein zu bekommen.",
          },
          {
            translation: "She passed her flight exam and received her license.",
            sample:
              "Sie hat ihre Flugprüfung bestanden und ihren Flugschein erhalten.",
          },
          {
            translation: "I don't have a pilot's license yet.",
            sample: "Ich habe noch keinen Flugschein.",
          },
        ],
        article: "Der",
        meanings: ["pilot's license", "aviation certificate"],
        plural: "Flugscheine",
      } as NounSpec,
    },
    {
      word: "Antrag",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Official matters"],
      spec: {
        samples: [
          {
            translation: "I submitted my application for the job.",
            sample: "Ich habe meinen Antrag für den Job eingereicht.",
          },
          {
            translation: "The application was approved.",
            sample: "Der Antrag wurde genehmigt.",
          },
          {
            translation: "You need to fill out an application form.",
            sample: "Sie müssen ein Antragsformular ausfüllen.",
          },
        ],
        article: "Der",
        meanings: ["application", "request", "petition"],
        plural: "Anträge",
      } as NounSpec,
    },
    {
      word: "Formular",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Official matters"],
      spec: {
        samples: [
          {
            translation: "Please fill out this form.",
            sample: "Bitte füllen Sie dieses Formular aus.",
          },
          {
            translation: "The form is available online.",
            sample: "Das Formular ist online verfügbar.",
          },
        ],
        article: "Das",
        meanings: ["form", "document"],
        plural: "Formulare",
      } as NounSpec,
    },
    {
      word: "Unterschrift",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Official matters"],
      spec: {
        samples: [
          {
            translation: "The document requires a signature.",
            sample: "Das Dokument erfordert eine Unterschrift.",
          },
        ],
        article: "Die",
        meanings: ["signature"],
        plural: "Unterschriften",
      } as NounSpec,
    },
    {
      word: "Bewerbung",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Official matters", "Occupation"],
      spec: {
        samples: [
          {
            translation: "I sent my application for the job.",
            sample: "Ich habe meine Bewerbung für den Job geschickt.",
          },
          {
            translation: "Her application was successful.",
            sample: "Ihre Bewerbung war erfolgreich.",
          },
        ],
        article: "Die",
        meanings: ["application", "job application"],
        plural: "Bewerbungen",
      } as NounSpec,
    },
    {
      word: "Lebenslauf",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Official matters", "Occupation"],
      spec: {
        samples: [
          {
            translation: "Please attach your resume to the application.",
            sample: "Bitte fügen Sie Ihren Lebenslauf der Bewerbung bei.",
          },
          {
            translation: "I have read your resume.",
            sample: "Ich habe Ihren Lebenslauf gelesen.",
          },
        ],
        article: "Der",
        meanings: ["resume", "curriculum vitae (CV)"],
        plural: "Lebensläufe",
      } as NounSpec,
    },
    {
      word: "Zeugnis",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Official matters", "Occupation", "Education"],
      spec: {
        samples: [
          {
            translation: "I need to get my diploma translated.",
            sample: "Ich muss mein Zeugnis übersetzen lassen.",
          },
          {
            translation:
              "She received a certificate for completing the course.",
            sample: "Sie erhielt ein Zeugnis für den Abschluss des Kurses.",
          },
        ],
        article: "Das",
        meanings: ["certificate", "diploma", "report card"],
        plural: "Zeugnisse",
      } as NounSpec,
    },
    {
      word: "Abschluss",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Official matters", "Occupation", "Education"],
      spec: {
        samples: [
          {
            translation: "He is proud of his degree.",
            sample: "Er ist stolz auf seinen Abschluss.",
          },
          {
            translation: "The graduation ceremony was very emotional.",
            sample: "Die Abschlussfeier war sehr emotional.",
          },
        ],
        article: "Der",
        meanings: ["degree", "graduation", "completion"],
        plural: "Abschlüsse",
      } as NounSpec,
    },
    {
      word: "Note",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Official matters", "Education"],
      spec: {
        samples: [
          {
            translation: "She got a good grade on her exam.",
            sample: "Sie hat eine gute Note in ihrer Prüfung bekommen.",
          },
        ],
        article: "Die",
        meanings: ["grade", "mark"],
        plural: "Noten",
      } as NounSpec,
    },
    {
      word: "Prüfung",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Official matters", "Education"],
      spec: {
        samples: [
          {
            translation: "The exam was very difficult.",
            sample: "Die Prüfung war sehr schwierig.",
          },
          {
            translation: "I have to study for my exam.",
            sample: "Ich muss für meine Prüfung lernen.",
          },
        ],
        article: "Die",
        meanings: ["exam", "test"],
        plural: "Prüfungen",
      } as NounSpec,
    },
    {
      word: "Fach",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Official matters", "Education"],
      spec: {
        samples: [
          {
            translation: "My favorite subject is mathematics.",
            sample: "Mein Lieblingsfach ist Mathematik.",
          },
          {
            translation:
              "She is studying a subject related to computer science.",
            sample: "Sie studiert ein Fach, das mit Informatik zu tun hat.",
          },
        ],
        article: "Das",
        meanings: ["subject", "field of study"],
        plural: "Fächer",
      } as NounSpec,
    },
    {
      word: "Minute",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Date and time"],
      spec: {
        samples: [
          {
            translation: "The meeting will start in five minutes.",
            sample: "Das Treffen beginnt in fünf Minuten.",
          },
          {
            sample: "Ich bin da in zehn Minuten.",
            translation: "I will be there in ten minutes.",
          },
          {
            sample: "Ich komme in zehn Minuten zurück.",
            translation: "I will be back in ten minutes.",
          },
        ],
        article: "Die",
        meanings: ["minute"],
        plural: "Minuten",
      } as NounSpec,
    },
    {
      word: "Stunde",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Date and time"],
      spec: {
        samples: [
          {
            translation: "The class lasts for two hours.",
            sample: "Der Unterricht dauert zwei Stunden.",
          },
          {
            sample: "Ich bin in einer Stunde zurück.",
            translation: "I will be back in an hour.",
          },
          {
            sample: "Das Meeting dauert drei Stunden.",
            translation: "The meeting lasts three hours.",
          },
        ],
        article: "Die",
        meanings: ["hour"],
        plural: "Stunden",
      } as NounSpec,
    },
    {
      word: "Bett",
      level: "A1",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "I need a new bed for my bedroom.",
            sample: "Ich brauche ein neues Bett für mein Schlafzimmer.",
          },
          {
            translation: "The bed is very comfortable.",
            sample: "Das Bett ist sehr bequem.",
          },
        ],
        article: "Das",
        meanings: ["bed"],
        plural: "Betten",
      } as NounSpec,
    },
    {
      word: "Kissen",
      level: "A1",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "I like to sleep with two pillows.",
            sample: "Ich schlafe gerne mit zwei Kissen.",
          },
          {
            translation: "The pillow is soft and fluffy.",
            sample: "Das Kissen ist weich und flauschig.",
          },
        ],
        article: "Das",
        meanings: ["pillow", "cushion"],
        plural: "Kissen",
      } as NounSpec,
    },
    {
      word: "Decke",
      level: "A1",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "I need a warm blanket for the winter.",
            sample: "Ich brauche eine warme Decke für den Winter.",
          },
          {
            translation: "The blanket is soft and cozy.",
            sample: "Die Decke ist weich und gemütlich.",
          },
        ],
        article: "Die",
        meanings: ["blanket", "cover"],
        plural: "Decken",
      } as NounSpec,
    },
    {
      word: "Matratze",
      level: "A1",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "I need a new mattress for my bed.",
            sample: "Ich brauche eine neue Matratze für mein Bett.",
          },
        ],
        article: "Die",
        meanings: ["mattress"],
        plural: "Matratzen",
      } as NounSpec,
    },
    {
      word: "Bettwäsche",
      level: "A2",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "I bought new bed linens for my bedroom.",
            sample: "Ich habe neue Bettwäsche für mein Schlafzimmer gekauft.",
          },
          {
            trnslation: "Plesae cover the bed with fresh bedding.",
            sample: "Bitte beziehen Sie das Bett mit frischer Bettwäsche.",
          },
        ],
        article: "Die",
        meanings: ["bed linens", "bedding"],
        plural: "Bettwäschen",
      } as NounSpec,
    },
    {
      word: "Schrank",
      level: "A1",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "I need a new wardrobe for my clothes.",
            sample: "Ich brauche einen neuen Schrank für meine Kleidung.",
          },
          {
            translation: "The wardrobe is made of wood.",
            sample: "Der Schrank ist aus Holz gefertigt.",
          },
        ],
        article: "Der",
        meanings: ["wardrobe", "closet"],
        plural: "Schränke",
      } as NounSpec,
    },
    {
      word: "Waschmaschine",
      level: "A1",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "The washing machine is broken.",
            sample: "Die Waschmaschine ist kaputt.",
          },
          {
            translation: "I need to do laundry in the washing machine.",
            sample: "Ich muss Wäsche in der Waschmaschine waschen.",
          },
        ],
        article: "Die",
        meanings: ["washing machine"],
        plural: "Waschmaschinen",
      } as NounSpec,
    },
    {
      word: "Jacke",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing"],
      spec: {
        samples: [
          {
            translation: "I bought a new jacket for the winter.",
            sample: "Ich habe eine neue Jacke für den Winter gekauft.",
          },
          {
            translation: "The jacket is warm and waterproof.",
            sample: "Die Jacke ist warm und wasserdicht.",
          },
        ],
        article: "Die",
        meanings: ["jacket", "coat"],
        plural: "Jacken",
      } as NounSpec,
    },
    {
      word: "Mantel",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing"],
      spec: {
        samples: [
          {
            translation: "The coat is made of wool.",
            sample: "Der Mantel ist aus Wolle gefertigt.",
          },
        ],
        article: "Der",
        meanings: ["coat"],
        plural: "Mäntel",
      } as NounSpec,
    },
    {
      word: "Hut",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing"],
      spec: {
        samples: [
          {
            translation: "The hat protects you from the sun.",
            sample: "Der Hut schützt dich vor der Sonne.",
          },
        ],
        article: "Der",
        meanings: ["hat", "cap"],
        plural: "Hüte",
      } as NounSpec,
    },
    {
      word: "Handschuh",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing"],
      spec: {
        samples: [
          {
            translation: "The gloves are warm and comfortable.",
            sample: "Die Handschuhe sind warm und bequem.",
          },
        ],
        article: "Der",
        meanings: ["glove"],
        plural: "Handschuhe",
      } as NounSpec,
    },
    {
      word: "Schal",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing"],
      spec: {
        samples: [
          {
            translation: "The scarf is made of silk.",
            sample: "Der Schal ist aus Seide gefertigt.",
          },
        ],
        article: "Der",
        meanings: ["scarf"],
        plural: "Schals",
      } as NounSpec,
    },
    {
      word: "Hose",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing"],
      spec: {
        article: "Die",
        meanings: ["pants", "trousers"],
        plural: "Hosen",
        samples: [
          {
            translation: "I bought new pants for work.",
            sample: "Ich habe neue Hosen für die Arbeit gekauft.",
          },
          {
            translation: "The pants are too long, so I need to shorten them.",
            sample: "Die Hosen sind zu lang, also muss ich sie kürzen.",
          },
        ],
      } as NounSpec,
    },
    {
      word: "Rock",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing"],
      spec: {
        samples: [
          {
            translation: "She is wearing a beautiful skirt.",
            sample: "Sie trägt einen schönen Rock.",
          },
        ],
        article: "Der",
        meanings: ["skirt"],
        plural: "Röcke",
      } as NounSpec,
    },
    {
      word: "Hemden",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing"],
      spec: {
        samples: [
          {
            translation: "He ironed his shirts before the meeting.",
            sample: "Er hat seine Hemden vor dem Meeting gebügelt.",
          },
        ],
        article: "Das",
        meanings: ["shirt"],
        plural: "Hemden",
      } as NounSpec,
    },
    {
      word: "Socken",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing"],
      spec: {
        samples: [
          {
            translation: "The socks are made of cotton.",
            sample: "Die Socken sind aus Baumwolle gefertigt.",
          },
        ],
        article: "Die",
        meanings: ["socks"],
        plural: "Socken",
      } as NounSpec,
    },
    {
      word: "Brille",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing", "Health"],
      spec: {
        samples: [
          {
            translation: "I need new glasses for reading.",
            sample: "Ich brauche eine neue Brille zum Lesen.",
          },
          {
            translation: "You should clean your glasses.",
            sample: "Du solltest deine Brille reinigen.",
          },
        ],
        article: "Die",
        meanings: ["glasses", "spectacles"],
        plural: "Brillen",
      } as NounSpec,
    },
    {
      word: "reinigen",
      level: "A1",
      type: "VERB",
      categories: ["Household"],
      spec: {
        samples: [
          {
            translation: "You should clean your glasses.",
            sample: "Du solltest deine Brille reinigen.",
          },
          {
            translation: "I need to clean the house.",
            sample: "Ich muss das Haus reinigen.",
          },
        ],
        meanings: ["to clean", "to purify"],
        conjugation: {
          ich: "reinige",
          du: "reinigst",
          er_sie_es: "reinigt",
          wir: "reinigen",
          ihr: "reinigt",
          sie_Sie: "reinigen",
        },
        infinitive: "reinigen",
        pp: "gereinigt",
      } as VerbSpec,
    },
    {
      word: "Teppich",
      level: "A1",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "The carpet is very soft and comfortable.",
            sample: "Der Teppich ist sehr weich und bequem.",
          },
          {
            translation: "The Persian carpet is very expensive.",
            sample: "Der Perserteppich ist sehr teuer.",
          },
        ],
        article: "Der",
        meanings: ["carpet", "rug"],
        plural: "Teppiche",
      } as NounSpec,
    },
    {
      word: "Vorhang",
      level: "A1",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "The curtains are made of silk.",
            sample: "Die Vorhänge sind aus Seide gefertigt.",
          },
          {
            translation: "Please close the curtains to block the sunlight.",
            sample:
              "Bitte schließen Sie die Vorhänge, um das Sonnenlicht zu blockieren.",
          },
        ],
        article: "Der",
        meanings: ["curtain", "drape"],
        plural: "Vorhänge",
      } as NounSpec,
    },
    {
      word: "Tisch",
      level: "A1",
      type: "NOUN",
      categories: ["Housing and furniture"],
      spec: {
        samples: [
          {
            translation: "The table is made of wood.",
            sample: "Der Tisch ist aus Holz gefertigt.",
          },
          {
            translation: "We need a bigger table for the dining room.",
            sample: "Wir brauchen einen größeren Tisch für das Esszimmer.",
          },
        ],
        article: "Der",
        meanings: ["table", "desk"],
        plural: "Tische",
      } as NounSpec,
    },
    {
      word: "hören",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education", "Health"],
      spec: {
        infinitive: "hören",
        pp: "gehört",
        meanings: ["to hear", "to listen"],
        conjugation: {
          ich: "höre",
          du: "hörst",
          er_sie_es: "hört",
          wir: "hören",
          ihr: "hört",
          sie_Sie: "hören",
        },
        samples: [
          {
            translation: "Did you hear that noise?",
            sample: "Hast du dieses Geräusch gehört?",
          },
          {
            translation: "Did you hear me?",
            sample: "Hast du mich gehört?",
          },
        ],
      } as VerbSpec,
    },
    {
      word: "Herd",
      level: "A1",
      type: "NOUN",
      categories: ["Household"],
      spec: {
        samples: [
          {
            translation: "The stove is hot, be careful.",
            sample: "Der Herd ist heiß, sei vorsichtig.",
          },
          {
            translation: "I cooked dinner on the stove.",
            sample: "Ich habe das Abendessen auf dem Herd gekocht.",
          },
        ],
        article: "Der",
        meanings: ["stove", "range"],
        plural: "Herde",
      } as NounSpec,
    },
    {
      word: "springen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Sports", "Health"],
      spec: {
        samples: [
          {
            translation: "The cat jumps over the fence.",
            sample: "Die Katze springt über den Zaun.",
          },
          {
            translation: "He can jump very high.",
            sample: "Er kann sehr hoch springen.",
          },
        ],
        meanings: ["to jump", "to leap"],
        conjugation: {
          ich: "springe",
          du: "springst",
          er_sie_es: "springt",
          wir: "springen",
          ihr: "springt",
          sie_Sie: "springen",
        },
        infinitive: "springen",
        pp: "gesprungen",
      } as VerbSpec,
    },
    {
      word: "laufen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Sports", "Health"],
      spec: {
        samples: [
          {
            translation: "I like to run in the park.",
            sample: "Ich laufe gerne im Park.",
          },
          {
            translation: "He runs every morning to stay fit.",
            sample: "Er läuft jeden Morgen, um fit zu bleiben.",
          },
          {
            translation: "Run faster to catch the bus!",
            sample: "Lauf schneller, um den Bus zu erwischen!",
          },
        ],
        meanings: ["to run", "to walk"],
        conjugation: {
          ich: "laufe",
          du: "läufst",
          er_sie_es: "läuft",
          wir: "laufen",
          ihr: "lauft",
          sie_Sie: "laufen",
        },
        infinitive: "laufen",
        pp: "gelaufen",
      } as VerbSpec,
    },
    {
      word: "rauchen",
      level: "A1",
      type: "VERB",
      categories: ["Health", "General"],
      spec: {
        samples: [
          {
            translation: "He smokes a pack of cigarettes a day.",
            sample: "Er raucht eine Packung Zigaretten pro Tag.",
          },
          {
            translation: "He does not smoke in the house.",
            sample: "Er raucht nicht im Haus.",
          },
          {
            translation: "Do not smoke in front of the children.",
            sample: "Rauchen Sie nicht vor den Kindern.",
          },
          {
            translation: "You are not allowed to smoke here.",
            sample: "Sie dürfen hier nicht rauchen.",
          },
        ],
        meanings: ["to smoke"],
        conjugation: {
          ich: "rauche",
          du: "rauchst",
          er_sie_es: "raucht",
          wir: "rauchen",
          ihr: "raucht",
          sie_Sie: "rauchen",
        },
        infinitive: "rauchen",
        pp: "geraucht",
      } as VerbSpec,
    },
    {
      word: "kontrollieren",
      level: "A1",
      type: "VERB",
      categories: ["General", "Household", "Occupation", "Tools and equipment"],
      spec: {
        samples: [
          {
            translation: "Please check the engine before the flight.",
            sample: "Bitte kontrollieren Sie den Motor vor dem Flug.",
          },
          {
            translation: "The technician is checking the equipment.",
            sample: "Der Techniker kontrolliert die Ausrüstung.",
          },
        ],
        meanings: ["to check", "to control", "to inspect"],
        conjugation: {
          ich: "kontrolliere",
          du: "kontrollierst",
          er_sie_es: "kontrolliert",
          wir: "kontrollieren",
          ihr: "kontrolliert",
          sie_Sie: "kontrollieren",
        },
        infinitive: "kontrollieren",
        pp: "kontrolliert",
      } as VerbSpec,
    },
    {
      word: "anfassen",
      level: "A1",
      type: "VERB",
      categories: ["General"],
      spec: {
        samples: [
          {
            translation: "Please do not touch the artwork.",
            sample: "Bitte fassen Sie das Kunstwerk nicht an.",
          },
          {
            translation: "He touched the hot stove and burned his hand.",
            sample:
              "Er fasste den heißen Herd an und verbrannte sich die Hand.",
          },
        ],
        meanings: ["to touch", "to handle"],
        conjugation: {
          ich: "fasse an",
          du: "fasst an",
          er_sie_es: "fasst an",
          wir: "fassen an",
          ihr: "fasst an",
          sie_Sie: "fassen an",
        },
        infinitive: "anfassen",
        pp: "angefasst",
      } as VerbSpec,
    },
    {
      word: "lesen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education"],
      spec: {
        samples: [
          {
            translation: "I like to read books in my free time.",
            sample: "Ich lese gerne Bücher in meiner Freizeit.",
          },
          {
            translation: "She is reading a newspaper.",
            sample: "Sie liest eine Zeitung.",
          },
        ],
        meanings: ["to read"],
        conjugation: {
          ich: "lese",
          du: "liest",
          er_sie_es: "liest",
          wir: "lesen",
          ihr: "lest",
          sie_Sie: "lesen",
        },
        infinitive: "lesen",
        pp: "gelesen",
      } as VerbSpec,
    },
    {
      word: "benützen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Household"],
      spec: {
        samples: [
          {
            translation: "You can use my computer if you need it.",
            sample: "Du kannst meinen Computer benützen, wenn du ihn brauchst.",
            explanations: [{ grammars: ["wenn"] }],
          },
          {
            translation: "Please use the hand sanitizer before entering.",
            sample:
              "Bitte benützen Sie das Handdesinfektionsmittel vor dem Betreten.",
          },
          {
            translation: "I can not use my computer because it is broken.",
            sample:
              "Ich kann meinen Computer nicht benützen, weil er kaputt ist.",
            explanations: [{ grammars: ["weil"] }],
          },
        ],
        meanings: ["to use", "to utilize"],
        conjugation: {
          ich: "benütze",
          du: "benützt",
          er_sie_es: "benützt",
          wir: "benützen",
          ihr: "benützt",
          sie_Sie: "benützen",
        },
        infinitive: "benützen",
        pp: "benützt",
      } as VerbSpec,
    },
    {
      word: "reparieren",
      level: "A1",
      type: "VERB",
      categories: ["General", "Household", "Tools and equipment", "Occupation"],
      spec: {
        samples: [
          {
            translation: "I need to repair my car.",
            sample: "Ich muss mein Auto reparieren.",
          },
          {
            translation: "The technician is repairing the machine.",
            sample: "Der Techniker repariert die Maschine.",
          },
        ],
        meanings: ["to repair", "to fix"],
        conjugation: {
          ich: "repariere",
          du: "reparierst",
          er_sie_es: "repariert",
          wir: "reparieren",
          ihr: "repariert",
          sie_Sie: "reparieren",
        },
        infinitive: "reparieren",
        pp: "repariert",
      } as VerbSpec,
    },
    {
      word: "losgehen",
      level: "A1",
      type: "VERB",
      categories: ["General"],
      spec: {
        samples: [
          {
            translation: "The event starts at 7 PM.",
            sample: "Die Veranstaltung geht um 19 Uhr los.",
          },
          {
            translation: "Let's go! The show is about to start.",
            sample: "Los geht's! Die Show beginnt gleich.",
          },
        ],
        meanings: ["to start", "to begin", "to set off"],
        conjugation: {
          ich: "gehe los",
          du: "gehst los",
          er_sie_es: "geht los",
          wir: "gehen los",
          ihr: "geht los",
          sie_Sie: "gehen los",
        },
        infinitive: "losgehen",
        pp: "losgegangen",
      } as VerbSpec,
    },
    {
      word: "denken",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education"],
      spec: {
        infinitive: "denken",
        pp: "gedacht",
        meanings: ["to think"],
        conjugation: {
          ich: "denke",
          du: "denkst",
          er_sie_es: "denkt",
          wir: "denken",
          ihr: "denkt",
          sie_Sie: "denken",
        },
        samples: [
          {
            translation: "I think we should leave now.",
            sample: "Ich denke, wir sollten jetzt gehen.",
          },
          {
            translation: "Who do you think will win the game?",
            sample: "Wer denkst du, wird das Spiel gewinnen?",
          },
          {
            translation: "Do you think it will rain tomorrow?",
            sample: "Denkst du, dass es morgen regnen wird?",
          },
        ],
      } as VerbSpec,
    },
    {
      word: "glauben",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education"],
      spec: {
        infinitive: "glauben",
        pp: "geglaubt",
        meanings: ["to believe", "to think"],
        conjugation: {
          ich: "glaube",
          du: "glaubst",
          er_sie_es: "glaubt",
          wir: "glauben",
          ihr: "glaubt",
          sie_Sie: "glauben",
        },
        samples: [
          {
            translation: "I believe in your abilities.",
            sample: "Ich glaube an deine Fähigkeiten.",
            explanations: [
              {
                question: "What does 'an' govern here?",
                answer:
                  "'an' is used with the accusative case when expressing belief in something.",
              },
            ],
          },
          {
            translation: "Do you believe it will rain today?",
            sample: "Glaubst du, dass es heute regnen wird?",
          },
          {
            translation: "She believes that honesty is the best policy.",
            sample: "Sie glaubt, dass Ehrlichkeit die beste Politik ist.",
          },
        ],
      } as VerbSpec,
    },
    {
      word: "Ehrlichkeit",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Relationships"],
      spec: {
        samples: [
          {
            translation: "Honesty is the best policy.",
            sample: "Ehrlichkeit ist die beste Politik.",
          },
          {
            translation: "He values honesty in his relationships.",
            sample: "Er schätzt Ehrlichkeit in seinen Beziehungen.",
          },
        ],
        article: "Die",
        meanings: ["honesty", "integrity"],
        plural: "Ehrlichkeiten",
      } as NounSpec,
    },
    {
      word: "Beziehung",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Relationships"],
      spec: {
        samples: [
          {
            translation: "They have a strong relationship.",
            sample: "Sie haben eine starke Beziehung.",
          },
          {
            translation: "Building trust is important in any relationship.",
            sample: "Vertrauen aufzubauen ist in jeder Beziehung wichtig.",
          },
        ],
        article: "Die",
        meanings: ["relationship", "connection"],
        plural: "Beziehungen",
      } as NounSpec,
    },
    {
      word: "schätzen",
      level: "A2",
      type: "VERB",
      categories: ["General", "Relationships"],
      spec: {
        samples: [
          {
            translation: "I appreciate your help.",
            sample: "Ich schätze deine Hilfe.",
          },
          {
            translation: "She values honesty in her relationships.",
            sample: "Sie schätzt Ehrlichkeit in ihren Beziehungen.",
          },
        ],
        meanings: ["to appreciate", "to value"],
        conjugation: {
          ich: "schätze",
          du: "schätzt",
          er_sie_es: "schätzt",
          wir: "schätzen",
          ihr: "schätzt",
          sie_Sie: "schätzen",
        },
        infinitive: "schätzen",
        pp: "geschätzt",
      } as VerbSpec,
    },
    {
      word: "Koffer",
      level: "A1",
      type: "NOUN",
      categories: ["Travel and holidays"],
      spec: {
        samples: [
          {
            translation: "I packed my suitcase for the trip.",
            sample: "Ich habe meinen Koffer für die Reise gepackt.",
          },
          {
            translation: "The suitcase is heavy.",
            sample: "Der Koffer ist schwer.",
          },
        ],
        article: "Der",
        meanings: ["suitcase", "luggage"],
        plural: "Koffer",
      } as NounSpec,
    },
    {
      word: "Hochzeit",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Relationships", "Events"],
      spec: {
        samples: [
          {
            translation: "They are planning their wedding.",
            sample: "Sie planen ihre Hochzeit.",
          },
          {
            translation: "The wedding ceremony was beautiful.",
            sample: "Die Hochzeitszeremonie war wunderschön.",
          },
        ],
        article: "Die",
        meanings: ["wedding", "marriage ceremony"],
        plural: "Hochzeiten",
      } as NounSpec,
    },
    {
      word: "Nachbar",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Relationships", "Household"],
      spec: {
        samples: [
          {
            translation: "My neighbor is very friendly.",
            sample: "Mein Nachbar ist sehr freundlich.",
          },
          {
            translation: "I borrowed sugar from my neighbor.",
            sample: "Ich habe Zucker von meinem Nachbarn geliehen.",
          },
          {
            trnaslation: "Our neighbors were very helpful during the move.",
            sample: "Unsere Nachbarn waren beim Umzug sehr hilfsbereit.",
          },
        ],
        article: "Der",
        meanings: ["neighbor"],
        plural: "Nachbarn",
      } as NounSpec,
    },
    {
      word: "Umzug",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Household", "Relationships"],
      spec: {
        samples: [
          {
            translation: "We are planning our move to a new apartment.",
            sample: "Wir planen unseren Umzug in eine neue Wohnung.",
          },
          {
            translation: "The move was stressful but successful.",
            sample: "Der Umzug war stressig, aber erfolgreich.",
          },
        ],
        article: "Der",
        meanings: ["move", "relocation"],
        plural: "Umzüge",
      } as NounSpec,
    },
    {
      word: "Lebensmittel",
      level: "A1",
      type: "NOUN",
      categories: ["Shopping and clothing", "Food and drinks"],
      spec: {
        samples: [
          {
            translation: "I need to buy groceries for the week.",
            sample: "Ich muss Lebensmittel für die Woche kaufen.",
          },
          {
            translation: "The store sells fresh groceries.",
            sample: "Der Laden verkauft frische Lebensmittel.",
          },
        ],
        article: "Die",
        meanings: ["groceries", "food items"],
        plural: "Lebensmittel",
      } as NounSpec,
    },
    {
      word: "verkaufen",
      level: "A1",
      type: "VERB",
      categories: ["Shopping and clothing", "Occupation"],
      spec: {
        samples: [
          {
            translation: "I want to sell my old car.",
            sample: "Ich möchte mein altes Auto verkaufen.",
          },
          {
            translation: "The store sells fresh groceries.",
            sample: "Der Laden verkauft frische Lebensmittel.",
          },
          {
            translation: "We do not sell electronics here.",
            sample: "Wir verkaufen hier keine Elektronik.",
          },
        ],
        meanings: ["to sell"],
        conjugation: {
          ich: "verkaufe",
          du: "verkaufst",
          er_sie_es: "verkauft",
          wir: "verkaufen",
          ihr: "verkauft",
          sie_Sie: "verkaufen",
        },
        infinitive: "verkaufen",
        pp: "verkauft",
      } as VerbSpec,
    },
    {
      word: "Meinung",
      level: "A2",
      type: "NOUN",
      categories: ["General"],
      spec: {
        samples: [
          {
            translation: "In my opinion, this is a great idea.",
            sample: "Meiner Meinung nach ist das eine großartige Idee.",
          },
          {
            translation: "What is your opinion on this matter?",
            sample: "Was ist deine Meinung zu diesem Thema?",
          },
          {
            translation: "Could you share your opinion with us?",
            sample: "Könntest du uns deine Meinung mitteilen?",
          },
        ],
        article: "Die",
        meanings: ["opinion", "view"],
        plural: "Meinungen",
      } as NounSpec,
    },
    {
      word: "mitteilen",
      level: "A2",
      type: "VERB",
      categories: ["General"],
      spec: {
        samples: [
          {
            translation: "Please inform me about any changes.",
            sample: "Bitte teilen Sie mir alle Änderungen mit.",
          },
          {
            translation: "He communicated the news to his friends.",
            sample: "Er teilte die Neuigkeiten seinen Freunden mit.",
          },
        ],
        meanings: ["to inform", "to communicate", "to share"],
        conjugation: {
          ich: "teile mit",
          du: "teilst mit",
          er_sie_es: "teilt mit",
          wir: "teilen mit",
          ihr: "teilt mit",
          sie_Sie: "teilen mit",
        },
        infinitive: "mitteilen",
        pp: "mitgeteilt",
      } as VerbSpec,
    },
    {
      word: "Änderung",
      level: "A2",
      type: "NOUN",
      categories: ["General"],
      spec: {
        samples: [
          {
            translation: "The schedule has undergone several changes.",
            sample: "Der Zeitplan hat mehrere Änderungen erfahren.",
          },
          {
            translation: "A list of recent changes was provided.",
            sample: "Eine Liste der jüngsten Änderungen wurde bereitgestellt.",
          },
        ],
        article: "Die",
        meanings: ["change", "modification"],
        plural: "Änderungen",
      } as NounSpec,
    },
    {
      word: "Neuigkeiten",
      level: "A2",
      type: "NOUN",
      categories: ["General"],
      spec: {
        samples: [
          {
            translation: "He communicated the news to his friends.",
            sample: "Er teilte die Neuigkeiten seinen Freunden mit.",
          },
          {
            translation: "I have some exciting news to share.",
            sample: "Ich habe einige aufregende Neuigkeiten zu teilen.",
          },
        ],
        article: "Die",
        meanings: ["news", "updates"],
        plural: "Neuigkeiten",
      } as NounSpec,
    },
    {
      word: "Angebot",
      level: "A2",
      type: "NOUN",
      categories: ["Shopping and clothing", "General"],
      spec: {
        samples: [
          {
            translation: "The store has a special offer on electronics.",
            sample: "Der Laden hat ein spezielles Angebot für Elektronik.",
          },
          {
            translation: "I received a great offer for a new car.",
            sample: "Ich habe ein tolles Angebot für ein neues Auto erhalten.",
          },
        ],
        article: "Das",
        meanings: ["offer", "deal"],
        plural: "Angebote",
      } as NounSpec,
    },
    {
      word: "erhalten",
      level: "A2",
      type: "VERB",
      categories: ["General"],
      spec: {
        samples: [
          {
            translation: "I received a letter from my friend.",
            sample: "Ich habe einen Brief von meinem Freund erhalten.",
          },
          {
            translation: "She received a gift from her friend.",
            sample: "Sie hat ein Geschenk von ihrer Freundin erhalten.",
          },
        ],
        meanings: ["to receive", "to obtain"],
        conjugation: {
          ich: "erhalte",
          du: "erhältst",
          er_sie_es: "erhält",
          wir: "erhalten",
          ihr: "erhaltet",
          sie_Sie: "erhalten",
        },
        infinitive: "erhalten",
        pp: "erhalten",
      } as VerbSpec,
    },
    {
      word: "Regel",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Official matters"],
      spec: {
        samples: [
          {
            translation: "You must follow the rules of the game.",
            sample: "Du musst die Regeln des Spiels befolgen.",
          },
          {
            translation: "The school has strict rules about attendance.",
            sample: "Die Schule hat strenge Regeln bezüglich der Anwesenheit.",
          },
        ],
        article: "Die",
        meanings: ["rule", "regulation"],
        plural: "Regeln",
      } as NounSpec,
    },
    {
      word: "Anwesenheit",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Official matters", "Education"],
      spec: {
        samples: [
          {
            translation: "Attendance is mandatory for all students.",
            sample: "Die Anwesenheit ist für alle Schüler obligatorisch.",
          },
        ],
        article: "Die",
        meanings: ["attendance", "presence"],
        plural: "Anwesenheiten",
      } as NounSpec,
    },
    {
      word: "befolgen",
      level: "A2",
      type: "VERB",
      categories: ["General", "Official matters", "Education"],
      spec: {
        samples: [
          {
            translation: "It is important to follow safety guidelines.",
            sample: "Es ist wichtig, Sicherheitsrichtlinien zu befolgen.",
          },
          {
            translation: "You should follow the instructions carefully.",
            sample: "Du solltest die Anweisungen sorgfältig befolgen.",
          },
        ],
        meanings: ["to follow", "to comply with"],
        conjugation: {
          ich: "befolge",
          du: "befolgst",
          er_sie_es: "befolgt",
          wir: "befolgen",
          ihr: "befolgt",
          sie_Sie: "befolgen",
        },
        infinitive: "befolgen",
        pp: "befolgt",
      } as VerbSpec,
    },
    {
      word: "Anweisung",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Official matters", "Education"],
      spec: {
        samples: [
          {
            translation: "Please follow the instructions carefully.",
            sample: "Bitte befolge die Anweisungen sorgfältig.",
          },
        ],
        article: "Die",
        meanings: ["instruction", "directive"],
        plural: "Anweisungen",
      } as NounSpec,
    },
    {
      word: "Sicherheit",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Health"],
      spec: {
        samples: [
          {
            translation: "Safety is a top priority in this workplace.",
            sample: "Sicherheit hat in diesem Arbeitsplatz oberste Priorität.",
          },
          {
            translation: "Her safety is my main concern.",
            sample: "Ihre Sicherheit ist meine Hauptsorge.",
          },
        ],
        article: "Die",
        meanings: ["safety", "security"],
        plural: "Sicherheiten",
      } as NounSpec,
    },
    {
      word: "Hauptsorge",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Health"],
      spec: {
        samples: [
          {
            translation: "What are your main concerns?",
            sample: "Was sind deine Hauptsorgen?",
          },
        ],
        article: "Die",
        meanings: ["main concern", "primary worry"],
        plural: "Hauptsorgen",
      } as NounSpec,
    },
    {
      word: "Blume",
      level: "A1",
      type: "NOUN",
      categories: ["Nature"],
      spec: {
        samples: [
          {
            translation: "The flower is blooming in the garden.",
            sample: "Die Blume blüht im Garten.",
          },
        ],
        article: "Die",
        meanings: ["flower"],
        plural: "Blumen",
      } as NounSpec,
    },
    {
      word: "Urlaub",
      level: "A1",
      type: "NOUN",
      categories: ["Travel and holidays"],
      spec: {
        samples: [
          {
            translation: "I am going on vacation next week.",
            sample: "Ich mache nächste Woche Urlaub.",
          },
          {
            translation: "We had a great time on our holiday.",
            sample: "Wir hatten eine tolle Zeit in unserem Urlaub.",
          },
        ],
        article: "Der",
        meanings: ["vacation", "holiday"],
        plural: "Urlaube",
      } as NounSpec,
    },
    {
      word: "zeigen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education"],
      spec: {
        pp: "gezeigt",
        infinitive: "zeigen",
        meanings: ["to show", "to display"],
        conjugation: {
          ich: "zeige",
          du: "zeigst",
          er_sie_es: "zeigt",
          wir: "zeigen",
          ihr: "zeigt",
          sie_Sie: "zeigen",
        },
        samples: [
          {
            sample: "Can you show me the way to the station?",
            translation: "Kannst du mir den Weg zum Bahnhof zeigen?",
          },
        ],
      } as VerbSpec,
    },
    {
      word: "vergessen",
      level: "A1",
      type: "VERB",
      categories: ["General"],
      spec: {
        pp: "vergessen",
        infinitive: "vergessen",
        meanings: ["to forget"],
        conjugation: {
          ich: "vergesse",
          du: "vergisst",
          er_sie_es: "vergisst",
          wir: "vergessen",
          ihr: "vergesst",
          sie_Sie: "vergessen",
        },
        samples: [
          {
            sample: "I forgot my keys at home.",
            translation: "Ich habe meine Schlüssel zu Hause vergessen.",
          },
          {
            translation: "I often forget people's names.",
            sample: "Ich vergesse oft die Namen von Leuten.",
          },
        ],
      } as VerbSpec,
    },
    {
      word: "besuchen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Travel and holidays"],
      spec: {
        pp: "besucht",
        infinitive: "besuchen",
        meanings: ["to visit", "to attend"],
        conjugation: {
          ich: "besuche",
          du: "besuchst",
          er_sie_es: "besucht",
          wir: "besuchen",
          ihr: "besucht",
          sie_Sie: "besuchen",
        },
        samples: [
          {
            sample: "I am going to visit my grandparents this weekend.",
            translation:
              "Ich werde dieses Wochenende meine Großeltern besuchen.",
          },
          {
            translation: "She visits the museum every month.",
            sample: "Sie besucht jeden Monat das Museum.",
          },
        ],
      } as VerbSpec,
    },
    {
      word: "Leistung",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Education", "Occupation"],
      spec: {
        samples: [
          {
            translation: "His performance at work has improved significantly.",
            sample:
              "Seine Leistung bei der Arbeit hat sich erheblich verbessert.",
          },
          {
            translation:
              "The athlete's performance in the competition was outstanding.",
            sample: "Die Leistung des Athleten im Wettkampf war herausragend.",
          },
        ],
        article: "Die",
        meanings: ["performance", "achievement"],
        plural: "Leistungen",
      } as NounSpec,
    },
    {
      word: "Wettkampf",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Sports"],
      spec: {
        samples: [
          {
            translation: "She trains hard for the upcoming competition.",
            sample: "Sie trainiert hart für den bevorstehenden Wettkampf.",
          },
          {
            translation: "Are you ready for the competition?",
            sample: "Bist du bereit für den Wettkampf?",
          },
        ],
        article: "Der",
        meanings: ["competition", "contest"],
        plural: "Wettkämpfe",
      } as NounSpec,
    },
    {
      word: "verbessern",
      level: "A2",
      type: "VERB",
      categories: ["General", "Education", "Occupation"],
      spec: {
        samples: [
          {
            translation: "I want to improve my German skills.",
            sample: "Ich möchte meine Deutschkenntnisse verbessern.",
          },
          {
            translation:
              "The company is working to improve its customer service.",
            sample:
              "Das Unternehmen arbeitet daran, seinen Kundenservice zu verbessern.",
          },
        ],
        meanings: ["to improve", "to enhance"],
        conjugation: {
          ich: "verbessere",
          du: "verbesserst",
          er_sie_es: "verbessert",
          wir: "verbessern",
          ihr: "verbessert",
          sie_Sie: "verbessern",
        },
        infinitive: "verbessern",
        pp: "verbessert",
      } as VerbSpec,
    },
    {
      word: "erzählen",
      level: "A1",
      type: "VERB",
      categories: ["General", "Education"],
      spec: {
        samples: [
          {
            translation: "Can you tell me a story?",
            sample: "Kannst du mir eine Geschichte erzählen?",
          },
          {
            translation: "She told me about her trip to Paris.",
            sample: "Sie erzählte mir von ihrer Reise nach Paris.",
          },
        ],
        meanings: ["to tell", "to narrate"],
        conjugation: {
          ich: "erzähle",
          du: "erzählst",
          er_sie_es: "erzählt",
          wir: "erzählen",
          ihr: "erzählt",
          sie_Sie: "erzählen",
        },
        infinitive: "erzählen",
        pp: "erzählt",
      } as VerbSpec,
    },
    {
      word: "Geschichte",
      level: "A1",
      type: "NOUN",
      categories: ["General", "Education"],
      spec: {
        samples: [
          {
            translation: "I love reading history books.",
            sample: "Ich liebe es, Geschichtsbücher zu lesen.",
          },
          {
            translation: "She told me a fascinating story.",
            sample: "Sie erzählte mir eine faszinierende Geschichte.",
          },
        ],
        article: "Die",
        meanings: ["history", "story"],
        plural: "Geschichten",
      } as NounSpec,
    },
    {
      word: "Erfahrung",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Education", "Occupation"],
      spec: {
        samples: [
          {
            translation: "She has a lot of experience in teaching.",
            sample: "Sie hat viel Erfahrung im Unterrichten.",
          },
          {
            translation: "What experience do you have in this field?",
            sample: "Welche Erfahrung hast du in diesem Bereich?",
          },
        ],
        article: "Die",
        meanings: ["experience"],
        plural: "Erfahrungen",
      } as NounSpec,
    },
    {
      word: "untersuchen",
      level: "A2",
      type: "VERB",
      categories: ["General", "Health", "Occupation"],
      spec: {
        samples: [
          {
            translation: "The doctor is examining the patient.",
            sample: "Der Arzt untersucht den Patienten.",
          },
          {
            translation: "They are investigating the cause of the problem.",
            sample: "Sie untersuchen die Ursache des Problems.",
          },
        ],
        meanings: ["to examine", "to investigate", "to inspect"],
        conjugation: {
          ich: "untersuche",
          du: "untersuchst",
          er_sie_es: "untersucht",
          wir: "untersuchen",
          ihr: "untersucht",
          sie_Sie: "untersuchen",
        },
        infinitive: "untersuchen",
        pp: "untersucht",
      } as VerbSpec,
    },
    {
      word: "Ursache",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Health", "Occupation"],
      spec: {
        samples: [
          {
            translation: "The cause of the accident is still unknown.",
            sample: "Die Ursache des Unfalls ist noch unbekannt.",
          },
          {
            translation: "They are investigating the cause of the problem.",
            sample: "Sie untersuchen die Ursache des Problems.",
          },
        ],
        article: "Die",
        meanings: ["cause", "reason"],
        plural: "Ursachen",
      } as NounSpec,
    },
    {
      word: "Angst",
      level: "A2",
      type: "NOUN",
      categories: ["General", "Health"],
      spec: {
        samples: [
          {
            translation: "She has a fear of heights.",
            sample: "Sie hat Angst vor Höhen.",
          },
          {
            translation: "If you have a fear of spiders, avoid that area.",
            sample: "Wenn du Angst vor Spinnen hast, vermeide dieses Gebiet.",
          },
          {
            translation: "He overcame his fear of public speaking.",
            sample:
              "Er hat seine Angst vor dem öffentlichen Sprechen überwunden.",
          },
        ],
        article: "Die",
        meanings: ["fear", "anxiety"],
        plural: "Ängste",
      } as NounSpec,
    },
  ],
};
