# Edenia: MVP Plan

**Feel at home in your life.**

Version 1 is built with plain HTML, CSS and JavaScript, in the `v1/` folder. Data is saved in the browser.

## MVP goal

A small, working home page where I can add habits, tick them off each day, see my streaks, write simple notes and get reminders, all in a calm, welcoming interface.

## The three MVP features

| Feature | Done when |
|---|---|
| **Habits with streaks** | I can add a habit, tick it done for today, refresh the page and still see it, and see how many days in a row I have done it. |
| **Simple notes** | I can write a note, see it in a list, and still see it after a refresh. |
| **In-app reminders** | I can set a reminder with a time, and a pop-up appears on screen when that time comes while the app is open. |

## Tasks

| # | Task | Done when |
|---|---|---|
| 1 | Set up the v1 files | `v1/` contains `index.html`, `css/styles.css` and `js/app.js`, and the page opens in the browser with a heading. |
| 2 | Show a random welcome message | A different welcome message from a list appears when the page loads. |
| 3 | Add a habit | I can type a habit name, click a button, and it appears in a list on the page. |
| 4 | Tick a habit as done for today | Each habit has a button or checkbox that marks it done today and shows it as done. |
| 5 | Save habits in the browser | After a refresh, my habits and today’s ticks are still there (`localStorage`). |
| 6 | Show the streak count | Each habit shows how many days in a row it has been completed. |
| 7 | Add simple notes | I can write a note, see all notes in a list, and they survive a refresh. |
| 8 | Add an in-app reminder | I can set a reminder time, and a pop-up shows when the time arrives. |

## Suggested order

Tasks 1 to 6 give a working habit tracker, which is a good first milestone. Then notes (7), then reminders (8).

## Out of scope for the MVP

Goals and reviews, journal, library, planner, writing workspace, vision board, challenges, accounts and login, uploads, calendar sync, email notifications, AI, and the React and backend versions. These are listed in `project-vision.md` and come later.

## Definition of finished

- All eight tasks are done and their issues are closed.
- The app works on a phone-sized screen as well as a laptop.
- The README explains what Edenia is and how to open v1.
- No passwords or keys are committed to the repo.