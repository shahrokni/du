import { Data, NounSpec } from "./schema";

export const data: Data = {
  prepositions: [],
  words: [
    {
      word: "Wolke",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons"],
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
      word: "Stern",
      level: "A1",
      type: "NOUN",
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons"],
      spec: {
        samples: [
          {
            sample: "Im Frühling blühen die Blumen.",
            translation: "In spring, the flowers bloom.",
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
      categories: ["Nature", "Weather and Seasons"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      categories: ["Nature", "Weather and Seasons", "Date and Time"],
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
      word: "Supermarkt",
      level: "A1",
      type: "NOUN",
      categories: ["Places", "Shopping and Clothing"],
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
      categories: ["Transportation", "Places"],
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
      categories: ["Transportation", "Places"],
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
      categories: ["Places", "City life and errands"],
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
      categories: ["Date and Time"],
      spec: {
        samples: [
          {
            sample: "Morgen habe ich einen Termin.",
            translation: "I have an appointment tomorrow.",
          },
          {
            sample: "Am Morgen trinke ich Kaffee.",
            translation: "In the morning, I drink coffee.",
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
      categories: ["Date and Time"],
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
      categories: ["Date and Time"],
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
      word: "Bahnhof",
      level: "A1",
      type: "NOUN",
      categories: ["Transportation", "Places"],
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
      categories: ["Transportation"],
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
      categories: ["Transportation"],
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
      categories: ["Transportation", "Places"],
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
      categories: ["Transportation", "Places"],
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
      word: "Familie",
      level: "A1",
      type: "NOUN",
      categories: ["Family and Friends"],
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
      categories: ["Family and Friends"],
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
      categories: ["Family and Friends"],
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
      categories: ["Family and Friends"],
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
      categories: ["Family and Friends"],
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
      categories: ["Family and Friends"],
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
      categories: ["Family and Friends"],
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
      categories: ["Family and Friends"],
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
      categories: ["Family and Friends"],
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
      categories: ["Family and Friends"],
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
      word: "Brot",
      level: "A1",
      type: "NOUN",
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks", "Vegetables"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks", "Health"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks", "Vegetables"],
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
      categories: ["Food and Drinks", "Fruits"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks"],
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
      categories: ["Food and Drinks"],
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
