# Atelier — LC French HL

A static study site for the **Leaving Certificate Higher Level French** exam, built for personal use and shared with a few friends sitting the same paper.

**Live site:** _(add the GitHub Pages URL here once published)_

## What's in it

| Section | What it covers |
|---|---|
| **Comprehensions** | Every higher paper since 2010 — text, questions, marking-scheme answers, and a Q3 *Langue* grammar guide. |
| **Composing** | Section II production écrite — opinion piece, journal intime and lettre formelle. Includes structure guides, phrase banks organised by step, and predicted themes for the 2026 paper. |
| **Aural** | The listening paper — overview, section-by-section strategy, archive of past papers, with audio + transcript for the most recent years. |
| **Verbs** | Conjugation tables across all tenses, with practice prompts. |
| **Vocab** | ~340 themed vocab words across 13 themes, with browse and quiz modes. |
| **Flashcards** | Spaced-repetition study using the vocab list. Progress saved per device via localStorage. |
| **Tips** | Paper overview, timing guide, examiner-derived advice, common mistakes. |
| **Grammar** | Standalone Q3 Langue guide — tenses, pronouns, reflexives, agreements, negation, with worked examples. |

## Running it locally

It's plain static HTML, CSS and JavaScript — no build step, no dependencies. To preview:

```sh
# any static server works; pick one
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## Tech notes

- All vocab data lives in `js/vocab-data.js` and is shared by `vocab.html` and `flashcards.html`.
- Past-paper text content is rendered directly into the comprehension pages; PDFs in `papers/` and `aural/` are the originals for reference.
- Aural audio (where available) is played via the browser's native `<audio>` element with custom playback-speed controls.
- Flashcard progress, daily streak and quiz state are persisted in `localStorage` — nothing is sent anywhere.

## Credits & disclaimer

Past papers, marking schemes and aural audio are © **Coimisiún na Scrúduithe Stáit / State Examinations Commission, Ireland** and are reproduced here for personal exam preparation only. Originals are available at [examinations.ie](https://www.examinations.ie/).

All study notes, structure guides, phrase banks, predictions and the site's code and design are written by me for my own revision.

Built with ☕ for the 2026 Leaving Cert.
