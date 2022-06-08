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

### Before you contribute: Docs workflow

This repository has at least 2 branches at all times: `main` and `docs`. 
The Chronologue website is created and maintained on the `main` branch. 

<img width="763" alt="image" src="https://user-images.githubusercontent.com/13576110/172500916-bad816c6-05f9-416b-84a5-4bbe54da3e85.png">

The documentation for Chronologue is created and maintained on the `docs` branch. Since merging the `docs` branch into the `main` branch would delete the whole Chronologue website, we use branch protection rules which are visible to administrators in the repo settings. Because of these branch protection rules, you can't directly commit onto the `docs` branch. The general authoring workflow looks like this: 

1. Create a new branch
2. Make your changes, for example: create a draft.
3. Open a pull request, so others can review your content. 
4. When you and your reviewers agree that your documentation is ready for publication, you can merge your branch with `docs`. This requires at least **one** approval.
   > ✔️ Once your PR is merged, your documentation is online.

### Contributing via Github<a id="Github"></a>

Writing or editing files directly on Github is a good way to get started if you haven't worked with the command line or IDEs or just want to make a quick change. 

#### Creating a new branch:

1. Pick an issue you want to work on.
2. Use _Create a branch_ to create a new branch that is linked to the issue. <br/>
   <img width="252" alt="image" src="https://user-images.githubusercontent.com/13576110/172503283-338f72a5-29c4-4131-b159-040a35c5cffe.png">
3. Change the branch source to `docs` and name the branch how you prefer. The default is the number and name of the issue.<br/>
   <img width="500" alt="branch" src="https://user-images.githubusercontent.com/13576110/172506197-58ffe5c5-d356-444b-aa6d-a9629897350e.png">
   > ℹ️ After you click _Create branch_, a new window pops up with information that you can use in your local development setup. Since you want to work on the website, just dismiss this window. 
4. Click on the branch to switch to you working branch. <br/>
   <img width="332" alt="image" src="https://user-images.githubusercontent.com/13576110/172505635-c3197f8c-eef2-42a5-9297-766e34e85b81.png">


#### To edit a file in Github: 

1. In your working branch, locate the file you want to edit. 
2. Verify that you are in your working branch. <br/>
   <img width="600" alt="branch-overview" src="https://user-images.githubusercontent.com/13576110/172507864-b76f3163-f084-48cc-831e-233779c76934.png">
3. Hit the _Edit this file_ button.<br/>
   <img width="429" alt="image" src="https://user-images.githubusercontent.com/13576110/172506536-94669369-a5a3-4b2a-9aa5-66eeeebf2442.png">
4. Edit the file using standard Markdown syntax. To see a preview, switch to the _Preview_ tab. <br/>
   <img width="291" alt="image" src="https://user-images.githubusercontent.com/13576110/172506797-4cb454e4-8c4c-4db9-85fc-7ebe9568c0c9.png">
5. Supplement a meaningful commit message. Remember: We are open source and your changes are visible to the public. You can commit directly on your working branch.<br/>
   <img width="738" alt="image" src="https://user-images.githubusercontent.com/13576110/172507525-a51253e3-0bc1-41c3-9c57-1ae196af92b0.png">
   > ✔️ Congrats, you just created a **commit**.

#### Creating a new pull request (PR): 
1. Navigate to the tree view of your working branch. The URL should look like this: 
   ```
   https://github.com/thegooddocsproject/chronologue/tree/your-branch-name
   ```
2. Click on _Contribute_ and use the _Compare_ option. <br/> 
   <img width="726" alt="Go to file" src="https://user-images.githubusercontent.com/13576110/172509325-698203d3-76e9-4065-a481-df432ae01113.png">
3. Because we want to merge our changes in the `docs` branch, make sure that your changes are compared `docs` and **not** `main`. <br/>
   Click on _Create pull request_. 
<img width="1000" alt="Comparing changes" src="https://user-images.githubusercontent.com/13576110/172508715-fc158257-e90c-4dbf-bb97-5f5182ddf644.png">
4. Describe the changes you made and assign me (@kickoke) as a reviewer. Create the PR. 
   > ℹ️ After you created your PR, @kickoke or someone who got assigned will review your changes. When you have at least **one** approval, your contribution gets merged into `docs` and your content is online. ✨ 

### Contributing via Gitpod<a id="Gitpod"></a>
👷 Work in progress
