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
  | "Places";

export type PersonalPronouns =
  | "ich"
  | "du"
  | "er"
  | "sie_her"
  | "es"
  | "wir"
  | "ihr"
  | "sie_they"
  | "Sie_formal";

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

export interface WordSpec {
  samples: string[];
}

export interface NounSpec extends WordSpec {
  article: NominativeArticles;
  plural?: string;
  meanings: string[];
}

export interface VerbSpec extends WordSpec {
  infinitive: string;
  pp: string;
  present: Record<PersonalPronouns, string>;
}

export interface Word {
  word: string;
  type: Type;
  level: Level;
  spec: WordSpec;
  categories: Category[];
}

export interface PrepositionDetail {
  preposition: Preposition;
  case: Case[];
}

export interface Data {
  prepositions: PrepositionDetail[];
  words: Word[];
}
