# Edenia: Project Vision

**Feel at home in your life.**

- **Status:** planning, work in progress
- **Author:** Shann
- **Version:** 3

## 1. Overview

Edenia is a private, gentle space to plan, track, reflect and feel at home in your life. It brings habits, goals, notes, a journal, reminders, reading, writing and planning into one place, so there is no more jumping between a planner, Notion and Substack.

It is also a full-stack learning project. It is built in stages, from plain HTML, CSS and JavaScript up to React, Node, Express, a database, authentication and deployment, with GitHub used throughout.

## 2. Name and feeling

**Edenia** comes from the Garden of Eden: a first home, a private garden where nothing is rushed and nothing is hidden. The *-ia* ending makes it a place, a small world of your own.

The brand is built on how it should feel to use:

> Calm, held and unhurried, with a quiet sense of growing. Like being at home.

Five feelings behind it:

1. **Safe:** this is mine, and nobody is watching.
2. **Spacious:** there is room to breathe, with no rigid hourly schedules.
3. **Unhurried:** slowly is fine (*polepole*).
4. **Quietly proud:** look how far I have come.
5. **Curious:** what else is here?

## 3. Design principles

- **Flexible:** deadlines and optional time estimates, never forced hourly slots.
- **Personal:** everyone arranges their life their own way.
- **Simple:** useful without complicated screens.
- **Centralised:** one place for everything.
- **Reflective:** regular reviews of goals, habits and weeks.
- **Private by default:** journals, notes, goals and media are visible only to the owner.
- **Expandable:** new modules can be added without redesigning the app.
- **Progress over perfection:** encourage consistency without guilt.

## 4. The home: modules as rooms

| Room | Module | What it does |
|---|---|---|
| The doorway | Dashboard | Today’s overview, habits, reminders, current goals, recent notes, quick-add |
| The garden | Habits and goals | Plant goals, tend habits, track progress, run reviews |
| The study | Notes | Quick notes, course notes, meeting notes, general notes |
| The quiet room | Journal | Text, photos, video and voice notes in a private timeline |
| The bookshelf | Library | Books, articles, podcasts, videos, courses |
| The window | Planner and reminders | Daily to yearly planning, reminders, calendar view |
| The desk | Writing workspace | Drafts for Substack and other writing |
| The wall | Vision board | Images, quotes and goals pinned to boards |
| The keys | Account and settings | Profile, login, privacy, preferences |

Also planned: a focus timer with adjustable lengths, challenges (Shukyo, Seiza and Shokunin), integrations (calendar, email, cloud storage) and optional AI help.

## 5. Key decisions

- **Streaks:** a setting per habit. *Strict* resets to 0 after a miss (for challenges like Shukyo). *Gentle* keeps the history and shows consistency, such as 5 of the last 7 days.
- **Focus timer:** adjustable focus and break lengths. Built later.
- **Library:** one library with a type field (book, article, podcast, video, course), not separate sections.
- **Substack drafts:** a simple writing space, then copy to Substack. Check whether Substack allows more before relying on it.
- **Posts:** short posts live inside the journal.
- **Notifications:** in-app reminders first, then browser notifications, then email and push.
- **Calendar sync:** later. Exporting reminders as a calendar file is a good first step.
- **Uploads:** text first, then images, then voice notes, then video.
- **AI:** last, and optional.

## 6. Voice: how Edenia speaks

Warm, soft and encouraging, like a good host. Short sentences. Never scolding.

| Moment | Message |
|---|---|
| Opening the app | Welcome back. Your garden waited for you. |
| Opening the app (alt) | Make yourself at home. |
| Missed habit | The garden kept your place. |
| A goal needs attention | This one needs a little attention when you’re ready. |
| Something completed | Something just bloomed. |
| Empty notes page | Plant your first thought. |
| A streak | Polepole, and look at you. |
| First visit | Karibu nyumbani. (Welcome home.) |
| End of day | Rest well. Everything’s safe here. |

## 7. Technology plan

| Stage | Stack | What it teaches |
|---|---|---|
| 1 | HTML, CSS, JavaScript, data in the browser | DOM, events, JS best practices |
| 2 | React with Vite | Components, props, state, effects |
| 3 | Node and Express API, tested in Postman | Routes, methods, backend |
| 4 | Database (MongoDB or PostgreSQL, to decide) and authentication | Data design, login, security |
| 5 | Deployment, file storage, calendar sync, AI | Shipping a real product |

Throughout: GitHub with small commits, a clear README, and the feature list tracked as GitHub issues.

## 8. Build order

1. **MVP:** habits with streaks (strict and gentle), simple notes, in-app reminders.
2. Goals with progress and reviews.
3. Library.
4. Journal (text first).
5. Accounts and authentication.
6. Planner and writing workspace.
7. Focus timer, vision board, challenges.
8. Uploads (images, voice, video).
9. Calendar sync, notifications, AI.

## 9. Risks

- **Too much at once:** build one module at a time and keep a “later” list.
- **Relying on AI without understanding:** be able to explain what each piece does and why.
- **Private data:** never store journals or uploads without authentication in place.
- **Cost and complexity of uploads and email:** postpone until the core works.
- **Secrets:** never commit passwords or keys. Keep them in a `.env` file that is ignored by Git.

## 10. Next steps

1. Add this document to the repo and push.
2. Update the README with the name, tagline and plan.
3. Confirm the MVP and break it into small tasks (GitHub issues).
4. Build version 1 in the `v1/` folder.
5. Explore one Express route tested in Postman.