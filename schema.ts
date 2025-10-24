export type Category =
  | "General"
  | "Introduction"
  | "Greeting"
  | "Date and Time"
  | "Family and Friends"
  | "Food and Drinks"
  | "Daily routines"
  | "Weather and Seasons"
  | "Housing and Furniture"
  | "Shopping and Clothing"
  | "Directions and Transportation"
  | "Health"
  | "Work"
  | "Occupation"
  | "Hobbies"
  | "Basic cultural topics"
  | "Travel and Holidays"
  | "Leisure"
  | "Environment"
  | "Media"
  | "City life and errands"
  | "Plans"
  | "Communication"
  | "Education"
  | "Living"
  | "Animals and Pets"
  | "Transportation"
  | "Nature"
  | "Sports"
  | "Places"
  | "Emergency"
  | "Appointment"
  | "Aviation"
  | "Sport"
  | "Vegetables"
  | "Fruits"
  | "Entertainment"
  | "Official matters"
  | "Religion";

export type PersonalPronouns =
  | "ich"
  | "du"
  | "er_sie_es"
  | "wir"
  | "ihr"
  | "sie_Sie";

export type Type = "NOUN" | "VERB" | "ADJECTIVE" | "ADVERB";
export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type Case = "Nominative" | "Accusative" | "Dative" | "Genitive";
export type NominativeArticles = "Die" | "Der" | "Das";
export type Preposition =
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

export type Connectors =
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

export type Contraction = "beim" | "zum" | "zur" | "im" | "am" | "ins" | "aufs";

export interface WordSample {
  sample: string;
  translation: string;
  explanations?: Explain[];
}

export interface QuickGrammar {
  key: string;
  explain: string[];
  example: string[];
  important_notes?: string[];
}

export interface Explain {
  question: string;
  answer: string;
  grammars?: string[];
}

export interface WordSpec {
  samples: Array<WordSample>;
}

export interface NounSpec extends WordSpec {
  article: NominativeArticles;
  plural?: string;
  meanings: string[];
}

export interface VerbSpec extends WordSpec {
  infinitive: string;
  pp: string;
  conjugation: Record<PersonalPronouns, string>;
}

export interface Word {
  word: string;
  type: Type;
  level: Level;
  spec: WordSpec;
  important?: boolean;
  categories: Category[];
}

export interface PrepositionDetail {
  preposition: Preposition;
  case: Case[];
}

export interface Data {
  prepositions: PrepositionDetail[];
  grammar: QuickGrammar[];
  words: Word[];
}
