/*
  Closer: settings.

  The questions themselves live in the questions folder, one text file per level.
  This file holds the parts that rarely change: level names and descriptions,
  the Response cards, the wildcards, and the closing card.

  Each level holds:
    name   the level's title
    blurb  the line shown on the level's opening screen
    note   a short reminder shown under the blurb
    file   where that level's questions live
*/

const LEVELS = [
  {
    name: "Noticing",
    blurb: "The everyday inner life: tastes, routines, small worries, small pride. Hearing what your partner assumes about you is its own kind of disclosure.",
    note: "After a guess, the other person says what was right and what wasn't.",
    file: "questions/level-1.txt"
  },
  {
    name: "Inner World",
    blurb: "History, values, fears, and the dreams people carry quietly. Answers here often explain things your partner has seen for years without knowing why.",
    note: "Take your time with each one.",
    file: "questions/level-2.txt"
  },
  {
    name: "Between Us",
    blurb: "The relationship itself: what's working, what's missed, and what you're building together.",
    note: "Answer needs as \u201cI'd love more of\u201d rather than \u201cyou never.\u201d",
    file: "questions/level-3.txt"
  }
];

const RESPONSES = [
  { title: "Reflect back", text: "Summarize what you just heard, then ask, \u201cDid I get that right?\u201d" },
  { title: "Say how it landed", text: "In one sentence, tell them what it was like to hear that." },
  { title: "Ask one more", text: "Ask a single follow-up question. No advice." },
  { title: "Name it", text: "Thank them for one specific thing they shared tonight." },
  { title: "Celebrate", text: "Ask about the last good thing they mentioned. Get the details and enjoy it with them." },
  { title: "Name a reach", text: "Describe a recent moment you reached for them, and how it went." }
];

const WILDCARDS = [
  { title: "Go deeper", text: "Answer your last card again, with the part you held back." },
  { title: "Your pick", text: "The reader chooses any question from any level for their partner to answer." },
  { title: "Quiet minute", text: "Sit close for one minute without talking, if you both want to." },
  { title: "Swap", text: "Answer your partner's last card as if you were them. They tell you what you got right." }
];

const CLOSING = "Each of you writes two sentences: one beginning \u201cTonight I learned...\u201d and one beginning \u201cI hope...\u201d Trade them, and read them only once you're apart.";
