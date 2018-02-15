# BlackBoxes@BIOTS2018 submission
*Note: This work was done at a hackathon with only one coder, therefore don't expect outstanding code quality but more hacky stuff*

## See it in action
[https://pascalwacker.github.io/blackboxes/](https://pascalwacker.github.io/blackboxes/)
*Login: just use any e-mail adress and a random password*

### Used Ressources
- [Adminator](https://github.com/puikinsh/Adminator-admin-dashboard) Bootstrap Dashboard ([MIT Licence](https://opensource.org/licenses/MIT))
- Icon by [Freepik](http://www.freepik.com) ([CC BY 3.0](https://creativecommons.org/licenses/by/3.0/))
- [MetaMask](https://metamask.io/) Browser Plugin

### Getting Started
In order to run the project on your local machine all what you need to do is to have the prerequisites stated below installed on your machine and follow the installation steps down below.

#### Prerequisites
  - Node.js
  - NPM (or Yarn)
  - Git

#### Installing & Local Development
Start by typing the following commands in your terminal in order to get the project full package on your machine and starting a local development server with live reload feature.

```
> git clone https://github.com/pascalwacker/blackboxes.git blackboxes
> cd blackboxes/theme
> npm install
> npm run dev
```

### Files/Folders Structure
Here is a brief explanation of the template folder structure and some of its main files usage:

#### What you are looking for
The JS handling all the MetaMask interactions, you can find here: [theme/src/assets/scripts/index.js](https://github.com/pascalwacker/blackboxes/blob/master/theme/src/assets/scripts/index.js)

#### app
Contains all the smart contracts (just one at the moment)

#### theme
Contains all files for the website

```
└── src                         # Contains all template source files.
│   └── assets                  # Contains JS, CSS, images and icon fonts.
│   │   └── scripts             # Contains all JavaScript files.
│   │   │   └── charts          # Chart.js, Sparkline & Pie Chart plugins init.
│   │   │   └── chat            # All chat app JS code.
│   │   │   └── constants       # Template constant values like color values.
│   │   │   └── datatable       # Date table plugin init.
│   │   │   └── datepicker      # Bootstrap datepicker init.
│   │   │   └── email           # All email app code.
│   │   │   └── fullcalendar    # Fullcalendar plugin init.
│   │   │   └── googleMaps      # Google maps API integration code.
│   │   │   └── masonry         # Masonry layout code.
│   │   │   └── popover         # Bootstrap popover plugin init.
│   │   │   └── scrollbar       # Perfect scrollbar plugin init.
│   │   │   └── search          # Topbar toggle search init.
│   │   │   └── sidebar         # Sidebar JS code.
│   │   │   └── skycons         # Animated icons plugin init.
│   │   │   └── utils           # Basic utils used for proper rendering.
│   │   │   └── vectorMaps      # Vector maps plugin init.
│   │   │   └── index.js        # Indicator file and "Spaghetti-Code" for the Hackathon
│   │   │
│   │   └── static              # Contains the non-code files.
│   │   │   └── fonts           # Contains icon fonts.
│   │   │   └── images          # Contains all template images/svg.
│   │   │
│   │   └── styles              # Contains all SCSS files.
│   │       └── spec            # Contains custom SCSS files.
│   │       │   └── components  # Contains all template components.
│   │       │   └── generic     # Contains basic scaffolding styles.
│   │       │   └── screens     # Contains views specific styles.
│   │       │   └── settings    # Contains all template variables.
│   │       │   └── tools       # Contains all mixins.
│   │       │   └── utils       # Contains helper classes.
│   │       │   └── index.scss  # Indicator file.
│   │       │
│   │       └── vendor          # Contains all plugin files & custom styles.
│   │       └── index.scss      # Indicator file.
│   │
│   └── *.html                  # All HTML pages files .
└── webpack                     # Contains Webpack init code.
│   └── plugins                 # Contains all Webpack plugins config.
│   └── rules                   # Contains Loaders config code.
│   └── config.js               # Contains Webpack config object.
│   └── devServer.js            # Webpack dev server config code.
│   └── manifest.js             # All build system constants.
│
└── .babelrc                    # Babel ES6 Transpiler.
└── .editorconfig               # Keep same coding styles between code editors.
└── .eslintrc.yml               # JavaScript Linting.
└── .gitattributes              # Git Attributes.
└── .gitignore                  # Ignored files in Git.
└── .stylelintrc.yml            # SCSS/CSS Linting.
└── browserslist                # Supported Browsers.
└── CHANGELOG.md                # Versioning.
└── package.json                # Package metadata.
└── README.md                   # Manual file.
└── webpack.config.js           # Webpack main config file.
└── yarn.lock                   # Yarn metadata.
```