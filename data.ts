import { Data, NounSpec } from "./schema";
/* Introduction */
/* Transportation */
/* Weather and Seasons */
/* Date and Time */
/* Education */
/* Family and Friends */

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
      categories: ["Transportation"],
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
      categories: ["Transportation", "Sports"],
      spec: {
        samples: [
          {
            sample: "Ich fahre mit dem Fahrrad zur Arbeit.",
            translation: "I ride my bicycle to work.",
          },
        ],
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
      categories: ["Transportation"],
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
      word: "Straße",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation", "Places"],
      spec: {
        samples: [
          {
            sample: "Die Straße ist lang.",
            translation: "The street is long.",
          },
          {
            sample: "Die Straße ist heute gesperrt.",
            translation: "The street is closed today.",
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
      categories: ["Transportation", "Places"],
      spec: {
        samples: [
          {
            sample: "Die Brücke verbindet zwei Städte.",
            translation: "The bridge connects two cities.",
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
      categories: ["Transportation", "Places"],
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
      categories: ["Transportation", "Places"],
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
            sample: "Ich habe Zahnschmerzen und muss zum Zahnarzt.",
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
      categories: ["Health", "Transportation"],
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
      word: "Alkohol",
      level: "A1",
      type: "NOUN",
      categories: ["Food and Drinks", "Health"],
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
      categories: ["Transportation", "Places", "Aviation"],
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
      categories: ["Transportation", "Places", "Aviation"],
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
      categories: ["Transportation", "Places", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
      spec: {
        samples: [
          {
            translation: "The flight was delayed due to bad weather.",
            sample: "Der Flug wurde wegen schlechten Wetters verspätet.",
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      word: "Querruder",
      level: "B2",
      type: "NOUN",
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation", "Sport"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["General"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation"],
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
      categories: ["Transportation", "Aviation", "Occupation"],
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
      categories: ["Transportation", "Aviation"],
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
  ],
};
