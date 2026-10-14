# Closer

A question card game for two partners. Both of you answer every card, and the questions go deeper as you move through three levels.

Play it at **[https://yourusername.github.io/closer](https://runic-wolfe-games.github.io/closer-card-game/)**

## How to play

1. **Take turns drawing.** The drawer reads the card aloud. The other person answers first, then the drawer answers the same card.
2. **Listen to understand.** No fixing, no correcting, no debating each other's memory of events.
3. **Move up together.** Go to the next level when you both feel ready. Eight to twelve cards per level makes a good sitting.
4. **Pass freely.** Each player gets two passes per game. A pass needs no explanation.
5. **Use Response cards** after an answer that landed hard or mattered.
6. **Pause if it heats up.** If either of you feels flooded, take at least 20 minutes apart before returning.

The three levels:

- **Noticing:** tastes, routines, small worries, small pride.
- **Inner World:** history, values, fears, quiet dreams.
- **Between Us:** what's working, what's missed, what you're building.

Wildcards are shuffled into each level. The game ends with a closing card.

## Files

```
index.html          the page and the game logic
settings.js         level names and descriptions, Response cards, wildcards, closing card
styles.css          colors, fonts, and layout
questions/
  level-1.txt       Noticing
  level-2.txt       Inner World
  level-3.txt       Between Us
```

## Adding or changing questions

Each level's questions live in a plain text file, one question per line.

1. Open the file in `questions/` on GitHub (the website or the mobile app both work).
2. Click the pencil icon and add, edit, or remove a line.
3. Commit the change.

The site updates within a few minutes. New questions appear in the next game you start.

A few rules for the text files:

- Blank lines are skipped.
- Lines starting with `#` are ignored. Use them for drafts, notes, or questions you want to retire without deleting.
- Order doesn't matter. Each game shuffles the deck.
- Lines that begin with "Guess" automatically show a reminder to say what was right and what wasn't.

Example:

```
What do you think I was like at twelve?
# What's a smell that takes you somewhere? (still drafting)
Guess what I'd do first with a free afternoon and no plans.
```

## Changing everything else

Level names, level descriptions, Response cards, wildcards, and the closing card are in `settings.js`. Each entry sits inside double quotes and ends with a comma. A missing quote or comma in this file will stop the game from loading, so edit it carefully.

Colors and fonts are in `styles.css`. Each level has its own set of colors near the top of the file, with separate values for light and dark mode.

## Publishing on GitHub Pages

1. Upload all the files to the repository, keeping the `questions` folder and every file name exactly as listed above.
2. Go to **Settings → Pages**.
3. Under "Build and deployment," set the source to **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. The site goes live at `https://yourusername.github.io/closer` within a few minutes.

On a free GitHub account, Pages requires a public repository, so anyone with the link can see the questions.

## Previewing changes on your computer

The game loads its questions from the text files, which browsers won't allow when you double-click `index.html`. To preview locally, open a terminal in this folder and run:

```
python3 -m http.server
```

Then open `http://localhost:8000` in your browser.

## Troubleshooting

**The start screen says the questions didn't load.** A file in `questions/` is missing, renamed, or empty. The message names the file. Check that the folder and all three files are in the repo with their exact names.

**The game is blank or the buttons do nothing.** The most likely cause is a typo in `settings.js`, usually a missing quote or comma. Check your last edit to that file.

**A new question isn't showing up.** Wait a few minutes for GitHub Pages to finish publishing, then refresh. A resumed game keeps the deck it started with, so start a new game to see the update.

## Privacy

Nothing typed into the game is sent anywhere. Player names and saved progress stay in the browser on the device you're playing on.

## Background

The three-level format is inspired by *We're Not Really Strangers*. The questions draw on research into how closeness forms:

- Gradual, reciprocal self-disclosure builds closeness (Aron et al., 1997).
- Relationships deepen in breadth before depth (Altman & Taylor, Social Penetration Theory, 1973).
- Intimacy depends on feeling understood, validated, and cared for (Reis & Shaver, 1988).
- Knowing a partner's inner world, fondness and admiration, turning toward bids, and shared meaning (John Gottman).
- How partners respond to each other's good news predicts closeness (Gable et al., 2004).
