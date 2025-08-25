type Word = { text: string; start: number; end: number };
export type Phrase = { text: string; start: number; end: number; words: Word[] };

export const mockData: Phrase[] = [
  {
    text: "Good morning",
    start: 0.0,
    end: 1.5,
    words: [
      { text: "Good", start: 0.0, end: 0.7 },
      { text: "morning", start: 0.8, end: 1.5 }
    ]
  },
  {
    text: "everyone",
    start: 1.6,
    end: 2.5,
    words: [{ text: "everyone", start: 1.6, end: 2.5 }]
  },
  {
    text: "Welcome to our English class",
    start: 2.6,
    end: 5.0,
    words: [
      { text: "Welcome", start: 2.6, end: 3.2 },
      { text: "to", start: 3.3, end: 3.6 },
      { text: "our", start: 3.7, end: 4.0 },
      { text: "English", start: 4.1, end: 4.6 },
      { text: "class", start: 4.7, end: 5.0 }
    ]
  }
];