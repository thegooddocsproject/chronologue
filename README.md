# Chronologue documentation

This branch contains the Chronologue documentation. 
To document Chronologue, we use the static site generator [docusaurus](https://docusaurus.io/). 
We chose docusaurus for its ability to be highly customized since we want to provide additional commentary to **what** is good about the documentation. 

## Directory structure in a nutshell
```
root
├── docs
│   ├── API
│   │   └── Documentation files
│   │   └── index.md
│   ├── chronologue
│   │   └── Documentation files
│   │   └── index.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
└── sidebars.js

```

- `/docs/` - Contains the Markdown files for the docs. Customize the order of the docs sidebar in sidebars.js. 
- `/src/` - Non-documentation files like pages or custom React components. 
   - `/src/pages` - Any JSX/TSX/MDX file within this directory will be converted into a website page. More details can be found in the pages guide. Currently, we don't use this. 
- `/static/` - Static directory. Any contents inside here will be copied into the root of the final build directory.
- `/docusaurus.config.js` - A config file containing the site configuration.
- `/package.json` - A Docusaurus website is a React app. Specifies any dependencies (npm packages).
- `/sidebars.js` - Specifies the in which order the docs appear in the Table of Contents (aka sidebar).
## How to add contribute documentation to Chronologue

There are two types of workflows you can use to contribute documentation: 

-   [Directly in Github](#Github): Easy method if you just want to update text.
-   [Using Gitpod](#Gitpod): Recommended if you can use VS code and want to edit more comfortably.


### Contributing via Github<a id="Github"></a>

### Contributing via Gitpod<a id="Gitpod"></a>
