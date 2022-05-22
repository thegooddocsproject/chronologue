# Chronologue Documentation plan

This document plans the initial set of documentation to enable our users to reach their goals. 
The documentation will be written and maintained in the Good Docs [website repo](https://github.com/thegooddocsproject/website-hugo). 

## Who will find The Chronologue useful 
- Casual readers
- Developers
- Technical writers

## Content outline

|Title   |Content Type   |Tests Template   | Description  | Audience | Assigned to |
|---|---|---|---|---|----|
|Getting started with Chronologue  | Getting started  | [Quickstart](https://github.com/thegooddocsproject/templates/tree/dev/quickstarts)  | Explains how to find an event and view it.  | End users  | Tina
|How Chronologue works  |Concept   | [Explanation](https://github.com/thegooddocsproject/templates/tree/dev/explanation)  | Explains scientific background. [Written down here](https://github.com/thegooddocsproject/chronologue/wiki/Technology-of-the-Chronologue-telescope-explained)   |  | Tina|
|  How Chronologue API works | Concept  | [API Overview](https://github.com/thegooddocsproject/templates/tree/dev/api-overview)  | Explains scientific background. [Written down here](https://github.com/thegooddocsproject/chronologue/wiki/Technology-of-the-Chronologue-telescope-explained)   |Explains the architecture of the API on a higher level   | Scientist, Developer  | Ian|
| Parts of the Chronologue Time Travel Telescope  |  Concept |  [Explanation](https://github.com/thegooddocsproject/templates/tree/dev/explanation)  | Explains scientific background. [Written down here](https://github.com/thegooddocsproject/chronologue/wiki/Technology-of-the-Chronologue-telescope-explained)  |Explains the parts that the telescope is made of. | Technicians  |Ricky, Serena for Graphics|
| Requesting a new recording | How-to  | [How-to](https://github.com/thegooddocsproject/templates/tree/dev/how-to) | Explains how to submit a new request for time-travel. |Scientist   |Tina|
| Adding new entries to the Chronologue catalog  | How-to   |  [API quickstart](https://github.com/thegooddocsproject/templates/tree/dev/api-quickstart) |  Explains how a developer uses a POST request to add more information | Developer  |Tina|
| Chronologue API reference  |API reference   |  [API reference](https://github.com/thegooddocsproject/templates/tree/dev/api-reference) ! Probably updated soon | List of all endpoints.  | Developers  |Tina|
| Troubleshooting XYZ  |Troubleshooting   |  ? | What could we "break" that would need troubleshooting?  | Technicians  |Maybe Ricky|
|Glossary   | Glossary  | ?  | Explains terminology used in this project  | End users, Scientists, Technicians  |Tina|
| Release Notes  | Changelog   |  ? | Describes which features we introduced and why or what features we deprecated  |  Developers |Tina/ Ian|

<!-- 
Column
|   |   |   |   |   |
-->

# About The Chronologue API

## Lisence 
The API will use Zero clause BSD.

## Types of Documentation Needed
- API routes
- Quick start guide
- Bug reporting guide
- Concept explanation guide

## Future features
**Note**: Since the app is hosted on Netlify, all future feature implementations must be compatible with Netlify. 

- User authentication using OAuth 2.0 
    - Current plan is to use NextAuth.js or other Netlify-supported plugin to enable authentication.
- ~~API cache will be handled by Next.js and Netlify~~ 

# Contributing
You can start contributing to the following parts of the repository: 
- API data, located in: `/data/fragments`
- Next.js web view and app logics. You can help making The Chronologue look more polished and functional by contributing to program code. You should be familiar to the following concepts:
    - React library
    - Next.js framework
    - Netlify hosting infrastructure
